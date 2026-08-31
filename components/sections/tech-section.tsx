"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TechCard } from '@/components/cards/tech-card';
import { TECH_STACK_DATA } from '@/data/techStack';

import { Reveal } from '@/components/ui/reveal';

export const TechSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  const filteredCategories = TECH_STACK_DATA.filter((cat) => cat.id === activeCategory);

  return (
    <section id="technologies" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#EAF2FC] via-[#F6F2FE]/60 to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
            <Badge variant="blue">TECHNOLOGY MATRIX</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Technology That <span className="gradient-text-blue-purple">Drives Innovation</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              We work with modern technologies to create scalable, secure and high-performance digital solutions.
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal direction="up" delay={100}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-10">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                  activeCategory === tab.id
                    ? 'bg-[#0B1B3A] text-white shadow-soft'
                    : 'bg-white/90 backdrop-blur-sm border border-[#D6E3F4] text-[#334155] hover:bg-white hover:border-[#1769E0]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Categories Stack Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <Reveal direction="up" delay={150}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#D6E3F4]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-[#0B1B3A]">{category.name}</h3>
                    <span className="text-[11px] font-semibold text-[#1769E0] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {category.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#667085] max-w-md">{category.description}</p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech, idx) => (
                  <Reveal key={idx} delay={idx * 60} direction="up">
                    <TechCard item={tech} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
