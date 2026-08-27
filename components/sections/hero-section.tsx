"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CONTACT_CONFIG } from '@/config/contact';

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background brand glow matching logo palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[400px] bg-gradient-to-tr from-[#1769E0]/15 via-[#6C3FE8]/15 to-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Badge */}
            <div>
              <Badge variant="gradient" size="md">
                {CONTACT_CONFIG.badgeText}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold text-[#0B1B3A] tracking-tight leading-[1.1] break-words">
                WE BUILD <br />
                WHAT&apos;S <span className="gradient-text-blue-purple">NEXT.</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-base sm:text-xl font-bold text-[#1769E0] tracking-wide flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#1769E0] rounded-full inline-block shrink-0" />
              <span>Design. Develop. Innovate. Automate.</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#667085] leading-relaxed max-w-xl">
              {CONTACT_CONFIG.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onStartProject}
                className="w-full xs:w-auto justify-center shadow-glow-blue"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onExploreServices}
                className="w-full xs:w-auto justify-center"
              >
                Explore Services
              </Button>
            </div>

            {/* Micro Highlights Strip */}
            <div className="pt-4 border-t border-[#E4E7EC] flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6C3FE8] shrink-0" />
                <span>Ongoing Support & Updates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Feature Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#06132D] via-[#081A3A] to-[#0E2856] p-6 sm:p-8 text-white shadow-elevated border border-white/10 overflow-hidden">
              {/* Internal glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#1769E0]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#6C3FE8]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Code Terminal Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">pravaah.config.ts</span>
                </div>

                {/* Code snippet */}
                <div className="font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  <div><span className="text-[#38BDF8]">import</span> &#123; <span className="text-purple-300">Innovate</span>, <span className="text-purple-300">Scale</span> &#125; <span className="text-[#38BDF8]">from</span> <span className="text-emerald-300">&apos;@pravaah/tech&apos;</span>;</div>
                  <div className="pt-1.5"><span className="text-[#38BDF8]">export const</span> <span className="text-amber-300">digitalFuture</span> = &#123;</div>
                  <div className="pl-4">architecture: <span className="text-emerald-300">&apos;Next.js + AI Microservices&apos;</span>,</div>
                  <div className="pl-4">scalability: <span className="text-emerald-300">&apos;Enterprise Cloud Native&apos;</span>,</div>
                  <div className="pl-4">performance: <span className="text-[#38BDF8]">99.99</span>,</div>
                  <div className="pl-4">speedIndex: <span className="text-emerald-300">&apos;&lt; 0.8s&apos;</span>,</div>
                  <div>&#125;;</div>
                </div>

                {/* Mini Stat Badges */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-lg font-bold text-[#38BDF8]">100%</div>
                    <div className="text-[11px] text-slate-300">Client Code Ownership</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-lg font-bold text-[#9B7BFF]">99.9%</div>
                    <div className="text-[11px] text-slate-300">Production Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
