import React from 'react';
import { Globe, Sparkles, Palette, Cpu, Zap } from 'lucide-react';

const STRIP_ITEMS = [
  { label: 'WEB DEVELOPMENT', icon: Globe },
  { label: 'AI SOLUTIONS', icon: Sparkles },
  { label: 'UI/UX DESIGN', icon: Palette },
  { label: 'SOFTWARE', icon: Cpu },
  { label: 'AUTOMATION', icon: Zap },
];

export const ServicesStrip: React.FC = () => {
  return (
    <section className="relative z-20 py-4 bg-[#07152F] text-white border-y border-[#112952] overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop / Tablet Horizontal Strip */}
        <div className="hidden sm:flex items-center justify-between gap-4 overflow-x-auto py-2 scrollbar-none">
          {STRIP_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                <div className="flex items-center gap-2.5 shrink-0 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#1769E0] group-hover:text-white transition-all duration-300">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-200 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>

                {index < STRIP_ITEMS.length - 1 && (
                  <span className="text-[#9B7BFF] font-bold text-xs shrink-0 select-none">
                    •
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Animated Ticker / Horizontally Scrollable Bar */}
        <div className="sm:hidden flex items-center gap-6 overflow-x-auto py-1.5 scrollbar-none whitespace-nowrap">
          {STRIP_ITEMS.concat(STRIP_ITEMS).map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-xs font-bold tracking-widest text-slate-200">
                  {item.label}
                </span>
                <span className="text-[#9B7BFF] text-xs ml-3">•</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
