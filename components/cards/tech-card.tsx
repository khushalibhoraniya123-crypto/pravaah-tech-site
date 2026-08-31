"use client";

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
    <div className="group rounded-2xl bg-white/95 backdrop-blur-md p-5 border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/50 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 cursor-default">
      {/* Icon with hover glow and scale */}
      <div 
        className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100/80 flex items-center justify-center shrink-0 text-[#1769E0] group-hover:scale-110 group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 shadow-xs"
      >
        <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-base font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors truncate">{item.name}</h4>
          <span className="text-[10px] font-bold text-[#1769E0] bg-blue-50/90 border border-blue-100 px-2 py-0.5 rounded-full whitespace-nowrap">
            {item.highlight}
          </span>
        </div>
        <p className="text-xs text-[#667085] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

