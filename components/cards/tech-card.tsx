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
    <div className="relative p-[1.8px] rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(23,105,224,0.2)] cursor-default h-full">
      
      {/* 1. Soft Ambient Multi-Color Glow Layer */}
      <div 
        aria-hidden="true"
        className="absolute -inset-[180%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0_240deg,#00D2FF_280deg,#1769E0_310deg,#6638E8_335deg,#EC4899_355deg,#FFFFFF_360deg)] blur-md opacity-45 group-hover:opacity-85 pointer-events-none transition-opacity duration-300"
      />

      {/* 2. Moving Light Trail Around Exact Border */}
      <div 
        aria-hidden="true"
        className="absolute -inset-[180%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0_240deg,#00D2FF_280deg,#1769E0_310deg,#6638E8_335deg,#EC4899_355deg,#FFFFFF_360deg)] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* 3. Inner Card Content Frame */}
      <div className="relative rounded-[14.5px] bg-white/95 backdrop-blur-md p-5 flex items-start gap-4 h-full w-full shadow-soft transition-all duration-300 group-hover:bg-white">
        
        {/* Icon Container with Hover Scale & Rotation */}
        <div 
          className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100/80 flex items-center justify-center shrink-0 text-[#1769E0] group-hover:scale-110 group-hover:bg-[#0B1B3A] group-hover:text-white transition-all duration-300 shadow-xs group-hover:shadow-[0_0_16px_rgba(23,105,224,0.35)]"
        >
          <IconComponent className="w-6 h-6 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 group-hover:text-[#38BDF8]" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="text-base font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors truncate">
              {item.name}
            </h4>
            <span className="text-[10px] font-bold text-[#1769E0] bg-blue-50/90 border border-blue-100 px-2 py-0.5 rounded-full whitespace-nowrap group-hover:bg-blue-100/90 transition-colors">
              {item.highlight}
            </span>
          </div>
          <p className="text-xs text-[#667085] leading-relaxed">
            {item.description}
          </p>
        </div>

      </div>

    </div>
  );
};
