"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Code2,
  Award,
  ArrowRight,
  TrendingUp,
  Globe2,
  Cpu
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';
import { Reveal } from '@/components/ui/reveal';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#EDF4FC] via-[#F7F3FE]/70 to-[#E8F1FB] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Highlight Grid (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="right" duration={700}>
              {/* Outer Card with Animated Glowing White Border Line */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#06132D] via-[#0B1B3A] to-[#0E2856] p-6 sm:p-8 text-white shadow-elevated overflow-hidden group">
                
                {/* SVG Animated Aesthetic Multi-Color Gradient Tracing Border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl z-20 overflow-visible">
                  <defs>
                    <linearGradient id="pravaahMultiBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.1" />
                      <stop offset="25%" stopColor="#1769E0" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#6638E8" stopOpacity="0.9" />
                      <stop offset="75%" stopColor="#EC4899" stopOpacity="0.95" />
                      <stop offset="90%" stopColor="#38BDF8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Subtle static glass outline */}
                  <rect 
                    x="1" 
                    y="1" 
                    width="calc(100% - 2px)" 
                    height="calc(100% - 2px)" 
                    rx="24" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.12)" 
                    strokeWidth="1" 
                  />

                  {/* Soft colorful ambient glow underlay */}
                  <rect 
                    pathLength="1000"
                    x="1" 
                    y="1" 
                    width="calc(100% - 2px)" 
                    height="calc(100% - 2px)" 
                    rx="24" 
                    fill="none" 
                    stroke="url(#pravaahMultiBorderGrad)" 
                    strokeWidth="4.5" 
                    className="animate-border-trace opacity-80 blur-[3px]" 
                  />

                  {/* Crisp vibrant multi-color moving light trail */}
                  <rect 
                    pathLength="1000"
                    x="1" 
                    y="1" 
                    width="calc(100% - 2px)" 
                    height="calc(100% - 2px)" 
                    rx="24" 
                    fill="none" 
                    stroke="url(#pravaahMultiBorderGrad)" 
                    strokeWidth="2.5" 
                    className="animate-border-trace opacity-100" 
                  />
                </svg>

                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1769E0]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6638E8]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2">
                      <Badge variant="blue" size="sm">ABOUT PRAVAAH</Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Engineering The Future of Technology
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Based in Surat, Gujarat, we partner with visionary entrepreneurs, established businesses, and ambitious startups worldwide to build scalable software assets.
                    </p>
                  </div>

                  {/* 4 Core pillars */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:bg-white/10 transition-colors">
                      <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                      <div className="text-sm font-bold text-white">Innovation First</div>
                      <div className="text-[11px] text-slate-300">Modern architectures</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:bg-white/10 transition-colors">
                      <ShieldCheck className="w-5 h-5 text-[#9B7BFF]" />
                      <div className="text-sm font-bold text-white">Bank Grade Security</div>
                      <div className="text-[11px] text-slate-300">Strict data protection</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:bg-white/10 transition-colors">
                      <Clock className="w-5 h-5 text-emerald-400" />
                      <div className="text-sm font-bold text-white">Agile Timelines</div>
                      <div className="text-[11px] text-slate-300">Transparent delivery</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 hover:bg-white/10 transition-colors">
                      <Code2 className="w-5 h-5 text-amber-400" />
                      <div className="text-sm font-bold text-white">Clean Code</div>
                      <div className="text-[11px] text-slate-300">Maintainable scale</div>
                    </div>
                  </div>

                  {/* Client Quote Strip */}
                  <div className="p-4 rounded-2xl bg-[#06132D]/90 border border-blue-500/20 text-xs text-slate-300 italic flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1769E0]/20 flex items-center justify-center shrink-0 text-[#38BDF8] not-italic font-bold">
                      &ldquo;
                    </div>
                    <span>Pravaah Technology turned our complex manual workflows into a seamless automated platform in record time.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left" delay={120} duration={700}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge variant="blue">WHO WE ARE</Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                    Turning Ideas Into <span className="gradient-text-blue-purple">Digital Realities</span>
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#475467] leading-relaxed">
                  At <strong className="text-[#0B1B3A]">{CONTACT_CONFIG.companyName}</strong>, we believe every business deserves enterprise-grade technology that is fast, resilient, and built to scale effortlessly.
                </p>

                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  Our multidisciplinary team combines deep technical craftsmanship with thoughtful design principles. Whether developing custom web portals, native mobile apps, AI-powered automation pipelines, or high-throughput microservices, we build software that drives real growth.
                </p>

                {/* Checklist of commitments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    'Full Intellectual Property (IP) Ownership',
                    '100% Transparent Development Sprints',
                    'Dedicated Post-Launch Warranty & Support',
                    'Optimized for Conversion & SEO Speed',
                    'Scalable Cloud-Native Infrastructure',
                    'Direct Engineer Communication Channels',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1B3A]">
                      <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Journey Steps */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D6E3F4] text-center shadow-xs">
                    <div className="text-lg sm:text-xl font-extrabold text-[#1769E0]">
                      <AnimatedCounter value={100} suffix="%" />
                    </div>
                    <div className="text-[11px] font-bold text-[#0B1B3A]">On-Time Launch</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D6E3F4] text-center shadow-xs">
                    <div className="text-lg sm:text-xl font-extrabold text-[#6638E8]">
                      <AnimatedCounter value={99} suffix="%" />
                    </div>
                    <div className="text-[11px] font-bold text-[#0B1B3A]">Client Retention</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-[#D6E3F4] text-center shadow-xs">
                    <div className="text-lg sm:text-xl font-extrabold text-emerald-600">
                      24/7
                    </div>
                    <div className="text-[11px] font-bold text-[#0B1B3A]">Active Monitoring</div>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-2 flex items-center gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    onClick={onLearnMore}
                    className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-glow-blue"
                  >
                    Connect With Our Team
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};

