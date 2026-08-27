import React from 'react';
import { Badge } from '../components/common/Badge';
import { ValueCard } from '../components/cards/ValueCard';
import { VALUES_DATA } from '../data/values';

export const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple">OUR CORE VALUES</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#081A3A] tracking-tight">
            Principles That Drive <span className="gradient-text-blue-purple">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Every project we undertake is governed by foundational standards of innovation, client alignment, and craftsmanship.
          </p>
        </div>

        {/* 4 Premium Glassmorphism Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUES_DATA.map((value) => (
            <ValueCard key={value.number} item={value} />
          ))}
        </div>

      </div>
    </section>
  );
};
