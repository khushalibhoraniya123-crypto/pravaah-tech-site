"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { WHY_CHOOSE_US_DATA } from '@/data/whyChooseUs';
import { 
  Users, 
  Cpu, 
  Layers, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

const WHY_ICON_MAP: Record<string, React.ElementType> = {
  Users,
  Cpu,
  Layers,
  Clock,
  Sparkles,
  ShieldCheck,
};

interface WhyChooseUsSectionProps {
  onConsult?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onConsult }) => {
  return (
    <section id="why-us" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#EBF3FD] via-[#F5F2FE]/60 to-[#E8F1FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <Badge variant="blue">WHY PRAVAAH</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Why Businesses Choose <span className="gradient-text-blue-purple">Pravaah Technology</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              We combine enterprise-grade technical engineering with obsessive attention to design detail, speed, and business outcomes.
            </p>
          </div>
        </Reveal>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const IconComponent = WHY_ICON_MAP[item.iconName] || Sparkles;

            return (
              <Reveal key={item.id} delay={idx * 75} direction="up">
                <div className="group relative rounded-3xl bg-white/95 backdrop-blur-md p-7 sm:p-8 border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 h-full overflow-hidden cursor-default">
                  {/* Top Animated Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] to-[#6638E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100/80 text-[#1769E0] group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 flex items-center justify-center p-3 shadow-xs">
                        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      <Badge variant="purple" size="sm">
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6638E8] mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-[#667085] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Points checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-100 mb-2">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs text-[#334155] font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer note */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1769E0] group-hover:text-[#6638E8] transition-colors mt-4">
                    <span>Enterprise Standard</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Statement Matching Reference */}
        <Reveal direction="up" delay={120}>
          <div className="mt-12 sm:mt-16 text-center space-y-2 pt-8 border-t border-[#D6E3F4]/80">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1B3A]">
              Technology that flows with your business.
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#6638E8] tracking-wide">
              Innovation • Collaboration • Quality • Growth
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
