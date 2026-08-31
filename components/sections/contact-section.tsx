"use client";

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
    service: preselectedService || 'Select Project Type',
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
    if (!formData.message.trim()) {
      setValidationError('Please describe your project requirements.');
      return;
    }

    setValidationError(null);

    contactMutation.mutate(formData, {
      onSuccess: () => {
        try {
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#00D2FF', '#1769E0', '#7C3AED', '#10B981'],
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
      service: 'Select Project Type',
      budget: CONTACT_CONFIG.budgetRanges[0],
      message: '',
    });
    setValidationError(null);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 bg-[#040A17] text-white relative overflow-hidden border-t border-[#0E2856]">
      {/* Background Ambient Glows & Connecting Curve Wave */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1769E0]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7C3AED]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D2FF]/8 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Sweeping Connecting Dotted Wave Trail */}
      <svg className="absolute top-1/2 left-0 right-0 w-full h-44 -translate-y-1/2 pointer-events-none opacity-35 hidden lg:block" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M -100 100 C 300 20, 700 190, 1100 70 C 1300 20, 1400 120, 1600 100" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="6 8" />
        <circle cx="210" cy="75" r="3.5" fill="#00D2FF" className="animate-ping" />
        <circle cx="1220" cy="65" r="3.5" fill="#C084FC" className="animate-ping" />
      </svg>

      {/* Far Left Ambient Floating Logo Mark on Trail */}
      <div className="absolute top-1/3 left-6 pointer-events-none select-none opacity-80 hidden xl:block animate-float-slow">
        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1.5 backdrop-blur-md shadow-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/emblem.png" alt="Pravaah" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Centered Section Header Matching Reference Screenshot */}
        <Reveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1C36] border border-[#1C355E] text-[#C084FC] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span>CONTACT US</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-[-0.03em] leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#C084FC]">
                Great Together
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
              Have an idea, project or business challenge? <br className="hidden sm:block" />
              Let&apos;s turn it into a powerful digital solution.
            </p>
          </div>
        </Reveal>

        {/* 2. Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Let's Talk & Contact Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal direction="right" duration={700}>
              <div className="space-y-7">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                    Let&apos;s Talk
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-sm font-normal">
                    Whether you need a new website, custom software, AI solution, automation or full-scale digital innovation.
                  </p>
                </div>

                {/* 3 Contact Info Rows */}
                <div className="space-y-5 pt-2">
                  
                  {/* Email Channel */}
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#091830] border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.15)] group-hover:scale-105 group-hover:border-cyan-400 group-hover:bg-[#0C2244] transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 group-hover:text-cyan-300 transition-colors font-medium">
                      {CONTACT_CONFIG.email}
                    </span>
                  </a>

                  {/* Phone Channel */}
                  <a
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#091830] border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,210,255,0.15)] group-hover:scale-105 group-hover:border-cyan-400 group-hover:bg-[#0C2244] transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 group-hover:text-cyan-300 transition-colors font-medium">
                      {CONTACT_CONFIG.phone}
                    </span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#171233] border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-105 group-hover:border-purple-400 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 font-medium">
                      Surat, Gujarat, India
                    </span>
                  </div>

                </div>

                {/* Bottom Label */}
                <div className="pt-6">
                  <span className="text-[11px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase">
                    START A CONVERSATION
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact & Project Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={120} duration={700}>
              <div className="relative rounded-[32px] bg-[#071328]/95 backdrop-blur-xl border border-[#132748] p-7 sm:p-9 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-[#1E3E6E] transition-colors duration-500">
                
                {/* Subtle Ambient Inside Corner Glows */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                {isSuccess ? (
                  /* Success Confirmation State */
                  <div className="text-center py-10 space-y-4 animate-in fade-in duration-300 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Pravaah Technologies. Our lead technical architects will review your requirements and get back to you shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleResetForm}
                        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                    
                    {/* Error alert */}
                    {(validationError || isError) && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{validationError || (error as Error)?.message || 'Something went wrong. Please check your connection.'}</span>
                      </div>
                    )}

                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#040B18] border border-[#142646] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white rounded-2xl px-5 py-4 text-sm placeholder:text-slate-500 focus:outline-none transition-all duration-300 hover:border-[#1C355E]"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#040B18] border border-[#142646] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white rounded-2xl px-5 py-4 text-sm placeholder:text-slate-500 focus:outline-none transition-all duration-300 hover:border-[#1C355E]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Company / Business */}
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Business"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-[#040B18] border border-[#142646] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white rounded-2xl px-5 py-4 text-sm placeholder:text-slate-500 focus:outline-none transition-all duration-300 hover:border-[#1C355E]"
                      />
                    </div>

                    {/* Row 3: PROJECT TYPE Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
                        PROJECT TYPE
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#040B18] border border-[#142646] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white rounded-2xl px-5 py-4 text-sm appearance-none cursor-pointer focus:outline-none transition-all duration-300 pr-12 hover:border-[#1C355E]"
                        >
                          <option value="Select Project Type" disabled>Select Project Type</option>
                          <option value="Web & App Development">Web & App Development</option>
                          <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option>
                          <option value="AI & Automation Systems">AI & Automation Systems</option>
                          <option value="Custom Software Solutions">Custom Software Solutions</option>
                          <option value="Digital Business Platforms">Digital Business Platforms</option>
                          <option value="Enterprise ERP / CRM Systems">Enterprise ERP / CRM Systems</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Row 4: TELL US ABOUT YOUR PROJECT */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
                        TELL US ABOUT YOUR PROJECT
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your goals, features or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full bg-[#040B18] border border-[#142646] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white rounded-2xl px-5 py-4 text-sm placeholder:text-slate-500 focus:outline-none transition-all duration-300 resize-none hover:border-[#1C355E]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full py-4.5 rounded-2xl font-black text-white text-sm sm:text-base bg-gradient-to-r from-[#00D2FF] via-[#1769E0] to-[#9333EA] hover:opacity-95 shadow-[0_8px_30px_rgba(0,210,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,210,255,0.45)] flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <span>{isPending ? 'Sending Message...' : 'Send Message'}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
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
