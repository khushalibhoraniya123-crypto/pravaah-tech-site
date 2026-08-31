"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Globe, 
  Sparkles, 
  Palette, 
  Zap, 
  Code2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  FileCode,
  Activity
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CONTACT_CONFIG } from '@/config/contact';
import { Reveal } from '@/components/ui/reveal';

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'code' | 'metrics' | 'arch'>('code');

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/80 to-[#EAF2FC] border-b border-[#D8E4F5]"
    >
      {/* Background Tech Grid & Dynamic Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      
      {/* Brand Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] h-[450px] bg-gradient-to-tr from-[#1769E0]/20 via-[#6638E8]/15 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition (6.5 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            
            {/* Badge */}
            <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="gradient" size="md" className="shadow-xs hover:scale-105 transition-transform duration-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
                  {CONTACT_CONFIG.badgeText}
                </Badge>
              </div>
            </Reveal>

            {/* Main Heading */}
            <Reveal direction="up" delay={80} duration={600}>
              <div className="space-y-1">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold text-[#0B1B3A] tracking-tight leading-[1.08] break-words">
                  WE BUILD <br />
                  WHAT&apos;S <span className="gradient-text-blue-purple">NEXT.</span>
                </h1>
              </div>
            </Reveal>

            {/* Subheading */}
            <Reveal direction="up" delay={140} duration={600}>
              <div className="text-base sm:text-lg font-bold text-[#1769E0] tracking-wide flex items-center gap-2.5">
                <span className="w-6 h-0.5 bg-gradient-to-r from-[#1769E0] to-[#6638E8] rounded-full inline-block shrink-0" />
                <span>Design. Develop. Innovate. Automate.</span>
              </div>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={200} duration={600}>
              <p className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-xl">
                {CONTACT_CONFIG.tagline} We engineer bespoke digital software, enterprise web applications, mobile ecosystems, and AI automations built for high-performance scale.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={260} duration={600}>
              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  onClick={onStartProject}
                  className="w-full xs:w-auto justify-center shadow-glow-blue hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Start Your Project
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={onExploreServices}
                  className="w-full xs:w-auto justify-center hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 bg-white/80 hover:bg-white"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>

            {/* Micro Highlights Strip */}
            <Reveal direction="up" delay={320} duration={600}>
              <div className="pt-4 border-t border-[#D6E3F4] flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-[#334155]">
                <div className="flex items-center gap-1.5 hover:text-[#1769E0] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Custom Web & Mobile Apps</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-[#1769E0] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>Clean & Maintainable Code</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-[#6638E8] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#6638E8] shrink-0" />
                  <span>Full Post-Launch Warranty</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Dynamic Interactive Showcase with Floating Satellites & Center Terminal (6 cols) */}
          <div className="lg:col-span-6 relative w-full pt-6 pb-6 lg:py-8 flex items-center justify-center min-h-[420px] sm:min-h-[460px]">
            
            {/* Seamless Decorative Tech Graphic Composition */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible">
              
              {/* Crisp SVG Vector Wave Ribbons & Orbit Lines */}
              <svg className="absolute w-[130%] h-[130%] -top-[15%] -left-[15%] pointer-events-none opacity-80" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1769E0" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#6638E8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="heroWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1769E0" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Flowing abstract wave curves */}
                <path d="M 40 300 Q 180 160, 320 270 T 560 230" stroke="url(#heroWaveGrad1)" strokeWidth="2.5" strokeDasharray="6 6" fill="none" className="animate-pulse-subtle" />
                <path d="M 70 410 Q 230 490, 390 350 T 570 410" stroke="url(#heroWaveGrad2)" strokeWidth="2" fill="none" />
                
                {/* Tech Orbit Rings */}
                <ellipse cx="300" cy="300" rx="230" ry="145" transform="rotate(-15 300 300)" stroke="#1769E0" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 8" fill="none" />
                <ellipse cx="300" cy="300" rx="170" ry="105" transform="rotate(25 300 300)" stroke="#6638E8" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
                
                {/* Glowing Nodes */}
                <circle cx="210" cy="225" r="4" fill="#1769E0" className="animate-ping opacity-60" />
                <circle cx="210" cy="225" r="3" fill="#1769E0" />
                <circle cx="440" cy="310" r="4" fill="#6638E8" className="animate-ping opacity-60" />
                <circle cx="440" cy="310" r="3" fill="#6638E8" />
                <circle cx="370" cy="420" r="3" fill="#00D2FF" />
              </svg>

              {/* Floating Geometric Glass Accents */}
              <div className="absolute top-10 right-14 w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-400/20 to-purple-400/20 border border-white/80 backdrop-blur-md shadow-xs animate-float-slow -rotate-12" />
              <div className="absolute bottom-14 left-10 w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 border border-white/80 backdrop-blur-md shadow-xs animate-float-reverse rotate-45" />
            </div>

            {/* 1. Top-Left Floating Card: Web Apps */}
            <div className="absolute -top-3 left-0 sm:top-1 sm:left-1 z-30 animate-float-slow">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#1769E0] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">Web Apps</div>
                  <div className="text-[11px] text-[#667085]">React • Next.js 15</div>
                  <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <span>✓ &lt;0.6s TTFB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Top-Right Floating Card: AI Solutions */}
            <div className="absolute -top-3 right-0 sm:top-1 sm:right-1 z-30 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#6638E8] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0B1B3A] flex items-center gap-1.5">
                    <span>AI Solutions</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-[#667085]">Autonomous AI Agents</div>
                  <div className="text-[10px] font-bold text-[#6638E8] flex items-center gap-1 mt-0.5">
                    <span>⚡ 99.4% Accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Central Dark Interactive Terminal Box */}
            <div className="relative z-20 w-full max-w-[360px] sm:max-w-[400px] rounded-3xl bg-[#08152E] text-white p-5 sm:p-6 shadow-2xl border border-white/15 hover:border-blue-500/50 transition-all duration-300">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#1769E0]/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#6638E8]/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3.5">
                {/* Header with Switchable Tabs */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* Interactive Tabs */}
                  <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        activeTab === 'code' ? 'bg-[#1769E0] text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      pravaah.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('metrics')}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        activeTab === 'metrics' ? 'bg-[#6638E8] text-white font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      metrics.json
                    </button>
                    <button
                      onClick={() => setActiveTab('arch')}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        activeTab === 'arch' ? 'bg-[#00D2FF]/30 text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      arch.config
                    </button>
                  </div>
                </div>

                {/* Tab 1: Code Body */}
                {activeTab === 'code' && (
                  <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 text-slate-300 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[#38BDF8]">import</span> &#123; <span className="text-purple-300">FutureStack</span> &#125; <span className="text-[#38BDF8]">from</span> <span className="text-emerald-300">&apos;@pravaah/core&apos;</span>;
                    </div>
                    <div className="pt-0.5">
                      <span className="text-[#38BDF8]">export const</span> <span className="text-amber-300">architectSolution</span> = <span className="text-[#38BDF8]">async</span> () =&gt; &#123;
                    </div>
                    <div className="pl-3.5">
                      <span className="text-[#38BDF8]">return await</span> <span className="text-cyan-300">PravaahEngine</span>.<span className="text-purple-300">build</span>(&#123;
                    </div>
                    <div className="pl-7">
                      scalability: <span className="text-emerald-300">&apos;100k_concurrent&apos;</span>,
                    </div>
                    <div className="pl-7">
                      aiEnabled: <span className="text-cyan-300">true</span>,
                    </div>
                    <div className="pl-7">
                      uptimeSLA: <span className="text-amber-300">99.99</span>,
                    </div>
                    <div className="pl-3.5">&#125;);</div>
                    <div>&#125;;</div>
                  </div>
                )}

                {/* Tab 2: Live Metrics Body */}
                {activeTab === 'metrics' && (
                  <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 text-slate-300 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>&quot;performance_score&quot;:</span>
                      <span className="text-emerald-400 font-bold">100 / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>&quot;api_latency&quot;:</span>
                      <span className="text-cyan-400 font-bold">&lt; 35ms</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>&quot;cloud_redundancy&quot;:</span>
                      <span className="text-purple-300 font-bold">&quot;Multi-Region&quot;</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>&quot;security_audit&quot;:</span>
                      <span className="text-emerald-400 font-bold">&quot;PASSED (A+)&quot;</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Architecture Config */}
                {activeTab === 'arch' && (
                  <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 text-slate-300 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Next.js 15 App Router Edge</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <Layers className="w-3.5 h-3.5" />
                      <span>PostgreSQL + Redis Cache</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Zero-Trust API Gateway</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-300">
                      <Activity className="w-3.5 h-3.5" />
                      <span>24/7 Automated Health Monitors</span>
                    </div>
                  </div>
                )}

                {/* Footer status */}
                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Engine Online</span>
                  </div>
                  <span className="text-slate-400">v2.5.0 • Surat, IN</span>
                </div>
              </div>
            </div>

            {/* 4. Bottom-Left Floating Card: UI/UX Design */}
            <div className="absolute -bottom-3 left-0 sm:bottom-1 sm:left-1 z-30 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-default">
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
            <div className="absolute -bottom-3 right-0 sm:bottom-1 sm:right-1 z-30 animate-float-slow">
              <div className="bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-[#D6E3F4] shadow-elevated hover:shadow-glow-blue hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-default">
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

