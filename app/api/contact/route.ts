import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CONTACT_CONFIG } from '@/config/contact';

// Configure Nodemailer transporter
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER || 'pravaahtechnologies15@gmail.com';
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || '';

  if (!pass) {
    console.warn('[Email Warning] SMTP_PASS not set. Emails will run in simulated mode.');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (name, email, message).' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    if (transporter) {
      // 1. Notification to Pravaah Admin
      const adminMailOptions = {
        from: `"Pravaah Tech Web Portal" <${process.env.SMTP_USER || 'pravaahtechnologies15@gmail.com'}>`,
        to: process.env.ADMIN_EMAIL || 'pravaahtechnologies15@gmail.com',
        subject: `🚀 New Project Inquiry: ${name} (${service || 'General Inquiry'})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e7ec; border-radius: 12px; background: #ffffff;">
            <div style="background: #06132D; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Project Inquiry</h2>
              <p style="color: #38BDF8; margin: 5px 0 0; font-size: 13px;">Pravaah Technology Client Portal</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #0B1B3A;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1769E0;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Selected Service:</td>
                <td style="padding: 8px 0; color: #6C3FE8; font-weight: bold;">${service || 'General Consultation'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #1769E0;">
              <p style="margin: 0 0 5px; font-weight: bold; font-size: 13px; color: #0B1B3A;">Project Message / Requirements:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
              Sent automatically from Pravaah Technology Web Inquiry Engine.
            </div>
          </div>
        `,
      };

      // 2. Auto-reply confirmation to client
      const clientMailOptions = {
        from: `"${CONTACT_CONFIG.companyName}" <${process.env.SMTP_USER || 'pravaahtechnologies15@gmail.com'}>`,
        to: email,
        subject: `Thank you for contacting Pravaah Technology!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e7ec; border-radius: 12px; background: #ffffff;">
            <div style="background: #06132D; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Thank You, ${name}!</h2>
              <p style="color: #38BDF8; margin: 5px 0 0; font-size: 13px;">We have received your project inquiry.</p>
            </div>
            
            <p style="font-size: 14px; color: #334155; line-height: 1.6;">
              Hi <strong>${name}</strong>,<br/><br/>
              Thank you for reaching out to <strong>Pravaah Technology</strong>. Our technical architecture team is reviewing your project details regarding <strong>${service || 'our services'}</strong> and will get in touch within 24 business hours.
            </p>

            <div style="margin: 20px 0; padding: 15px; background: #f8fafc; border-radius: 8px;">
              <p style="margin: 0 0 5px; font-weight: bold; font-size: 13px; color: #0B1B3A;">Need urgent assistance?</p>
              <p style="margin: 0; font-size: 13px; color: #64748b;">
                You can reach us directly via WhatsApp or phone: <strong>${CONTACT_CONFIG.phone}</strong>
              </p>
            </div>

            <p style="font-size: 13px; color: #64748b; margin-top: 20px;">
              Best Regards,<br/>
              <strong>The Engineering Team</strong><br/>
              ${CONTACT_CONFIG.companyName}
            </p>
          </div>
        `,
      };

      try {
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(clientMailOptions),
        ]);
      } catch (mailErr) {
        console.error('[Nodemailer Error]:', mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your project inquiry has been submitted successfully.',
      data: {
        id: `INQ-${Date.now()}`,
        name,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error('[API Route Error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
