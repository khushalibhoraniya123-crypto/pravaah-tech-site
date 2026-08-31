"use client";

import React from 'react';
import { 
  Zap, 
  Users, 
  Layers, 
  ShoppingBag, 
  Boxes, 
  UtensilsCrossed, 
  HeartPulse, 
  GraduationCap, 
  TrendingUp, 
  Bot,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import type { SolutionItem } from '@/types';
import { Badge } from '@/components/ui/badge';

interface SolutionCardProps {
  solution: SolutionItem;
  onConsult?: (solution: SolutionItem) => void;
}

const SOLUTION_ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Users,
  Layers,
  ShoppingBag,
  Boxes,
  UtensilsCrossed,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Bot,
};

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, onConsult }) => {
  const IconComponent = SOLUTION_ICON_MAP[solution.iconName] || Layers;

  return (
    <div className="group relative rounded-3xl bg-white/95 backdrop-blur-md p-7 sm:p-8 border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden">
      {/* Subtle top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1769E0] to-[#6638E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div>
        {/* Header Icon + Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100 text-[#1769E0] group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 flex items-center justify-center p-3 shadow-xs">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <Badge variant="blue" size="sm">
            {solution.badge}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-2.5">
          {solution.title}
        </h3>
        
        <p className="text-sm text-[#667085] leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Feature points */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Capabilities</span>
          <div className="grid grid-cols-1 gap-2 pt-1">
            {solution.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1769E0] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Benefit */}
        {solution.benefits && solution.benefits.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100/80 mb-6 flex items-start gap-2 text-xs text-[#0B1B3A]">
            <Sparkles className="w-4 h-4 text-[#6638E8] shrink-0 mt-0.5" />
            <span className="font-semibold">{solution.benefits[0]}</span>
          </div>
        )}
      </div>

      <button
        onClick={() => onConsult && onConsult(solution)}
        className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#1769E0] group-hover:text-[#6638E8] transition-colors cursor-pointer"
      >
        <span>Request Solution Consultation</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
};

