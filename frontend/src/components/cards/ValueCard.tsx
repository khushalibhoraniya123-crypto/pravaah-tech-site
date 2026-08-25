import React from 'react';
import { Lightbulb, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import type { ValueItem } from '../../types';

interface ValueCardProps {
  item: ValueItem;
}

const VALUE_ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb,
  Users,
  ShieldCheck,
  TrendingUp,
};

export const ValueCard: React.FC<ValueCardProps> = ({ item }) => {
  const IconComponent = VALUE_ICON_MAP[item.iconName] || Lightbulb;

  return (
    <div className="group relative rounded-3xl bg-white/85 backdrop-blur-xl p-8 border border-[#E4E7EC] shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Decorative Accent Glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.accentColor} opacity-5 rounded-full blur-2xl group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`} />

      <div>
        {/* Top Header: Number and Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-2xl font-black tracking-tight text-slate-300 group-hover:text-[#1769E0] transition-colors">
            {item.number}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 text-[#0B1B3A] group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-1.5">
          {item.title}
        </h3>
        <p className="text-xs font-semibold text-[#6C3FE8] uppercase tracking-wider mb-3.5">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-[#667085] leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#1769E0] group-hover:scale-125 transition-transform" />
        <span className="text-xs font-semibold text-[#334155] uppercase tracking-wider">Pravaah Standard</span>
      </div>
    </div>
  );
};
