import nodemailer from 'nodemailer';

export interface EmailInquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  subject?: string;
  message: string;
  createdAt?: Date;
}

// Create Nodemailer Transporter using environment variables
export const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER || 'pravaahtechnologies15@gmail.com';
  const pass = process.env.SMTP_PASS || '';

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

export const emailService = {
  /**
   * Verify SMTP connection status
   */
  async verifyConnection(): Promise<{ connected: boolean; message: string }> {
    const transporter = createTransporter();
    if (!transporter) {
      return {
        connected: false,
        message: 'SMTP credentials missing. Please set SMTP_PASS in backend/.env',
      };
    }

    try {
      await transporter.verify();
      return { connected: true, message: 'SMTP server ready to send emails' };
    } catch (error: any) {
      return { connected: false, message: error.message || 'SMTP verification failed' };
    }
  },

  /**
   * Send Contact / Project Inquiry Email via Nodemailer
   */
  async sendInquiryEmail(data: EmailInquiryData): Promise<{ success: boolean; messageId?: string }> {
    const transporter = createTransporter();
    const adminEmail = process.env.NOTIFICATION_EMAIL || 'pravaahtechnologies15@gmail.com';
    const fromAddress = process.env.EMAIL_FROM || `"Pravaah Technology" <${adminEmail}>`;
    const inquiryService = data.service || data.subject || 'General Inquiry';
    const emailSubject = `🚀 New Contact Inquiry: ${data.name} - ${inquiryService}`;
    const timestamp = data.createdAt || new Date();

    if (!transporter) {
      console.warn('⚠️ [Nodemailer] SMTP_PASS is empty in backend/.env.');
      throw new Error(
        'Email service is not configured. Please provide SMTP credentials (SMTP_PASS) in backend/.env.'
      );
    }

    // 1. Admin Notification Email
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #06132D, #081A3A, #1769E0); padding: 32px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
          .header p { margin: 6px 0 0 0; font-size: 12px; color: #38BDF8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 28px 24px; }
          .intro { font-size: 15px; color: #334155; margin-top: 0; line-height: 1.5; }
          .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
          .info-table td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
          .info-table .label { font-weight: 600; color: #64748b; width: 35%; }
          .info-table .value { font-weight: 600; color: #0f172a; }
          .message-box { background: #f8fafc; border-left: 4px solid #1769E0; padding: 16px; border-radius: 8px; margin: 24px 0; }
          .message-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px; }
          .message-text { font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap; }
          .action-btn { display: inline-block; background: linear-gradient(90deg, #1769E0, #6638E8); color: #ffffff !important; padding: 12px 28px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 14px; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>PRAVAAH TECHNOLOGY</h1>
            <p>New Client Inquiry Received</p>
          </div>
          <div class="content">
            <p class="intro">You have received a new contact inquiry submitted via the website contact form:</p>
            
            <table class="info-table">
              <tr>
                <td class="label">Full Name:</td>
                <td class="value">${data.name}</td>
              </tr>
              <tr>
                <td class="label">Email Address:</td>
                <td class="value"><a href="mailto:${data.email}" style="color: #1769E0; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number:</td>
                <td class="value">${data.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td class="label">Company:</td>
                <td class="value">${data.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td class="label">Service / Subject:</td>
                <td class="value" style="color: #1769E0;">${inquiryService}</td>
              </tr>
              <tr>
                <td class="label">Submitted At:</td>
                <td class="value">${timestamp.toLocaleString()}</td>
              </tr>
            </table>

            <div class="message-box">
              <div class="message-label">Client Message:</div>
              <div class="message-text">${data.message}</div>
            </div>

            <div style="text-align: center; margin-top: 28px;">
              <a href="mailto:${data.email}?subject=Re: Your Inquiry with Pravaah Technology - ${inquiryService}" class="action-btn">
                Reply to ${data.name}
              </a>
            </div>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Pravaah Technology • Automated Lead Notification
          </div>
        </div>
      </body>
      </html>
    `;

    const adminMailOptions = {
      from: fromAddress,
      to: adminEmail,
      replyTo: data.email,
      subject: emailSubject,
      html: adminHtml,
    };

    const info = await transporter.sendMail(adminMailOptions);
    console.log(`✅ [Nodemailer] Inquiry email sent to ${adminEmail}, messageId: ${info.messageId}`);

    // 2. Client Auto-Confirmation (Async)
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #06132D, #081A3A, #1769E0); padding: 28px 20px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #38BDF8; font-weight: 600; }
          .content { padding: 28px 24px; font-size: 14px; line-height: 1.6; color: #334155; }
          .info-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 20px 0; font-size: 13px; color: #64748b; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>PRAVAAH TECHNOLOGY</h1>
            <p>Digital Engineering & Solutions</p>
          </div>
          <div class="content">
            <h3 style="color: #0f172a; margin-top: 0;">Hi ${data.name},</h3>
            <p>Thank you for reaching out to <strong>Pravaah Technology</strong>. We have received your inquiry regarding <strong>${inquiryService}</strong>.</p>
            <p>Our solution architects are reviewing your specifications and will respond within <strong>24 business hours</strong>.</p>

            <div class="info-box">
              <div style="font-weight: 700; color: #0f172a; margin-bottom: 6px;">Need immediate assistance?</div>
              <div>Phone / WhatsApp: <strong>+91 95743 43531</strong></div>
              <div>Email: <strong>${adminEmail}</strong></div>
            </div>

            <p style="margin-bottom: 0;">Best regards,<br/><strong>Team Pravaah Technology</strong></p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Pravaah Technology • All Rights Reserved
          </div>
        </div>
      </body>
      </html>
    `;

    transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `Thank you for contacting Pravaah Technology!`,
      html: clientHtml,
    }).catch((err) => {
      console.warn('⚠️ [Nodemailer] Auto-reply confirmation warning:', err.message);
    });

    return { success: true, messageId: info.messageId };
  },
};
