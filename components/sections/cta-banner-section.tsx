"use client";

import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_CONFIG } from '@/config/contact';
import { Reveal } from '@/components/ui/reveal';

interface CtaBannerSectionProps {
  onStartProject?: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#EDF4FC] to-[#E5F0FC] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        <Reveal direction="up" duration={700}>
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#06132D] via-[#0B1B3A] to-[#0E2856] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/15 overflow-hidden text-center lg:text-left">
            
            {/* Background glowing tech elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1769E0]/30 via-[#6638E8]/25 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle Tech Grid overlay */}
            <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Copy (7.5 cols) */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-sm shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>START YOUR DIGITAL TRANSFORMATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Have an idea? Let&apos;s build <br className="hidden sm:inline" />
                  <span className="gradient-text-blue-purple">something amazing together.</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Partner with Pravaah Technologies to architect bespoke web applications, mobile platforms, enterprise ERPs, and automated AI workflows. Free 30-minute roadmap consultation.
                </p>

                {/* Micro guarantees */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24h Rapid Estimation</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>Zero Obligation Review</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>100% Confidential NDA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Buttons (4.5 cols) */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3.5 w-full">
                <Button
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={onStartProject}
                  className="w-full justify-center shadow-glow-blue hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 py-3.5 sm:py-4 text-sm sm:text-base font-bold"
                >
                  Start Your Project Now
                </Button>

                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full py-3.5 sm:py-4 px-6 rounded-2xl border border-white/25 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md hover:scale-[1.03] active:scale-[0.97] shadow-soft hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)] overflow-hidden"
                >
                  {/* Subtle Light Sweep Effect */}
                  <span aria-hidden="true" className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10">Chat on WhatsApp Instantly</span>
                </a>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
