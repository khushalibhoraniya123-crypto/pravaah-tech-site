"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TechCard } from '@/components/cards/tech-card';
import { TECH_STACK_DATA } from '@/data/techStack';

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
    <section id="technologies" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="blue">TECHNOLOGY MATRIX</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Technology That <span className="gradient-text-blue-purple">Drives Innovation</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            We work with modern technologies to create scalable, secure and high-performance digital solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#0B1B3A] text-white shadow-soft'
                  : 'bg-white border border-[#E4E7EC] text-[#334155] hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Stack Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-[#0B1B3A]">{category.name}</h3>
                  <span className="text-[11px] font-semibold text-[#1769E0] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {category.badge}
                  </span>
                </div>
                <p className="text-xs text-[#667085] max-w-md">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((tech, idx) => (
                  <TechCard key={idx} item={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
