"use client";

import React, { useState } from 'react';
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_CONFIG } from '@/config/contact';
import type { ContactFormData } from '@/types';
import { useContactMutation } from '@/lib/api';
import { Reveal } from '@/components/ui/reveal';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || CONTACT_CONFIG.inquiryServices[0],
    budget: CONTACT_CONFIG.budgetRanges[0],
    message: '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);

  // TanStack React Query Mutation
  const contactMutation = useContactMutation();

  const isPending = contactMutation.isPending;
  const isSuccess = contactMutation.isSuccess;
  const isError = contactMutation.isError;
  const error = contactMutation.error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (formData.phone && !formData.phone.trim()) {
      setValidationError('Please enter a valid phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please describe your project requirements.');
      return;
    }

    setValidationError(null);

    contactMutation.mutate(formData, {
      onSuccess: () => {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#1769E0', '#6C3FE8', '#00D2FF', '#10B981'],
          });
        } catch {
          // Ignore
        }
      },
    });
  };

  const handleResetForm = () => {
    contactMutation.reset();
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: CONTACT_CONFIG.inquiryServices[0],
      budget: CONTACT_CONFIG.budgetRanges[0],
      message: '',
    });
    setValidationError(null);
  };

  return (
    <section id="contact" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#E7F0FC] via-[#F4F0FE]/70 to-[#E2EEFC] relative overflow-hidden border-t border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6638E8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <Badge variant="blue">LET&apos;S TALK BUSINESS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Ready to Build <span className="gradient-text-blue-purple">Something Great?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Fill out the form below and our lead technical architects will get back to you within 24 hours with a preliminary estimate.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Channels & Company Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="right" duration={700}>
              <div className="rounded-3xl bg-[#06132D] text-white p-6 sm:p-8 shadow-elevated border border-white/10 relative overflow-hidden space-y-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <Badge variant="blue" size="sm">DIRECT CONTACT</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Get in Touch With Us</h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Whether you have an inquiry, need a consultation, or want a custom demo, we are here for you.
                  </p>
                </div>

                {/* Contact Item list */}
                <div className="space-y-3 pt-1 relative z-10">
                  {/* Phone */}
                  <a
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-[#38BDF8] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Phone Support</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                        {CONTACT_CONFIG.phone}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-[#9B7BFF] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email Inquiry</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#9B7BFF] transition-colors break-all">
                        {CONTACT_CONFIG.email}
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp Instant Chat</div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {CONTACT_CONFIG.whatsapp}
                      </div>
                    </div>
                  </a>

                  {/* Office Location */}
                  <a
                    href={CONTACT_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Office Location (Google Maps)</div>
                      <div className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors pt-0.5">
                        {CONTACT_CONFIG.address.fullFormatted}
                      </div>
                    </div>
                  </a>
                </div>

                {/* Guarantees */}
                <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>24hr Fast Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NDA & IP Protected</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Inquiry Form (7 cols) powered by TanStack React Query */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={120} duration={700}>
              <div className="rounded-3xl bg-white/95 backdrop-blur-sm border border-[#D6E3F4] p-6 sm:p-8 shadow-elevated">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1B3A]">Inquiry Received!</h3>
                  <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong className="text-[#0B1B3A]">{CONTACT_CONFIG.companyName}</strong>. Our engineering leads will review your requirements and get back to you shortly.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" onClick={handleResetForm}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold text-[#0B1B3A]">Send Us a Message</h3>
                    <p className="text-xs text-[#667085]">
                      Tell us about your project or schedule a free technical roadmap session.
                    </p>
                  </div>

                  {/* Validation or API Error alert */}
                  {(validationError || isError) && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError || (error as Error)?.message || 'Something went wrong. Please check your connection.'}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1B3A]">Your Name *</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1B3A]">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1B3A]">Phone / WhatsApp (Optional)</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0B1B3A]">Company / Brand Name</label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B1B3A]">Interested Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-xl border border-[#D2DEEE] bg-white px-3.5 py-2 text-sm text-[#081A3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769E0] shadow-xs cursor-pointer"
                    >
                      {CONTACT_CONFIG.inquiryServices.map((serviceName, idx) => (
                        <option key={idx} value={serviceName}>
                          {serviceName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Project Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B1B3A]">Project Details & Requirements *</label>
                    <Textarea
                      name="message"
                      placeholder="Briefly describe your project, timeline expectations, or desired feature set..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  {/* Submit Button with TanStack loading state */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      withArrow
                      disabled={isPending}
                      className="w-full justify-center shadow-glow-blue"
                    >
                      {isPending ? 'Sending Inquiry...' : 'Submit Project Inquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        </div>

      </div>
    </section>
  );
};
