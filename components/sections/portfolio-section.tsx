"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ProjectCard } from '@/components/cards/project-card';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import type { PortfolioCategory } from '@/types';

import { Reveal } from '@/components/ui/reveal';

interface PortfolioSectionProps {
  onRequestSimilarProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const categories: PortfolioCategory[] = ['all', 'Web', 'Mobile', 'UI/UX', 'Software', 'AI'];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#EBF3FD] via-[#F5F2FE]/60 to-[#E8F1FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
            <Badge variant="blue">SHOWCASE & PROVEN RESULTS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Featured Projects & <span className="gradient-text-blue-purple">Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Explore how we engineered scalable applications, modernized legacy workflows, and delivered measurable business outcomes for our clients.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <Reveal direction="up" delay={100}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                  activeCategory === cat
                    ? 'bg-[#0B1B3A] text-white shadow-soft'
                    : 'bg-white/90 backdrop-blur-sm border border-[#D6E3F4] text-[#334155] hover:bg-white hover:border-[#1769E0]/40'
                }`}
              >
                {cat === 'all' ? 'All Showcase (6)' : `${cat} Projects`}
              </button>
            ))}
          </div>
        </Reveal>

        {/* 6 Grid Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80} direction="up">
              <ProjectCard
                project={project}
              />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

