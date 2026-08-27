"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { SolutionCard } from '@/components/cards/solution-card';
import { SOLUTIONS_DATA } from '@/data/solutions';
import type { SolutionItem } from '@/types';

interface SolutionsSectionProps {
  onConsultSolution?: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onConsultSolution }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'enterprise' | 'industry'>('all');

  const filteredSolutions = SOLUTIONS_DATA.filter((item) => {
    if (activeFilter === 'enterprise') {
      return ['business-automation', 'crm-solutions', 'erp-solutions', 'inventory-management', 'ai-powered-solutions'].includes(item.id);
    }
    if (activeFilter === 'industry') {
      return ['ecommerce-solutions', 'restaurant-management', 'healthcare-solutions', 'education-solutions', 'finance-solutions'].includes(item.id);
    }
    return true;
  });

  const handleConsult = (solution: SolutionItem) => {
    if (onConsultSolution) {
      onConsultSolution(solution.title);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="purple">INDUSTRY SOLUTIONS</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Tailored Solutions for <span className="gradient-text-blue-purple">Modern Enterprises</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Pre-architected, highly adaptable enterprise solutions designed to solve critical operational challenges and accelerate revenue.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {[
            { label: 'All Solutions (10)', value: 'all' },
            { label: 'Enterprise Systems', value: 'enterprise' },
            { label: 'Industry Verticals', value: 'industry' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as 'all' | 'enterprise' | 'industry')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-[#0B1B3A] text-white shadow-soft'
                  : 'bg-slate-100 text-[#667085] hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 10 Business Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onConsult={handleConsult}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
