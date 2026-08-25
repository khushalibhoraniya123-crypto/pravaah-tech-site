import { Request, Response } from 'express';
import validator from 'validator';
import { ContactInquiry } from '../models/ContactInquiry.js';
import { getDBStatus } from '../config/db.js';
import { inMemoryInquiries, InMemoryInquiry } from '../utils/memoryStore.js';
import { emailService } from '../services/emailService.js';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;

    // Field validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      res.status(400).json({ success: false, message: 'Full name is required.' });
      return;
    }

    if (!email || typeof email !== 'string' || !validator.isEmail(email.trim())) {
      res.status(400).json({ success: false, message: 'A valid email address is required.' });
      return;
    }

    if (!service || typeof service !== 'string' || service.trim().length === 0) {
      res.status(400).json({ success: false, message: 'Please select a service for your inquiry.' });
      return;
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      res.status(400).json({ success: false, message: 'Project details / message is required.' });
      return;
    }

    const sanitizedData = {
      name: validator.escape(name.trim()),
      email: validator.normalizeEmail(email.trim()) || email.trim(),
      phone: phone ? validator.escape(phone.trim()) : '',
      company: company ? validator.escape(company.trim()) : '',
      service: validator.escape(service.trim()),
      budget: budget ? validator.escape(budget.trim()) : 'Flexible / Not sure yet',
      message: validator.escape(message.trim()),
      status: 'new' as const,
    };

    let inquiryId: string = '';
    let createdAt: Date = new Date();

    if (getDBStatus()) {
      const newInquiry = await ContactInquiry.create(sanitizedData);
      inquiryId = newInquiry._id.toString();
      createdAt = newInquiry.createdAt;
    } else {
      // Fallback in-memory persistence
      const memoryInquiry: InMemoryInquiry = {
        _id: 'inq_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        ...sanitizedData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      inMemoryInquiries.unshift(memoryInquiry);
      inquiryId = memoryInquiry._id;
      createdAt = memoryInquiry.createdAt;
    }

    // Send instant Nodemailer email notification asynchronously
    emailService.sendInquiryNotification({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      service: service.trim(),
      budget: budget?.trim(),
      message: message.trim(),
      createdAt,
    }).catch((err) => {
      console.error('Background email notification error:', err);
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your project inquiry has been submitted successfully.',
      data: {
        id: inquiryId,
        name: sanitizedData.name,
        createdAt,
      },
    });
  } catch (error: any) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please check your information and try again.',
    });
  }
};
