import { Request, Response } from 'express';
import validator from 'validator';
import { ContactInquiry } from '../models/ContactInquiry.js';
import { getDBStatus } from '../config/db.js';
import { inMemoryInquiries, InMemoryInquiry } from '../utils/memoryStore.js';

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

    if (getDBStatus()) {
      const newInquiry = await ContactInquiry.create(sanitizedData);
      res.status(201).json({
        success: true,
        message: 'Thank you! Your project inquiry has been submitted successfully.',
        data: {
          id: newInquiry._id,
          name: newInquiry.name,
          createdAt: newInquiry.createdAt,
        },
      });
      return;
    } else {
      // Fallback in-memory persistence
      const memoryInquiry: InMemoryInquiry = {
        _id: 'inq_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
        ...sanitizedData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      inMemoryInquiries.unshift(memoryInquiry);

      res.status(201).json({
        success: true,
        message: 'Thank you! Your project inquiry has been submitted successfully.',
        data: {
          id: memoryInquiry._id,
          name: memoryInquiry.name,
          createdAt: memoryInquiry.createdAt,
        },
      });
      return;
    }
  } catch (error: any) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please check your information and try again.',
    });
  }
};
