import React from 'react';
import { 
  Atom, 
  Globe, 
  Code2, 
  FileCode2, 
  Palette, 
  Server, 
  Layers, 
  Terminal, 
  Shield, 
  Cpu, 
  Database, 
  HardDrive, 
  Table, 
  Zap, 
  Cloud, 
  Box, 
  GitBranch, 
  Workflow, 
  Sparkles, 
  BrainCircuit, 
  Wand2, 
  Bot 
} from 'lucide-react';

const TECH_ICON_MAP: Record<string, React.ElementType> = {
  Atom,
  Globe,
  Code2,
  FileCode2,
  Palette,
  Server,
  Layers,
  Terminal,
  Shield,
  Cpu,
  Database,
  HardDrive,
  Table,
  Zap,
  Cloud,
  Box,
  GitBranch,
  Workflow,
  Sparkles,
  BrainCircuit,
  Wand2,
  Bot,
};

interface TechCardProps {
  item: {
    name: string;
    description: string;
    icon: string;
    highlight: string;
    color: string;
  };
}

export const TechCard: React.FC<TechCardProps> = ({ item }) => {
  const IconComponent = TECH_ICON_MAP[item.icon] || Code2;

  return (
    <div className="group rounded-2xl bg-white p-5 border border-[#E4E7EC] shadow-soft hover:shadow-medium hover:border-[#1769E0]/40 transition-all duration-300 flex items-start gap-4">
      {/* Icon */}
      <div 
        className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 text-[#0B1B3A] group-hover:scale-105 group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300"
      >
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-base font-bold text-[#0B1B3A] truncate">{item.name}</h4>
          <span className="text-[10px] font-semibold text-[#1769E0] bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap">
            {item.highlight}
          </span>
        </div>
        <p className="text-xs text-[#667085] leading-snug">
          {item.description}
        </p>
      </div>
    </div>
  );
};
