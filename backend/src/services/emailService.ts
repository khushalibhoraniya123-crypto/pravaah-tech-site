import nodemailer from 'nodemailer';

interface InquiryEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  createdAt?: Date;
}

// Create reusable transporter
const getTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.NOTIFICATION_EMAIL || 'pravaahtechnologies15@gmail.com';
  const pass = process.env.SMTP_PASS || '';

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports (587)
    auth: {
      user,
      pass,
    },
  });
};

export const emailService = {
  /**
   * Send new inquiry notification to Pravaah Technology admin and auto-confirmation to client
   */
  async sendInquiryNotification(data: InquiryEmailData): Promise<boolean> {
    try {
      const transporter = getTransporter();
      const adminEmail = process.env.NOTIFICATION_EMAIL || 'pravaahtechnologies15@gmail.com';
      const fromAddress = process.env.EMAIL_FROM || `"Pravaah Technology" <${adminEmail}>`;

      if (!transporter) {
        console.log(`ℹ️ [EmailService] SMTP_PASS not set in backend/.env. Email notification logged:`);
        console.log(`   Client: ${data.name} (${data.email}) | Service: ${data.service} | Budget: ${data.budget}`);
        return false;
      }

      // 1. Send Notification Email to Admin
      const adminMailOptions = {
        from: fromAddress,
        to: adminEmail,
        replyTo: data.email,
        subject: `🚀 New Project Inquiry: ${data.name} - ${data.service}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #06132D, #081A3A, #1769E0); padding: 30px 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">PRAVAAH TECHNOLOGY</h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #38BDF8; font-weight: 600;">NEW CLIENT INQUIRY RECEIVED</p>
            </div>
            
            <div style="padding: 24px;">
              <p style="font-size: 15px; color: #334155; margin-top: 0;">You have received a new project inquiry through the website contact form.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 35%;">Client Name:</td>
                  <td style="padding: 10px 0; font-weight: 600; color: #081A3A;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Email Address:</td>
                  <td style="padding: 10px 0; color: #1769E0;"><a href="mailto:${data.email}" style="color: #1769E0; text-decoration: none; font-weight: 600;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #081A3A;">${data.phone || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Company:</td>
                  <td style="padding: 10px 0; color: #081A3A;">${data.company || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Service Required:</td>
                  <td style="padding: 10px 0; color: #6638E8; font-weight: 700;">${data.service}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Budget Range:</td>
                  <td style="padding: 10px 0; color: #081A3A; font-weight: 600;">${data.budget || 'Flexible'}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border-left: 4px solid #1769E0; padding: 14px 16px; border-radius: 8px; margin: 20px 0;">
                <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">Project Requirements:</div>
                <div style="font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${data.email}?subject=Re: Your Project Inquiry with Pravaah Technology" style="display: inline-block; background: linear-gradient(90deg, #1769E0, #6638E8); color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 14px;">Reply to ${data.name}</a>
              </div>
            </div>

            <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8;">
              © ${new Date().getFullYear()} Pravaah Technology Automated Notification System
            </div>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      console.log(`✅ [Nodemailer] Admin notification sent successfully to ${adminEmail}`);

      // 2. Send Auto-Confirmation Email to Client
      const clientMailOptions = {
        from: fromAddress,
        to: data.email,
        subject: `Thank you for contacting Pravaah Technology!`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #06132D, #081A3A, #1769E0); padding: 26px 20px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800;">PRAVAAH TECHNOLOGY</h1>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #38BDF8;">INNOVATION • TECHNOLOGY • DIGITAL FUTURE</p>
            </div>
            
            <div style="padding: 24px;">
              <h3 style="color: #081A3A; margin-top: 0;">Hi ${data.name},</h3>
              <p style="font-size: 14px; color: #475569; line-height: 1.6;">
                Thank you for reaching out to <strong>Pravaah Technology</strong>. We have received your inquiry regarding <strong>${data.service}</strong>.
              </p>
              <p style="font-size: 14px; color: #475569; line-height: 1.6;">
                Our technical team is reviewing your project requirements and will get back to you within 24 business hours to discuss the next steps.
              </p>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 20px 0; font-size: 13px; color: #64748b;">
                <div style="font-weight: bold; color: #081A3A; margin-bottom: 6px;">Need urgent assistance?</div>
                <div>Phone / WhatsApp: <strong>+91 95743 43531</strong></div>
                <div>Email: <strong>pravaahtechnologies15@gmail.com</strong></div>
              </div>

              <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">
                Best regards,<br />
                <strong>Team Pravaah Technology</strong>
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(clientMailOptions).catch((err) => {
        console.warn('Auto-reply to client failed:', err.message);
      });

      return true;
    } catch (error: any) {
      console.error('❌ [Nodemailer Error]:', error.message);
      return false;
    }
  },
};
