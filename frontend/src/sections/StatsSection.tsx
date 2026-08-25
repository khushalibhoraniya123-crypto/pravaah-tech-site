import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Smile, Layers, Award } from 'lucide-react';
import { getStatsData } from '../data/stats';
import type { StatItem } from '../types';

const STATS_ICON_MAP: Record<string, React.ElementType> = {
  CheckCircle2,
  Smile,
  Layers,
  Award,
};

// Counter animation component
const AnimatedCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const stats = getStatsData();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#07152F] via-[#0B1B3A] to-[#07152F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#6C3FE8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat: StatItem, idx: number) => {
            const Icon = STATS_ICON_MAP[stat.iconName] || CheckCircle2;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white flex items-center justify-center mb-4 shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text-blue-purple mb-1.5">
                  <AnimatedCounter target={stat.numberOnly} suffix={stat.suffix} />
                </div>

                <div className="text-sm sm:text-base font-bold text-white mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
