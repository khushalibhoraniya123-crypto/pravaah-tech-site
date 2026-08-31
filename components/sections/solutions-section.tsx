"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Users, 
  Layers, 
  ShoppingBag, 
  Boxes, 
  UtensilsCrossed, 
  HeartPulse, 
  GraduationCap, 
  TrendingUp, 
  Bot,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Cpu
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SOLUTIONS_DATA } from '@/data/solutions';
import { Reveal } from '@/components/ui/reveal';

const SOLUTION_ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Users,
  Layers,
  ShoppingBag,
  Boxes,
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Bot,
};

interface SolutionsSectionProps {
  onConsultSolution?: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onConsultSolution }) => {
  const [selectedId, setSelectedId] = useState<string>(SOLUTIONS_DATA[0].id);

  const activeSolution = SOLUTIONS_DATA.find((s) => s.id === selectedId) || SOLUTIONS_DATA[0];
  const ActiveIcon = SOLUTION_ICON_MAP[activeSolution.iconName] || Layers;

  return (
    <section id="solutions" className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F1FB] via-[#F6F2FE]/70 to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Background ambient lighting & tech grid */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1769E0]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#6638E8]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <Badge variant="blue">ENTERPRISE SOLUTIONS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Interactive Solution <span className="gradient-text-blue-purple">Showcase</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Explore our modular, pre-architected enterprise solutions designed to solve critical operational bottlenecks and accelerate digital revenue.
            </p>
          </div>
        </Reveal>

        {/* Large Horizontal / Vertical Interactive Showcase */}
        <Reveal direction="up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Numbered Solutions Menu List (4.5 cols) */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col space-y-2 max-h-[580px] lg:max-h-[660px] overflow-y-auto pr-1 sm:pr-2 scrollbar-thin">
              {SOLUTIONS_DATA.map((item) => {
                const isSelected = item.id === activeSolution.id;
                const ItemIcon = SOLUTION_ICON_MAP[item.iconName] || Layers;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    onMouseEnter={() => setSelectedId(item.id)}
                    className={`group relative text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#06132D] text-white border-[#0B1B3A] shadow-elevated scale-[1.01]'
                        : 'bg-white/90 backdrop-blur-md text-[#334155] border-[#D6E3F4] hover:bg-white hover:border-[#1769E0]/50 hover:shadow-soft'
                    }`}
                  >
                    {/* Active Accent Indicator */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-[#1769E0] to-[#6638E8] rounded-r-full" />
                    )}

                    <div className="flex items-center gap-3 min-w-0 pl-1.5">
                      <span className={`font-mono text-xs font-bold shrink-0 ${isSelected ? 'text-[#38BDF8]' : 'text-slate-400'}`}>
                        {item.number}
                      </span>
                      <div className="min-w-0">
                        <div className={`text-xs sm:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-[#0B1B3A] group-hover:text-[#1769E0]'}`}>
                          {item.title}
                        </div>
                        <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-[#667085]'}`}>
                          {item.tagline}
                        </div>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isSelected 
                        ? 'bg-white/10 text-cyan-300 shadow-xs' 
                        : 'bg-slate-50 text-slate-400 group-hover:text-[#1769E0] group-hover:bg-blue-50'
                    }`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Large Dynamic Visual Solution Showcase Panel (7.5 cols) */}
            <div className="lg:col-span-8 xl:col-span-8">
              <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300 h-full flex flex-col justify-between">
                
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />
                
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  
                  {/* Header: Number, Category & Icon */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D6E3F4]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#1769E0] border border-blue-100/80 flex items-center justify-center shadow-xs">
                        <ActiveIcon className="w-6 h-6 text-[#1769E0] animate-pulse-subtle" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#6638E8]">
                            SOLUTION {activeSolution.number}
                          </span>
                          <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-[#1769E0] border border-blue-100">
                            {activeSolution.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
                          {activeSolution.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metrics Chip */}
                    {activeSolution.metrics && activeSolution.metrics.length > 0 && (
                      <div className="flex items-center gap-2">
                        {activeSolution.metrics.slice(0, 2).map((m, i) => (
                          <div key={i} className="text-right px-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-100/80">
                            <div className="text-sm font-extrabold text-[#1769E0]">{m.value}</div>
                            <div className="text-[9px] font-bold text-[#667085] uppercase tracking-wider">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                    {activeSolution.description}
                  </p>

                  {/* 2-Column Specs: Capabilities & Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    
                    {/* Left Specs: Capabilities */}
                    <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B1B3A] flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#1769E0]" />
                        <span>Core Functional Capabilities</span>
                      </div>
                      <div className="space-y-2">
                        {activeSolution.features.slice(0, 4).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#334155] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Specs: Expected ROI / Benefits */}
                    <div className="space-y-2.5 bg-gradient-to-br from-[#06132D] to-[#0B1B3A] text-white p-4 rounded-2xl border border-white/10 shadow-soft">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Measurable Business ROI</span>
                      </div>
                      <div className="space-y-2">
                        {activeSolution.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0 mt-1.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#0B1B3A] mr-1">Deployed Tech:</span>
                    {activeSolution.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#D6E3F4] text-[11px] font-semibold text-[#0B1B3A] shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Actions Bar */}
                <div className="pt-6 mt-6 border-t border-[#D6E3F4] flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                  <div className="text-xs text-[#667085]">
                    Available for custom deployment & enterprise licensing.
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      href={`/solutions/${activeSolution.id}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0B1B3A] hover:bg-[#1769E0] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-soft hover:scale-105"
                    >
                      <span>Explore {activeSolution.title.split('&')[0].trim()}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onConsultSolution?.(activeSolution.title)}
                      className="w-full sm:w-auto text-xs"
                    >
                      Consult Architect
                    </Button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
