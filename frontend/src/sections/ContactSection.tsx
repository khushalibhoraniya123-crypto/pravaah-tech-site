import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { CONTACT_CONFIG } from '../config/contact';
import type { ContactFormData } from '../types';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || CONTACT_CONFIG.inquiryServices[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
        message: prev.message || `Hi Pravaah team, I am interested in getting a consultation regarding ${preselectedService}.`,
      }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please describe your project requirements.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await api.submitContact(formData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Celebrate submission
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1769E0', '#6C3FE8', '#38BDF8', '#10B981'],
        });
      } catch {}

      showToast(
        'Inquiry Submitted!',
        res.message || 'Thank you! Your project inquiry has been submitted successfully.',
        'success'
      );
    } catch (err: any) {
      setIsSubmitting(false);
      const errorText = err.message || 'Failed to submit inquiry. Please check your connection.';
      setErrorMessage(errorText);
      showToast('Submission Error', errorText, 'error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: CONTACT_CONFIG.inquiryServices[0],
      message: '',
    });
    setIsSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-16 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2 sm:space-y-2.5">
          <Badge variant="blue">CONTACT US</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
            Let's Discuss Your <span className="gradient-text-blue-purple">Next Project</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            Have a project in mind, need a quote, or want to discuss technical feasibility? Send us a message and we'll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] text-white shadow-elevated border border-white/10 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                  Contact Details
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">
                  Get In Touch Directly
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Call, email, or message us directly on WhatsApp. We will discuss your requirements and share an estimated project timeline.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1769E0]/20 text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Direct Call</div>
                    <div className="text-sm font-bold text-white">{CONTACT_CONFIG.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6C3FE8]/20 text-[#9B7BFF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-bold text-white break-all">{CONTACT_CONFIG.email}</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-300 font-medium">WhatsApp Chat</div>
                    <div className="text-sm font-bold text-white">{CONTACT_CONFIG.whatsapp}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Headquarters</div>
                    <div className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      {CONTACT_CONFIG.address.fullFormatted}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response SLA */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-[#38BDF8]" />
                <span>{CONTACT_CONFIG.workingHours.weekdays}</span>
              </div>
            </div>

            {/* Privacy & NDA Guarantee Card */}
            <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1769E0] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1B3A]">100% Confidential & NDA Ready</h4>
                <p className="text-xs text-[#667085] mt-0.5">
                  All intellectual property, proprietary datasets, and concepts shared are protected.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E4E7EC] shadow-elevated relative">
              
              {/* If already submitted successfully */}
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-soft">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-extrabold text-[#0B1B3A]">
                      Thank You!
                    </h3>
                    <p className="text-sm font-medium text-[#1769E0]">
                      Your project inquiry has been submitted successfully.
                    </p>
                    <p className="text-xs text-[#667085] max-w-md mx-auto leading-relaxed pt-1">
                      Our engineering lead will review your specifications and reach out to you at <strong className="text-[#0B1B3A]">{formData.email}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="md" onClick={handleReset}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-[#0B1B3A]">Send Us a Message</h3>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Fill in your details below and our team will get back to you promptly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-company" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        id="inquiry-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Brand Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label htmlFor="inquiry-service" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                      Service Interested In <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="inquiry-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all"
                    >
                      {CONTACT_CONFIG.inquiryServices.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#334155] uppercase tracking-wider mb-1.5">
                      Your Message / Inquiry <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us about your goals, features, target launch date, or any specific questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      withArrow
                      loading={isSubmitting}
                      className="w-full shadow-glow-blue"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
