"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PROCESS_DATA } from '@/data/process';
import { 
  Search, 
  Compass, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

const PROCESS_ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Compass,
  Palette,
  Code,
  Rocket,
  TrendingUp,
};

interface ProcessSectionProps {
  onStartProject?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const scrollToContact = () => {
    if (onStartProject) {
      onStartProject();
      return;
    }
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  // Exact progress from Node 1 (0%) to Node 6 (100%)
  const progressPercentage = (activeStage / (PROCESS_DATA.length - 1)) * 100;
  const currentStageData = PROCESS_DATA[activeStage] || PROCESS_DATA[0];
  const ActiveIcon = PROCESS_ICON_MAP[currentStageData.iconName] || Search;

  return (
    <section 
      id="process" 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/80 to-[#EAF2FC] relative overflow-hidden border-b border-[#D8E4F5]"
    >
      {/* Ambient background glows & tech grid */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#1769E0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#6638E8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Process Hero Section */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#6638E8]" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              From Raw Idea to <span className="gradient-text-blue-purple">Market Leader</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
              A continuous, collaborative development journey engineered for speed, quality, and precision.
            </p>
          </div>
        </Reveal>

        {/* 2. Desktop Animated Horizontal Journey Timeline */}
        <div className="hidden lg:block relative mb-12 sm:mb-16 select-none">
          
          {/* Continuous Journey Connecting Line */}
          {/* Spans exactly between center of Node 1 (8.33%) and center of Node 6 (91.66%) */}
          <div className="absolute top-[46px] left-[8.33%] right-[8.33%] h-1 bg-[#D4E2F5] rounded-full z-0">
            {/* Active Glow Filled Progress Line */}
            <div 
              className="h-full bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF] rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progressPercentage}%` }}
            >
              {/* Moving Digital Pulse Dot on Path */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-300/40 shadow-glow-blue animate-pulse" />
            </div>
          </div>

          {/* 6 Stage Nodes along the path */}
          <div className="grid grid-cols-6 gap-3 relative z-10">
            {PROCESS_DATA.map((stage, idx) => {
              const StageIcon = PROCESS_ICON_MAP[stage.iconName] || Search;
              const isActive = activeStage === idx;
              const isPast = idx <= activeStage;

              return (
                <button 
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300 focus:outline-none w-full"
                >
                  {/* Node Button Icon Circle */}
                  <div className={`w-22 h-22 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 mb-4 relative ${
                    isActive
                      ? 'bg-[#06132D] text-white shadow-elevated scale-110 ring-4 ring-blue-500/25 border-2 border-cyan-400'
                      : isPast
                      ? 'bg-white text-[#1769E0] border border-[#1769E0]/50 shadow-soft scale-100 hover:scale-105'
                      : 'bg-white/90 text-slate-400 border border-[#D6E3F4] hover:border-slate-300 scale-95 hover:scale-100'
                  }`}>
                    <span className={`font-mono text-xs font-bold mb-1 ${
                      isActive ? 'text-cyan-300' : isPast ? 'text-[#1769E0]' : 'text-slate-400'
                    }`}>
                      {stage.number}
                    </span>
                    <StageIcon className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'scale-110 text-white' : ''
                    }`} />
                  </div>

                  {/* Stage Titles */}
                  <div className="space-y-0.5 max-w-[150px]">
                    <h3 className={`text-sm font-extrabold transition-colors ${
                      isActive ? 'text-[#0B1B3A]' : isPast ? 'text-[#1769E0]' : 'text-[#667085]'
                    }`}>
                      {stage.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#6638E8]">
                      {stage.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Active Stage Spotlight Display */}
        <Reveal direction="up" delay={100}>
          <div className="relative rounded-3xl sm:rounded-[32px] bg-white/95 backdrop-blur-md border border-[#D6E3F4] p-6 sm:p-10 lg:p-12 shadow-elevated overflow-hidden mb-12 sm:mb-16">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Number & Stage Core Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#1769E0] border border-blue-100 flex items-center justify-center p-3 shadow-xs shrink-0">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase font-bold text-[#6638E8]">
                      PHASE {currentStageData.number} OF 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B3A]">
                      {currentStageData.title} — <span className="text-[#1769E0] font-bold">{currentStageData.tagline}</span>
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                  {currentStageData.description}
                </p>

                {/* Key Deliverables Pill List */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phase Deliverables & Engineering Scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStageData.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                        <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Stage Navigation & Quality Assurance (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#06132D] text-white border border-white/10 shadow-soft space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-mono font-bold">
                    <span>STAGE PROGRESSION</span>
                    <span>PHASE {activeStage + 1} OF 06</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1769E0] to-[#00D2FF] transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Pravaah Quality Gate</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeStage === 5 
                      ? 'Our dedicated maintenance team provides 24/7 uptime monitoring, security patching, SLA guarantees, and regular feature updates.'
                      : 'Every sprint includes automated unit tests, code reviews, daily standups, and bi-weekly milestone demonstrations.'}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
                  <button
                    onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                    disabled={activeStage === 0}
                    className="px-4 py-2 rounded-xl text-xs font-bold border border-white/15 bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                  >
                    Previous Phase
                  </button>

                  <button
                    onClick={() => setActiveStage((prev) => (prev + 1) % PROCESS_DATA.length)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1769E0] hover:bg-[#155fc9] text-white transition-all flex items-center gap-1.5 shadow-glow-blue cursor-pointer hover:scale-105"
                  >
                    <span>{activeStage === 5 ? 'Restart at Phase 01' : 'Next Phase'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* 4. Mobile Vertical Journey Timeline (Only shown on small screens) */}
        <div className="block lg:hidden space-y-4 mb-12 relative">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Select Any Milestone:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {PROCESS_DATA.map((stage, idx) => {
              const StageIcon = PROCESS_ICON_MAP[stage.iconName] || Search;
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#06132D] text-white border-cyan-400 shadow-glow-blue scale-[1.02]'
                      : 'bg-white text-[#0B1B3A] border-[#D6E3F4] hover:border-slate-300'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-cyan-300' : 'text-[#1769E0]'}`}>
                    {stage.number}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {stage.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Final Completion State Banner */}
        <Reveal direction="up" delay={150}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#06132D] via-[#0B1B3A] to-[#0E2856] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MILESTONE ZERO TO SCALE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to transform your idea into reality?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Let&apos;s map out your project architecture, milestone sprints, and exact technical roadmap today.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-glow-blue transition-all hover:scale-105 shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
