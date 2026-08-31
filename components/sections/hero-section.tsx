"use client";

import React from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight,
  Link as LinkIcon,
  Bot
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onStartProject, 
  onExploreServices 
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#EDF6FD] via-[#F4F9FE] to-[#E9F3FC] border-b border-[#D8E4F5]"
    >
      {/* 1. Precise Background Square Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(23, 105, 224, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(23, 105, 224, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Soft Ambient Lighting */}
      <div className="absolute top-12 left-1/4 w-[520px] h-[520px] bg-[#1769E0]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[620px] h-[620px] bg-[#6638E8]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Floating Cyan/Purple Wave Ribbon on Far Left Edge (Matching Screenshot) */}
      <div className="absolute top-[38%] left-2 sm:left-4 xl:left-8 pointer-events-none select-none hidden lg:block animate-float-slow">
        <div className="w-10 h-10 rounded-xl bg-white/90 border border-[#D5E3F5] shadow-xs flex items-center justify-center p-2 backdrop-blur-md">
          <svg viewBox="0 0 40 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18 C12 18, 18 20, 24 12 C28 6, 32 4, 36 4" stroke="#00D2FF" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M8 20 C16 20, 22 22, 28 14 C32 8, 34 6, 38 6" stroke="#6638E8" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT CONTENT AREA                                         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Top Pill Badge */}
            <Reveal direction="down" duration={500}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E3F5] shadow-[0_2px_8px_rgba(23,105,224,0.06)]">
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1769E0]">
                  DIGITAL SOLUTIONS FOR AMBITIOUS TEAMS
                </span>
              </div>
            </Reveal>

            {/* Main Heading (Exact line breaks & gradient for "forward.") */}
            <Reveal direction="up" delay={80} duration={600}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[68px] font-black text-[#0B1B3A] tracking-[-0.03em] leading-[1.05]">
                Build what moves <br />
                your business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#1769E0] to-[#7C3AED]">
                  forward.
                </span>
              </h1>
            </Reveal>

            {/* Description (Exact 2 lines) */}
            <Reveal direction="up" delay={140} duration={600}>
              <p className="text-base sm:text-lg text-[#475467] leading-relaxed max-w-xl font-normal">
                Pravaah Technology turns complex ideas into clear, reliable digital
                products that help your team grow with confidence.
              </p>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={200} duration={600}>
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 pt-1">
                {/* Primary Button: Blue to Purple Gradient */}
                <button
                  onClick={onExploreServices}
                  className="px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#1E6BFF] via-[#3363F3] to-[#7C3AED] hover:from-[#1760E8] hover:to-[#6D28D9] text-white text-sm sm:text-base font-bold shadow-[0_8px_20px_rgba(30,107,255,0.32)] hover:shadow-[0_12px_28px_rgba(30,107,255,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Explore our services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button: Solid White with Dark Text */}
                <button
                  onClick={onStartProject}
                  className="px-6 sm:px-7 py-3.5 rounded-2xl bg-white hover:bg-[#F8FAFC] border border-[#D6E3F4] text-[#0B1B3A] text-sm sm:text-base font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </Reveal>

            {/* Bottom 3 Feature Checkpoints */}
            <Reveal direction="up" delay={260} duration={600}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 text-xs sm:text-sm font-bold text-[#334155]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1769E0] stroke-[3]" />
                  <span>Design</span>
                </div>

                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1769E0] stroke-[3]" />
                  <span>Develop</span>
                </div>

                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1769E0] stroke-[3]" />
                  <span>Scale</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ========================================================= */}
          {/* RIGHT VISUAL DASHBOARD COMPOSITION                         */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center py-6 sm:py-8 lg:py-10">
            
            {/* Background SVG Delicate Orbit Curves */}
            <svg 
              className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] pointer-events-none opacity-50 hidden sm:block" 
              viewBox="0 0 600 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse 
                cx="300" 
                cy="300" 
                rx="260" 
                ry="170" 
                transform="rotate(-15 300 300)" 
                stroke="#1769E0" 
                strokeOpacity="0.16" 
                strokeWidth="1.5" 
                strokeDasharray="4 8" 
              />
              <ellipse 
                cx="300" 
                cy="300" 
                rx="190" 
                ry="120" 
                transform="rotate(20 300 300)" 
                stroke="#00D2FF" 
                strokeOpacity="0.22" 
                strokeWidth="1.2" 
              />
            </svg>

            {/* Container for the 3 layered cards and 2 floating badges */}
            <div className="relative w-full max-w-[440px] sm:max-w-[470px] lg:max-w-[480px] flex items-center justify-center">

              {/* 1. TOP-LEFT FLOATING STATUS PILL */}
              <div className="absolute -top-5 left-8 sm:-top-4 sm:left-10 z-40 animate-float-slow">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D5E3F5] shadow-[0_4px_14px_rgba(23,105,224,0.12)]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#0B1B3A]">AI Ready</span>
                </div>
              </div>

              {/* 2. BOTTOM-RIGHT FLOATING STATUS PILL */}
              <div className="absolute -bottom-5 right-2 sm:-bottom-4 sm:right-4 z-40 animate-float-reverse">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D5E3F5] shadow-[0_4px_14px_rgba(23,105,224,0.12)]">
                  <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                  <span className="text-[11px] font-bold text-[#0B1B3A]">System Active</span>
                </div>
              </div>

              {/* 3. LAYERED BACKGROUND CARD (LEFT / WHITE - Pravaah Services / Build) */}
              <div 
                className="absolute -top-5 -left-6 sm:-top-5 sm:-left-8 w-[260px] sm:w-[280px] rounded-2xl bg-white border border-[#D6E3F4] p-3.5 sm:p-4 shadow-[0_10px_28px_rgba(23,105,224,0.08)] z-10 hidden sm:block pointer-events-none select-none"
              >
                {/* Mini Browser Bar */}
                <div className="flex items-center gap-1 pb-2 border-b border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-1.5 text-[9px] font-mono text-slate-400">Pravaah Services / Build</span>
                </div>

                <div className="pt-2 space-y-2">
                  <div>
                    <span className="text-[8px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider block">BUILD</span>
                    <h4 className="text-xs font-extrabold text-[#0B1B3A]">Pravaah Services</h4>
                  </div>

                  {/* Service rows with bottom underline accents */}
                  <div className="space-y-2 text-[11px]">
                    <div>
                      <div className="flex items-center justify-between pb-0.5">
                        <div>
                          <span className="font-bold text-[#0B1B3A] block leading-tight">Web Development</span>
                          <span className="text-[8px] text-slate-400">React / Node.js</span>
                        </div>
                      </div>
                      <div className="w-full h-0.5 rounded-full bg-[#00D2FF]" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between pb-0.5">
                        <div>
                          <span className="font-bold text-[#0B1B3A] block leading-tight">Mobile Development</span>
                          <span className="text-[8px] text-slate-400">iOS / Android</span>
                        </div>
                      </div>
                      <div className="w-full h-0.5 rounded-full bg-[#2563EB]" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between pb-0.5">
                        <div>
                          <span className="font-bold text-[#0B1B3A] block leading-tight">UI/UX Design</span>
                          <span className="text-[8px] text-slate-400">Design systems</span>
                        </div>
                      </div>
                      <div className="w-full h-0.5 rounded-full bg-[#6366F1]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. LAYERED BACKGROUND CARD (RIGHT / WHITE - Technology System / Architecture) */}
              <div 
                className="absolute top-8 -right-6 sm:top-8 sm:-right-8 w-[220px] sm:w-[240px] rounded-2xl bg-white border border-[#D6E3F4] p-3.5 sm:p-4 shadow-[0_10px_28px_rgba(23,105,224,0.08)] z-10 hidden sm:block pointer-events-none select-none"
              >
                <div className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                  Technology System / Architecture
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-extrabold text-[#0B1B3A]">Technology System</span>
                  <LinkIcon className="w-3 h-3 text-[#1769E0]" />
                </div>

                <div className="pt-2.5 space-y-2.5 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-1.5 rounded-full bg-slate-100" />
                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-1.5 rounded-full bg-slate-100" />
                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-1.5 rounded-full bg-slate-100" />
                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* 5. MAIN COMPACT DARK NAVY DASHBOARD PANEL (FOREGROUND) */}
              <div className="relative z-30 w-full rounded-2xl sm:rounded-3xl bg-[#081225] text-white p-3.5 sm:p-4 md:p-5 shadow-[0_20px_50px_rgba(6,19,45,0.45)] border border-[#1C2C4A] hover:border-blue-500/40 transition-all duration-300">
                
                {/* Internal Ambient Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#1769E0]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#6638E8]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 truncate">
                      Pravaah Technology / Digital Platform
                    </span>
                    <div className="w-4" />
                  </div>

                  {/* Dashboard Header Bar */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* Exact Pravaah Emblem Brand Icon */}
                      <div className="w-7 h-7 rounded-lg bg-[#0F1E36] border border-white/15 flex items-center justify-center p-1 shrink-0 shadow-xs">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo/emblem.png" alt="Pravaah" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className="text-[8px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider block">
                          DIGITAL PLATFORM
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                          Digital Solutions
                        </h3>
                      </div>
                    </div>

                    {/* Top-Right Status Pill */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#064E3B]/90 border border-[#059669]/60 text-[#34D399] text-[9px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-slate-300">
                    Building scalable digital experiences for modern businesses.
                  </p>

                  {/* 2-Column Dashboard Cards Grid */}
                  <div className="grid grid-cols-12 gap-2.5 pt-0.5">
                    
                    {/* Left Card (7 cols): Project Overview */}
                    <div className="col-span-7 p-2.5 sm:p-3 rounded-xl bg-[#0D1B36] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300">
                          Project Overview
                        </span>
                        <span className="text-[8px] font-mono font-bold text-[#00D2FF] bg-[#00D2FF]/10 px-1.5 py-0.5 rounded">
                          Live
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="space-y-0.5">
                          <div className="text-sm sm:text-base font-black text-white">24+</div>
                          <div className="text-[8px] text-slate-400 uppercase font-medium">Projects</div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-sm sm:text-base font-black text-[#00D2FF]">18</div>
                          <div className="text-[8px] text-slate-400 uppercase font-medium">Active</div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-sm sm:text-base font-black text-white">6</div>
                          <div className="text-[8px] text-slate-400 uppercase font-medium">Completed</div>
                        </div>

                        <div className="space-y-0.5">
                          <div className="text-sm sm:text-base font-black text-white">98%</div>
                          <div className="text-[8px] text-slate-400 uppercase font-medium">Satisfaction</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Cards Stack (5 cols): System Health & Automation */}
                    <div className="col-span-5 flex flex-col justify-between gap-1.5">
                      
                      {/* System Health */}
                      <div className="p-2.5 rounded-xl bg-[#0D1B36] border border-white/10 space-y-1">
                        <div className="flex items-center justify-between text-[9px]">
                          <span className="text-slate-300 font-medium">System Health</span>
                        </div>
                        <div className="text-sm sm:text-base font-black text-[#00D2FF]">99.9%</div>
                        <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-[99.9%] h-full bg-gradient-to-r from-[#00D2FF] to-[#10B981] rounded-full" />
                        </div>
                      </div>

                      {/* Automation */}
                      <div className="p-2.5 rounded-xl bg-[#0D1B36] border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-[8px] text-slate-400 block font-medium">Automation</span>
                          <span className="text-[11px] font-bold text-white">AI Active</span>
                        </div>
                        <div className="w-6 h-6 rounded-md bg-blue-500/20 text-[#00D2FF] flex items-center justify-center">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Technology Pills Row */}
                  <div className="flex flex-wrap items-center gap-1 pt-0.5">
                    {['React', 'Node.js', 'MongoDB', 'AI', 'Cloud', 'API'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#0D1B36] border border-white/10 text-[9px] font-mono font-medium text-slate-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Progress Timeline Pipeline */}
                  <div className="pt-1.5 border-t border-white/10">
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 relative">
                      <span className="text-cyan-300 font-bold">Design</span>
                      <span className="h-0.5 flex-1 mx-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                      <span className="text-blue-300 font-bold">Develop</span>
                      <span className="h-0.5 flex-1 mx-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
                      <span className="text-indigo-300 font-bold">Test</span>
                      <span className="h-0.5 flex-1 mx-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                      <span className="text-purple-300 font-bold">Deploy</span>
                    </div>
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
