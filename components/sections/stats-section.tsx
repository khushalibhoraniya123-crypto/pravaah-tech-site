import React from 'react';
import { getStatsData } from '@/data/stats';
import { CheckCircle2, Smile, Layers, Award } from 'lucide-react';

const STATS_ICON_MAP: Record<string, React.ElementType> = {
  CheckCircle2,
  Smile,
  Layers,
  Award,
};

export const StatsSection: React.FC = () => {
  const stats = getStatsData();

  return (
    <section className="py-14 bg-[#FFFFFF] border-y border-[#E4E7EC] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = STATS_ICON_MAP[stat.iconName] || Award;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1769E0] group-hover:bg-[#1769E0] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3A] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#1769E0] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#667085] leading-snug">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
