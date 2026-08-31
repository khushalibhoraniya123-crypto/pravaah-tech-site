"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight,
  Globe,
  Palette,
  Sparkles,
  Video,
  Layers,
  Network,
  Bot,
  Settings
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface PortfolioSectionProps {
  onRequestSimilarProject?: (scopeName?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#050C1A] text-white relative overflow-hidden border-b border-[#0E2856]">
      {/* Anchor targets for solutions and portfolio */}
      <span id="solutions" className="sr-only" />
      <span id="portfolio" className="sr-only" />
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#1769E0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Left Ambient Floating Logo Mark */}
      <div className="absolute top-1/4 left-4 pointer-events-none select-none opacity-40 hidden xl:block animate-float-slow">
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/emblem.png" alt="Pravaah" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Top Centered Section Header */}
        <Reveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0D1C34] border border-[#193256] text-[#38BDF8] text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <span>WHAT WE DO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-[-0.02em] leading-tight">
              Services & Solutions For the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#A855F7]">
                Digital
              </span> <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#A855F7] to-[#C084FC]">
                Future
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We combine creativity, technology and innovation to deliver digital services and business solutions designed around your goals.
            </p>
          </div>
        </Reveal>

        {/* 2. Main Two Column Groups: OUR SERVICES & OUR SOLUTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
          
          {/* ========================================================= */}
          {/* LEFT GROUP: OUR SERVICES                                  */}
          {/* ========================================================= */}
          <div className="space-y-6">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]" />
                <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  OUR SERVICES
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full text-[11px] font-bold text-[#00D2FF] bg-[#00D2FF]/10 border border-[#00D2FF]/30">
                Design & Engineering
              </span>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Web & App Development */}
              <Reveal direction="up" delay={50}>
                <Link
                  href="/services/web-development"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-cyan-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,210,255,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-[#0E223D] px-2 py-0.5 rounded border border-cyan-800/40">
                        01 WEB & MOBILE
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Web & App Development
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Scalable full-stack web applications, interactive architectures, and performance-first mobile experiences.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Explore Stream
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 2: UI/UX & Graphic Design */}
              <Reveal direction="up" delay={100}>
                <Link
                  href="/services/ui-ux-design"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-cyan-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,210,255,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Palette className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-[#0E223D] px-2 py-0.5 rounded border border-cyan-800/40">
                        02 PRODUCT UI
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      UI/UX & Graphic Design
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Human-centered user interfaces, comprehensive design systems, and engaging brand identity assets.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Explore Stream
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 3: AI & Automation Systems */}
              <Reveal direction="up" delay={150}>
                <Link
                  href="/services/ai-solutions"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-cyan-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,210,255,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-[#0E223D] px-2 py-0.5 rounded border border-cyan-800/40">
                        03 INTELLIGENCE
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      AI & Automation Systems
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Integrating cognitive intelligence, LLMs, and custom automation algorithms into core workflows.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Explore Stream
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 4: Video & Creative Services */}
              <Reveal direction="up" delay={200}>
                <Link
                  href="/services/digital-transformation"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-cyan-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,210,255,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Video className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-[#0E223D] px-2 py-0.5 rounded border border-cyan-800/40">
                        04 MOTION STUDIO
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Video & Creative Services
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      High-impact promotional media, 3D motion graphics, and narrative digital assets for technology products.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Explore Stream
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT GROUP: OUR SOLUTIONS                                */}
          {/* ========================================================= */}
          <div className="space-y-6">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7] shadow-[0_0_12px_#A855F7]" />
                <h3 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  OUR SOLUTIONS
                </h3>
              </div>

              <span className="px-3 py-1 rounded-full text-[11px] font-bold text-[#C084FC] bg-[#A855F7]/10 border border-[#A855F7]/30">
                Enterprise & Systems
              </span>
            </div>

            {/* 2x2 Solutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Custom Software Solutions */}
              <Reveal direction="up" delay={50}>
                <Link
                  href="/solutions/business-automation"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-purple-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                        <Layers className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-[#1A1434] px-2 py-0.5 rounded border border-purple-800/40">
                        01 CUSTOM PLATFORM
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      Custom Software Solutions
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Purpose-built enterprise platforms engineered to transform operations and streamline team workflows.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-purple-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Explore System
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 2: Digital Business Platforms */}
              <Reveal direction="up" delay={100}>
                <Link
                  href="/solutions/erp-solutions"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-purple-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                        <Network className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-[#1A1434] px-2 py-0.5 rounded border border-purple-800/40">
                        02 ECOSYSTEM
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      Digital Business Platforms
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Scalable multi-tenant business software with centralized challans, billing, and real-time dashboards.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-purple-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Explore System
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 3: AI-Powered Business Solutions */}
              <Reveal direction="up" delay={150}>
                <Link
                  href="/solutions/ai-agents"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-purple-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                        <Bot className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-[#1A1434] px-2 py-0.5 rounded border border-purple-800/40">
                        03 COGNITIVE TECH
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      AI-Powered Business Solutions
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Data-driven predictive systems and smart decision engines built for modern digital-first enterprises.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-purple-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Explore System
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

              {/* Card 4: Workflow & Process Automation */}
              <Reveal direction="up" delay={200}>
                <Link
                  href="/solutions/crm-solutions"
                  className="group relative rounded-2xl bg-[#091428] border border-[#162744] hover:border-purple-500/50 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(168,85,247,0.12)] block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                        <Settings className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-[#1A1434] px-2 py-0.5 rounded border border-purple-800/40">
                        04 PROCESS FLOW
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      Workflow & Process Automation
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Automating repetitive pipelines with zero friction, event webhooks, and secure cloud integrations.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-purple-300 transition-colors mt-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      Explore System
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>

            </div>

          </div>

        </div>

        {/* 3. Bottom Requirement Banner */}
        <Reveal direction="up" delay={150}>
          <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Have a unique business requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Let&apos;s create the right digital solution for you.
              </p>
            </div>

            <button
              onClick={() => onRequestSimilarProject?.('Custom Business Requirement')}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#071120] text-sm font-bold shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_24px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-[#071120]" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
