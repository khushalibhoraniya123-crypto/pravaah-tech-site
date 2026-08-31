"use client";

import React from 'react';
import { CheckCircle2, Globe, Sparkles, Palette, Zap, Code2 } from 'lucide-react';
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
      className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/80 to-[#EAF2FC] border-b border-[#D8E4F5]"
    >
      {/* Background brand glow matching logo palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[800px] h-[400px] bg-gradient-to-tr from-[#1769E0]/20 via-[#6638E8]/15 to-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Value Proposition (6.5 cols) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
            
            {/* Badge */}
            <div>
              <Badge variant="gradient" size="md">
                {CONTACT_CONFIG.badgeText}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extrabold text-[#0B1B3A] tracking-tight leading-[1.1] break-words">
                WE BUILD <br />
                WHAT&apos;S <span className="gradient-text-blue-purple">NEXT.</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-base sm:text-lg font-bold text-[#1769E0] tracking-wide flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#1769E0] rounded-full inline-block shrink-0" />
              <span>Design. Develop. Innovate. Automate.</span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-xl">
              {CONTACT_CONFIG.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-1.5 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onStartProject}
                className="w-full xs:w-auto justify-center shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onExploreServices}
                className="w-full xs:w-auto justify-center hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              >
                Explore Services
              </Button>
            </div>

            {/* Micro Highlights Strip */}
            <div className="pt-3 border-t border-[#D6E3F4] flex flex-wrap items-center gap-4 sm:gap-5 text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-1.5 hover:text-[#1769E0] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-[#1769E0] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-[#6C3FE8] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#6C3FE8] shrink-0" />
                <span>Ongoing Support & Updates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Showcase with Floating Satellites & Center Terminal (6 cols) */}
          <div className="lg:col-span-6 relative w-full pt-4 pb-4 lg:py-6 flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
            
            {/* Seamless Decorative Tech Graphic Composition (Zero Image Box Edges) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible">
              
              {/* 1. Ultra-soft feather-masked 3D light wave (100% seamless without box borders) */}
              <div 
                className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_15%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_15%,transparent_70%)]"
              >
                <img
                  src="/images/hero-tech-backdrop.jpg"
                  alt=""
                  className="w-[120%] h-[120%] object-cover opacity-35 mix-blend-multiply scale-125"
                />
              </div>

              {/* 2. Crisp SVG Vector Wave Ribbons & Orbit Lines */}
              <svg className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] pointer-events-none opacity-70" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1769E0" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#6638E8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="heroWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1769E0" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Flowing abstract wave curves */}
                <path d="M 50 320 Q 180 180, 320 280 T 550 240" stroke="url(#heroWaveGrad1)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" className="animate-pulse-subtle" />
                <path d="M 80 400 Q 240 480, 380 360 T 560 420" stroke="url(#heroWaveGrad2)" strokeWidth="2" fill="none" />
                
                {/* Tech Orbit Rings */}
                <ellipse cx="300" cy="300" rx="220" ry="140" transform="rotate(-15 300 300)" stroke="#1769E0" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                <ellipse cx="300" cy="300" rx="160" ry="100" transform="rotate(25 300 300)" stroke="#6638E8" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
                
                {/* Glowing Nodes */}
                <circle cx="210" cy="225" r="4" fill="#1769E0" className="animate-ping opacity-60" />
                <circle cx="210" cy="225" r="3" fill="#1769E0" />
                <circle cx="440" cy="310" r="4" fill="#6638E8" className="animate-ping opacity-60" />
                <circle cx="440" cy="310" r="3" fill="#6638E8" />
                <circle cx="370" cy="420" r="3" fill="#00D2FF" />
              </svg>

              {/* 3. Floating 3D Frosted Glass Geometric Accents */}
              <div className="absolute top-12 right-16 w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-400/20 to-purple-400/20 border border-white/60 backdrop-blur-md shadow-xs animate-float-slow -rotate-12" />
              <div className="absolute bottom-16 left-12 w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 border border-white/60 backdrop-blur-md shadow-xs animate-float-reverse rotate-45" />
            </div>

            {/* Ambient backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* 1. Top-Left Floating Card: Web Apps */}
            <div className="absolute -top-2 left-0 sm:top-2 sm:left-2 z-30 animate-float-slow">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1769E0] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">Web Apps</div>
                  <div className="text-[11px] text-[#667085]">React • Next.js</div>
                  <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <span>✓ &lt;0.8s TTFB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Top-Right Floating Card: AI Solutions */}
            <div className="absolute -top-2 right-0 sm:top-2 sm:right-2 z-30 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6638E8] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A] flex items-center gap-1.5">
                    <span>AI Solutions</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-[#667085]">Intelligent Models & Agents</div>
                  <div className="text-[10px] font-bold text-[#6638E8] flex items-center gap-1 mt-0.5">
                    <span>⚡ 99.4% Acc.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Central Dark Code Terminal Box */}
            <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-[#08152E] text-white p-5 sm:p-6 shadow-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#1769E0]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#6638E8]/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>pravaah.ts</span>
                  </div>
                </div>

                {/* Code body */}
                <div className="font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  <div>
                    <span className="text-[#38BDF8]">import</span> &#123; <span className="text-purple-300">Future</span> &#125; <span className="text-[#38BDF8]">from</span> <span className="text-emerald-300">&apos;@pravaah/tech&apos;</span>;
                  </div>
                  <div className="pt-1">
                    <span className="text-[#38BDF8]">const</span> <span className="text-amber-300">buildNext</span> = <span className="text-[#38BDF8]">async</span> () =&gt; &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#38BDF8]">await</span> <span className="text-cyan-300">Innovate</span>.<span className="text-purple-300">scale</span>(&#123;
                  </div>
                  <div className="pl-8">
                    quality: <span className="text-emerald-300">&apos;enterprise&apos;</span>,
                  </div>
                  <div className="pl-8">
                    growth: <span className="text-cyan-300">true</span>,
                  </div>
                  <div className="pl-4">&#125;);</div>
                  <div>&#125;;</div>
                </div>

                {/* Footer status */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Engine Online</span>
                  </div>
                  <span className="text-slate-400">v2.0.0</span>
                </div>
              </div>
            </div>

            {/* 4. Bottom-Left Floating Card: UI/UX Design */}
            <div className="absolute -bottom-2 left-0 sm:bottom-2 sm:left-2 z-30 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6638E8] to-[#1769E0] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">UI/UX Design</div>
                  <div className="text-[11px] text-[#667085]">Figma Design System</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] text-slate-400">Tokens:</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1769E0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6638E8]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Bottom-Right Floating Card: Automation */}
            <div className="absolute -bottom-2 right-0 sm:bottom-2 sm:right-2 z-30 animate-float-slow">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00D2FF] text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">Automation</div>
                  <div className="text-[11px] text-[#667085]">Pipelines & CI/CD</div>
                  <div className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[9px] font-extrabold uppercase tracking-wider">
                    ACTIVE 24/7
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
