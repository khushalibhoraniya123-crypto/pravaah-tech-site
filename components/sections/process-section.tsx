"use client";

import React from 'react';
import { 
  Search, 
  Target, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  Clock
} from 'lucide-react';
import { PROCESS_DATA } from '@/data/process';
import { Reveal } from '@/components/ui/reveal';

const STEP_ICONS = [
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
];

const STEP_THEMES = [
  {
    badgeBg: 'bg-cyan-50 border-cyan-200 text-[#0284C7]',
    nodeBorder: 'border-cyan-400 text-[#0284C7] shadow-[0_0_18px_rgba(2,132,199,0.35)]',
    dotBg: 'bg-[#00D2FF]',
  },
  {
    badgeBg: 'bg-blue-50 border-blue-200 text-[#1769E0]',
    nodeBorder: 'border-[#1769E0] text-[#1769E0] shadow-[0_0_18px_rgba(23,105,224,0.35)]',
    dotBg: 'bg-[#1769E0]',
  },
  {
    badgeBg: 'bg-purple-50 border-purple-200 text-[#7C3AED]',
    nodeBorder: 'border-[#7C3AED] text-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.35)]',
    dotBg: 'bg-[#7C3AED]',
  },
  {
    badgeBg: 'bg-indigo-50 border-indigo-200 text-[#4F46E5]',
    nodeBorder: 'border-[#4F46E5] text-[#4F46E5] shadow-[0_0_18px_rgba(79,70,229,0.35)]',
    dotBg: 'bg-[#4F46E5]',
  },
  {
    badgeBg: 'bg-emerald-50 border-emerald-200 text-[#059669]',
    nodeBorder: 'border-[#059669] text-[#059669] shadow-[0_0_18px_rgba(5,150,105,0.35)]',
    dotBg: 'bg-[#059669]',
  },
  {
    badgeBg: 'bg-rose-50 border-rose-200 text-[#E11D48]',
    nodeBorder: 'border-[#E11D48] text-[#E11D48] shadow-[0_0_18px_rgba(225,29,72,0.35)]',
    dotBg: 'bg-[#E11D48]',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section 
      id="process" 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFE] to-[#EFF5FD] relative overflow-hidden border-b border-[#D8E4F5]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1769E0]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#6638E8]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Far Left Ambient Floating Logo Mark */}
      <div className="absolute top-1/3 left-4 pointer-events-none select-none opacity-80 hidden xl:block animate-float-slow">
        <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#D5E3F5] shadow-xs flex items-center justify-center p-1.5 backdrop-blur-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/emblem.png" alt="Pravaah" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Centered Section Header Matching Reference Screenshot */}
        <Reveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[#7C3AED] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span>OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0B1B3A] tracking-[-0.02em] leading-tight">
              From Raw Idea to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]">
                Market
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">
                Leader
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
              A continuous, collaborative development journey engineered for speed, quality, and precision.
            </p>
          </div>
        </Reveal>

        {/* 2. Vertical Alternating Timeline Architecture */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Continuous Center Vertical Line (Hidden on mobile, centered on md+) */}
          <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00D2FF] via-[#2563EB] to-[#9333EA] hidden md:block" />

          {/* Steps Flow */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 relative">
            {PROCESS_DATA.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0 is Left (Odd phase), 1 is Right (Even phase)
              const StepIcon = STEP_ICONS[idx] || Search;
              const theme = STEP_THEMES[idx] || STEP_THEMES[0];

              return (
                <div 
                  key={step.number} 
                  className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
                >
                  
                  {/* LEFT SIDE BLOCK */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'order-2 md:order-1 md:invisible' : 'order-2 md:order-1 text-left md:text-right'}`}>
                    {!isEven && (
                      <Reveal direction="right" duration={600}>
                        <div className="space-y-3 p-2">
                          {/* Phase Badge & Number */}
                          <div className="inline-flex items-center gap-2.5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${theme.badgeBg}`}>
                              {step.category}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              PHASE {step.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-black text-[#0B1B3A] tracking-tight">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-[#667085] leading-relaxed max-w-md ml-auto">
                            {step.description}
                          </p>

                          {/* Pill Tags */}
                          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 pt-1">
                            {step.highlights.map((tag: string, tIdx: number) => (
                              <div 
                                key={tIdx} 
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8E4F2] text-xs font-semibold text-[#334155] shadow-xs"
                              >
                                <Clock className="w-3 h-3 text-[#1769E0]" />
                                <span>{tag}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    )}
                  </div>

                  {/* CENTER MILESTONE NODE CIRCLE */}
                  <div className="order-1 md:order-2 relative z-20 flex items-center justify-center shrink-0">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 ${theme.nodeBorder} flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-default group`}>
                      <StepIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* RIGHT SIDE BLOCK */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'order-3 md:order-3 text-left' : 'order-3 md:order-3 md:invisible'}`}>
                    {isEven && (
                      <Reveal direction="left" duration={600}>
                        <div className="space-y-3 p-2">
                          {/* Phase Badge & Number */}
                          <div className="inline-flex items-center gap-2.5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${theme.badgeBg}`}>
                              {step.category}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-400">
                              PHASE {step.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-black text-[#0B1B3A] tracking-tight">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-[#667085] leading-relaxed max-w-md">
                            {step.description}
                          </p>

                          {/* Pill Tags */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {step.highlights.map((tag: string, tIdx: number) => (
                              <div 
                                key={tIdx} 
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8E4F2] text-xs font-semibold text-[#334155] shadow-xs"
                              >
                                <Clock className="w-3 h-3 text-[#1769E0]" />
                                <span>{tag}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
