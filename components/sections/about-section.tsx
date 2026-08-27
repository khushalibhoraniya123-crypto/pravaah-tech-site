"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Code2
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Highlight Grid (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#06132D] to-[#0E2856] p-8 text-white shadow-elevated border border-white/10 overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1769E0]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6638E8]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Badge variant="blue" size="sm">ABOUT PRAVAAH</Badge>
                  <h3 className="text-2xl font-bold text-white">Engineering The Future of Technology</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Based in Surat, Gujarat, we partner with visionary entrepreneurs, established businesses, and ambitious startups worldwide.
                  </p>
                </div>

                {/* 4 Core pillars */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                    <div className="text-sm font-bold text-white">Innovation First</div>
                    <div className="text-[11px] text-slate-300">Modern architectures</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <ShieldCheck className="w-5 h-5 text-[#9B7BFF]" />
                    <div className="text-sm font-bold text-white">Bank Grade Security</div>
                    <div className="text-[11px] text-slate-300">Strict data protection</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <div className="text-sm font-bold text-white">Agile Timelines</div>
                    <div className="text-[11px] text-slate-300">Transparent delivery</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <Code2 className="w-5 h-5 text-amber-400" />
                    <div className="text-sm font-bold text-white">Clean Code</div>
                    <div className="text-[11px] text-slate-300">Maintainable scale</div>
                  </div>
                </div>

                {/* Client Quote */}
                <div className="p-4 rounded-2xl bg-[#06132D]/80 border border-blue-500/20 text-xs text-slate-300 italic">
                  &ldquo;Pravaah Technology turned our complex manual workflows into a seamless automated platform in record time.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <Badge variant="blue">WHO WE ARE</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Turning Ideas Into <span className="gradient-text-blue-purple">Digital Realities</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              At <strong className="text-[#0B1B3A]">{CONTACT_CONFIG.companyName}</strong>, we believe every business deserves enterprise-grade technology that is fast, resilient, and built to scale effortlessly.
            </p>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Our multidisciplinary team combines deep technical craftsmanship with thoughtful design principles. Whether developing custom web portals, native mobile apps, AI-powered automation pipelines, or high-throughput microservices, we build software that drives real growth.
            </p>

            {/* Checklist of commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Full Intellectual Property (IP) Ownership',
                '100% Transparent Development Sprints',
                'Dedicated Post-Launch Warranty & Support',
                'Optimized for Conversion & SEO',
                'Scalable Cloud-Native Infrastructure',
                'Direct Engineer Communication Channels',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#0B1B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onLearnMore}
              >
                Connect With Our Team
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
