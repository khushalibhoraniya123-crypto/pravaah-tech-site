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
  Sparkles
} from 'lucide-react';
import type { SolutionItem } from '../../types';

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
    <div className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-[#E4E7EC] shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Header Icon + Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-200/80 text-[#0B1B3A] group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 flex items-center justify-center p-3">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-semibold text-[#1769E0] bg-blue-50/80 border border-blue-200/60 px-3 py-1 rounded-full">
            {solution.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-2.5">
          {solution.title}
        </h3>
        
        <p className="text-sm text-[#667085] leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Feature points */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Capabilities</span>
          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {solution.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1769E0]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Benefit */}
        {solution.benefits && solution.benefits.length > 0 && (
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6 flex items-start gap-2 text-xs text-[#0B1B3A]">
            <Sparkles className="w-4 h-4 text-[#6C3FE8] shrink-0 mt-0.5" />
            <span className="font-medium">{solution.benefits[0]}</span>
          </div>
        )}
      </div>

      <button
        onClick={() => onConsult && onConsult(solution)}
        className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#1769E0] group-hover:text-[#6C3FE8] transition-colors cursor-pointer"
      >
        <span>Request Solution Consultation</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>
    </div>
  );
};
