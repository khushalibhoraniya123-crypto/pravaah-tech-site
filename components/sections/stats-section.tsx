"use client";

import React from 'react';
import { getStatsData } from '@/data/stats';
import { CheckCircle2, Smile, Layers, Award } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const STATS_ICON_MAP: Record<string, React.ElementType> = {
  CheckCircle2,
  Smile,
  Layers,
  Award,
};

export const StatsSection: React.FC = () => {
  const stats = getStatsData();

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-[#EEF5FD] via-[#F6F2FE] to-[#EAF2FC] border-y border-[#D6E3F4] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = STATS_ICON_MAP[stat.iconName] || Award;
            return (
              <Reveal key={idx} delay={idx * 90} direction="up">
                <div
                  className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1.5 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#1769E0] group-hover:bg-gradient-to-tr group-hover:from-[#1769E0] group-hover:to-[#6638E8] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3 border border-blue-100/80 group-hover:scale-110 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight mb-1">
                    {stat.numberOnly !== undefined ? (
                      <AnimatedCounter
                        value={stat.numberOnly}
                        suffix={stat.suffix || ''}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm font-bold text-[#1769E0] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#667085] leading-snug">
                    {stat.description}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

