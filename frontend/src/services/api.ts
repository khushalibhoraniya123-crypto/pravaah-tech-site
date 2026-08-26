import type { ContactFormData, ContactInquiryResponse } from '../types';

const rawApiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').trim().replace(/\/+$/, '');
const API_BASE_URL = rawApiUrl.endsWith('/api') ? rawApiUrl : `${rawApiUrl}/api`;
const BUSINESS_EMAIL = 'pravaahtechnologies15@gmail.com';

export const api = {
  // Public Contact Form & Project Proposal Submission via Nodemailer Backend
  async submitContact(data: ContactFormData): Promise<ContactInquiryResponse> {
    // 1. Client-Side Input Validation
    if (!data.name || !data.name.trim()) {
      throw new Error('Please enter your full name.');
    }
    if (!data.email || !data.email.trim() || !data.email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!data.message || !data.message.trim()) {
      throw new Error('Please enter your project details or message.');
    }

    let backendError: string | null = null;

    // 2. Submit to Nodemailer Backend API (/api/contact)
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || '',
          company: data.company?.trim() || '',
          service: data.service || 'General Inquiry',
          subject: data.service || 'General Inquiry',
          message: data.message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        return {
          success: true,
          message: result.message || 'Thank you! Your message has been sent successfully.',
          data: {
            id: 'inq_' + Date.now().toString(36),
            name: data.name,
            createdAt: new Date().toISOString(),
          },
        };
      }

      if (response.status === 400) {
        throw new Error(result.message || 'Please check your submitted information and try again.');
      }

      if (response.status === 500 && result.message) {
        backendError = result.message;
      }
    } catch (err: any) {
      if (err.message && (err.message.includes('Please enter') || err.message.includes('check your submitted'))) {
        throw err;
      }
      backendError = err.message;
    }

    // 3. Fallback Email Gateway (If backend is offline or SMTP requires direct relay)
    try {
      const emailPayload = {
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || 'Not provided',
        company: data.company?.trim() || 'Not provided',
        service: data.service || 'General Inquiry',
        message: data.message.trim(),
        _subject: `🚀 New Contact Message: ${data.name.trim()} - ${data.service || 'Inquiry'}`,
        _replyto: data.email.trim(),
        _captcha: 'false',
        _template: 'table',
      };

      const fallbackRes = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const resJson: any = await fallbackRes.json().catch(() => ({}));

      if (fallbackRes.ok || resJson.success === 'true' || resJson.success === true || resJson.message?.includes('Activation')) {
        return {
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
          data: {
            id: 'inq_' + Date.now().toString(36),
            name: data.name,
            createdAt: new Date().toISOString(),
          },
        };
      }
    } catch {
      // Ignore fallback error and throw descriptive main error
    }

    throw new Error(
      backendError ||
      'Failed to send message. Please verify your internet connection or email us directly at ' + BUSINESS_EMAIL
    );
  },
};
