import { Request, Response } from 'express';
import validator from 'validator';
import { emailService } from '../services/emailService.js';

export const handleContactSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, company, service, subject, message } = req.body;

    // 1. Basic validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      res.status(400).json({
        success: false,
        message: 'Full name is required.',
      });
      return;
    }

    if (!email || typeof email !== 'string' || !validator.isEmail(email.trim())) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      res.status(400).json({
        success: false,
        message: 'Please enter your message or project requirements.',
      });
      return;
    }

    const sanitizedData = {
      name: validator.escape(name.trim()),
      email: validator.normalizeEmail(email.trim()) || email.trim(),
      phone: phone ? validator.escape(phone.trim()) : '',
      company: company ? validator.escape(company.trim()) : '',
      service: service ? validator.escape(service.trim()) : subject ? validator.escape(subject.trim()) : 'General Inquiry',
      message: message.trim(),
      createdAt: new Date(),
    };

    // 2. Dispatch via Nodemailer
    await emailService.sendInquiryEmail(sanitizedData);

    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully to Pravaah Technology.',
      data: {
        name: sanitizedData.name,
        email: sanitizedData.email,
        service: sanitizedData.service,
        sentAt: sanitizedData.createdAt.toISOString(),
      },
    });
  } catch (error: any) {
    console.error('❌ [Contact API Error]:', error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email. Please check server configuration and try again.',
    });
  }
};
