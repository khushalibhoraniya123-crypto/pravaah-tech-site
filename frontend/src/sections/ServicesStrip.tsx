import React from 'react';
import { Globe, Sparkles, Palette, Cpu, Zap } from 'lucide-react';

const STRIP_ITEMS = [
  { label: 'WEB DEVELOPMENT', icon: Globe },
  { label: 'AI SOLUTIONS', icon: Sparkles },
  { label: 'UI/UX DESIGN', icon: Palette },
  { label: 'CUSTOM SOFTWARE', icon: Cpu },
  { label: 'AUTOMATION', icon: Zap },
];

export const ServicesStrip: React.FC = () => {
  // 4 repetitions create two perfectly identical halves for seamless infinite looping
  const marqueeItems = [...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS, ...STRIP_ITEMS];

  return (
    <section className="relative z-20 py-2.5 sm:py-3 bg-[#07152F] text-white border-y border-[#112952] overflow-hidden shadow-inner select-none">
      {/* Edge fade gradients for polished visual entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 xs:w-8 sm:w-16 bg-gradient-to-r from-[#07152F] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 xs:w-8 sm:w-16 bg-gradient-to-l from-[#07152F] to-transparent z-10" />

      {/* Infinite Marquee Strip */}
      <div className="flex w-full overflow-hidden">
        <div className="flex items-center gap-5 sm:gap-8 shrink-0 animate-marquee-infinite py-0.5">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-5 sm:gap-8 shrink-0">
                <div className="flex items-center gap-2 shrink-0 group cursor-default">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#1769E0] group-hover:text-white transition-all duration-300">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* Separator dot */}
                <span className="text-[#9B7BFF] font-bold text-xs shrink-0 select-none">
                  •
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
