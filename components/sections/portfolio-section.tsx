"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ArrowRight,
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Layers,
  Calendar,
  Building2,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import type { PortfolioProject, PortfolioCategory } from '@/types';
import { Reveal } from '@/components/ui/reveal';

interface PortfolioSectionProps {
  onRequestSimilarProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Web');

  // Specific domain category tabs (WITHOUT generic "All Showcase")
  const DOMAIN_TABS = ['Web', 'Mobile', 'UI/UX', 'Software', 'AI'];

  // Current project on main stage
  const activeProject = PORTFOLIO_DATA[activeProjectIndex] || PORTFOLIO_DATA[0];

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const matchingIdx = PORTFOLIO_DATA.findIndex((p) => p.category === cat);
    if (matchingIdx !== -1) {
      setActiveProjectIndex(matchingIdx);
    }
  };

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % PORTFOLIO_DATA.length);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#EBF3FD] via-[#F5F2FE]/60 to-[#E8F1FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Background ambient lighting & tech grid */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1769E0]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#6638E8]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <Badge variant="blue">Our Work</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Featured <span className="gradient-text-blue-purple">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
              Explore how we architected mission-critical enterprise platforms, high-speed mobile apps, and autonomous AI systems with verified ROI metrics.
            </p>
          </div>
        </Reveal>

        {/* 2. Domain Category Switcher (Without generic "All Showcase") */}
        <Reveal direction="up" delay={80}>
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10 sm:mb-12">
            {DOMAIN_TABS.map((cat) => {
              const isActive = activeProject.category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0B1B3A] text-white shadow-elevated scale-105 ring-4 ring-blue-500/20'
                      : 'bg-white/90 backdrop-blur-md text-[#334155] border border-[#D6E3F4] hover:bg-white hover:border-[#1769E0]/50 hover:shadow-soft'
                  }`}
                >
                  <span>{cat} Engineering</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* 3. Main Interactive Case Study Stage */}
        <Reveal direction="up" delay={120}>
          <div className="rounded-3xl sm:rounded-[36px] bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-10 lg:p-12 relative overflow-hidden mb-12">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />
            
            {/* Ambient Interior Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Project Identity, Metrics & Narrative (6.5 cols) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Meta Tag Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#1769E0] bg-blue-50 border border-blue-100 uppercase tracking-wider">
                    {activeProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#6638E8] bg-purple-50 border border-purple-200/60 font-mono">
                    {activeProject.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs text-[#667085] bg-slate-100 font-mono">
                    {activeProject.year} • {activeProject.timeline}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1B3A] tracking-tight mb-2">
                    {activeProject.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1769E0] font-semibold">
                    {activeProject.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {activeProject.fullDesc}
                </p>

                {/* Verified Performance Metrics */}
                {activeProject.stats && activeProject.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-purple-50/50 to-blue-50/70 border border-blue-100/80">
                    {activeProject.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg sm:text-xl font-black text-[#0B1B3A] font-mono">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-xs font-bold text-[#667085] truncate uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Architectural Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.deliverables.slice(0, 4).map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#334155] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/portfolio/${activeProject.id}`}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-soft hover:scale-105"
                  >
                    <span>View Case Study Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onRequestSimilarProject?.(activeProject.name)}
                    className="px-5 py-3.5 rounded-xl border border-[#D6E3F4] bg-white hover:bg-slate-50 text-[#0B1B3A] text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                  >
                    Request Similar Build
                  </button>
                </div>

              </div>

              {/* Right Column: Immersive Device Stage Frame & Live Tech Preview (5.5 cols) */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Browser Stage Mockup */}
                <div className="relative rounded-3xl bg-[#06132D] p-3 sm:p-4 border border-white/15 shadow-2xl overflow-hidden group">
                  
                  {/* Browser Top Window Bar */}
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-[11px] font-mono text-slate-400 truncate">
                        https://client.pravaah/{activeProject.id}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-400/10 px-2 py-0.5 rounded-md">
                      VERIFIED PRODUCTION
                    </div>
                  </div>

                  {/* High Quality Project Visual with Overlay Zoom */}
                  <Link 
                    href={`/portfolio/${activeProject.id}`}
                    className="block relative aspect-[16/10] w-full mt-3 rounded-2xl overflow-hidden bg-slate-900"
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06132D]/90 via-transparent to-transparent" />
                    
                    {/* Bottom Client Watermark */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="bg-white/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                        {activeProject.client}
                      </span>
                      <span className="text-cyan-300 font-mono text-[11px]">
                        Click to Inspect ↗
                      </span>
                    </div>
                  </Link>

                  {/* Deployed Tech Stack Pill Strip */}
                  <div className="pt-3 flex flex-wrap items-center gap-1.5 px-1">
                    {activeProject.technologies.slice(0, 6).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-mono font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Stage Switcher Controls (Prev / Next & Counter) */}
                <div className="flex items-center justify-between px-2 pt-1">
                  <div className="text-xs font-mono text-[#667085]">
                    Project <strong className="text-[#0B1B3A] font-bold">{activeProjectIndex + 1}</strong> of {PORTFOLIO_DATA.length}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevProject}
                      aria-label="Previous project"
                      className="w-9 h-9 rounded-xl border border-[#D6E3F4] bg-white hover:bg-[#0B1B3A] hover:text-white text-[#0B1B3A] transition-all flex items-center justify-center cursor-pointer shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextProject}
                      aria-label="Next project"
                      className="w-9 h-9 rounded-xl border border-[#D6E3F4] bg-white hover:bg-[#0B1B3A] hover:text-white text-[#0B1B3A] transition-all flex items-center justify-center cursor-pointer shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

        {/* 4. Filmstrip Project Showcase Switcher Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Switch Projects Filmstrip:
            </h4>
            <span className="text-xs font-mono text-[#1769E0]">
              6 Production Case Studies
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PORTFOLIO_DATA.map((proj, idx) => {
              const isSelected = activeProjectIndex === idx;

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-[110px] ${
                    isSelected
                      ? 'bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-elevated scale-105 ring-2 ring-cyan-400'
                      : 'bg-white/95 text-[#0B1B3A] border-[#D6E3F4] hover:border-[#1769E0]/60 hover:scale-[1.02] shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold uppercase ${
                      isSelected ? 'text-cyan-300' : 'text-[#1769E0]'
                    }`}>
                      {proj.category}
                    </span>
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-400' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className={`text-xs font-extrabold truncate ${isSelected ? 'text-white' : 'text-[#0B1B3A]'}`}>
                      {proj.name}
                    </div>
                    <div className={`text-[10px] truncate ${isSelected ? 'text-slate-300' : 'text-[#667085]'}`}>
                      {proj.client}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Bottom Consultation Banner */}
        <Reveal direction="up" delay={150}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D6E3F4] shadow-xs">
              <span className="text-xs sm:text-sm font-bold text-[#0B1B3A]">
                Explore our full portfolio of enterprise and consumer applications
              </span>
              <button
                onClick={() => onRequestSimilarProject?.('General Portfolio Scope')}
                className="px-5 py-2.5 rounded-xl bg-[#1769E0] hover:bg-[#155fc9] text-white text-xs sm:text-sm font-bold transition-all shadow-glow-blue cursor-pointer hover:scale-105 flex items-center gap-1.5"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
