"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/ui/reveal';
import { 
  Atom, 
  Globe, 
  Code2, 
  FileCode2, 
  Palette, 
  Server, 
  Terminal, 
  Database, 
  HardDrive, 
  Zap, 
  Cloud, 
  Box, 
  GitBranch, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  categoryLabel: string;
  iconName: string;
  color: string;
  // Positioning coordinates on the constellation canvas (percentage of canvas width/height)
  x: number; // percentage from left
  y: number; // percentage from top
  dotColor: string;
}

const CONSTELLATION_NODES: TechNode[] = [
  // Frontend
  { id: 'react', name: 'React.js', category: 'frontend', categoryLabel: 'FRONTEND', iconName: 'Atom', color: '#00D2FF', dotColor: '#00D2FF', x: 40, y: 22 },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', categoryLabel: 'FRONTEND', iconName: 'Globe', color: '#0B1B3A', dotColor: '#00D2FF', x: 33, y: 46 },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', categoryLabel: 'FRONTEND', iconName: 'FileCode2', color: '#F7DF1E', dotColor: '#00D2FF', x: 47, y: 38 },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', categoryLabel: 'FRONTEND', iconName: 'Code2', color: '#3178C6', dotColor: '#00D2FF', x: 46, y: 76 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', categoryLabel: 'FRONTEND', iconName: 'Palette', color: '#38BDF8', dotColor: '#00D2FF', x: 31, y: 62 },

  // Backend
  { id: 'python', name: 'Python', category: 'backend', categoryLabel: 'BACKEND', iconName: 'Terminal', color: '#3776AB', dotColor: '#10B981', x: 40, y: 68 },
  { id: 'php', name: 'PHP', category: 'backend', categoryLabel: 'BACKEND', iconName: 'Server', color: '#777BB4', dotColor: '#10B981', x: 60, y: 77 },
  { id: 'nodejs', name: 'Node.js', category: 'backend', categoryLabel: 'BACKEND', iconName: 'Server', color: '#5FA04E', dotColor: '#10B981', x: 72, y: 77 },

  // Database
  { id: 'mongodb', name: 'MongoDB', category: 'database', categoryLabel: 'DATABASE', iconName: 'HardDrive', color: '#47A248', dotColor: '#F59E0B', x: 68, y: 68 },

  // Cloud & DevOps
  { id: 'aws', name: 'AWS Cloud', category: 'cloud', categoryLabel: 'CLOUD', iconName: 'Cloud', color: '#FF9900', dotColor: '#1769E0', x: 76, y: 32 },
  { id: 'github', name: 'GitHub CI/CD', category: 'cloud', categoryLabel: 'CLOUD', iconName: 'GitBranch', color: '#2088FF', dotColor: '#1769E0', x: 73, y: 55 },
  { id: 'docker', name: 'Docker', category: 'cloud', categoryLabel: 'CLOUD', iconName: 'Box', color: '#2496ED', dotColor: '#1769E0', x: 84, y: 54 },

  // AI & Tools
  { id: 'openai', name: 'OpenAI / LLMs', category: 'ai', categoryLabel: 'AI & TOOLS', iconName: 'Sparkles', color: '#10A37F', dotColor: '#9333EA', x: 69, y: 22 },
];

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Technologies', count: 13 },
  { id: 'frontend', label: 'Frontend & UI', count: 5 },
  { id: 'backend', label: 'Backend & APIs', count: 3 },
  { id: 'database', label: 'Databases', count: 1 },
  { id: 'cloud', label: 'Cloud & DevOps', count: 3 },
  { id: 'ai', label: 'AI & Tools', count: 1 },
];

const ICON_COMPONENTS: Record<string, React.ElementType> = {
  Atom,
  Globe,
  Code2,
  FileCode2,
  Palette,
  Server,
  Terminal,
  Database,
  HardDrive,
  Zap,
  Cloud,
  Box,
  GitBranch,
  Sparkles,
  Layers,
  Cpu,
};

export const TechSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Center coordinate of the Pravaah logo emblem on canvas
  const centerX = 59;
  const centerY = 50;

  return (
    <section id="technologies" className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#EAF2FC] via-[#F6F2FE]/60 to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Header Section Matching Reference */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-xs">
              <span>TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
              Powered by Modern <span className="gradient-text-blue-purple">Technology</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto">
              We architect and build reliable, high-performance solutions with proven and emerging modern tools.
            </p>
          </div>
        </Reveal>

        {/* 2. Interactive Matrix & Side Filter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Panel: Filter Categories Side Box (3.5 cols) */}
          <div className="lg:col-span-4 xl:col-span-3">
            <Reveal direction="right" duration={700}>
              <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-5 sm:p-6 space-y-3">
                {/* Header with Title & Count */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5EEF9]">
                  <span className="text-[11px] font-bold tracking-wider text-[#667085] uppercase">
                    FILTER CATEGORIES
                  </span>
                  <span className="text-xs font-bold text-[#667085]">
                    ({CONSTELLATION_NODES.length})
                  </span>
                </div>

                {/* Filter Category Buttons List */}
                <div className="space-y-1.5 pt-1">
                  {FILTER_CATEGORIES.map((cat) => {
                    const isActive = activeFilter === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveFilter(cat.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#0B1B3A] text-white shadow-soft font-bold'
                            : 'text-[#334155] hover:bg-slate-50 hover:text-[#0B1B3A]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                          )}
                          <span>{cat.label}</span>
                        </div>

                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-slate-100 text-[#667085]'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Panel: Interactive Visual Constellation Canvas (8.5 cols) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <Reveal direction="left" duration={700}>
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-10 min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center overflow-hidden">
                
                {/* Background Tech Circuit Grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1769E0]/8 rounded-full blur-3xl pointer-events-none" />

                {/* SVG Connecting Dotted Lines from Center to Each Node */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block">
                  {CONSTELLATION_NODES.map((node) => {
                    const isMatched = activeFilter === 'all' || activeFilter === node.category;
                    const isHovered = hoveredNodeId === node.id;
                    return (
                      <line
                        key={node.id}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${centerX}%`}
                        y2={`${centerY}%`}
                        stroke={isHovered ? '#1769E0' : isMatched ? '#CBD5E1' : '#E2E8F0'}
                        strokeWidth={isHovered ? '2' : '1.2'}
                        strokeDasharray={isHovered ? 'none' : '3 4'}
                        strokeOpacity={isMatched ? (isHovered ? '0.9' : '0.55') : '0.15'}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Center Core: Official Pravaah Flowing Wave Emblem */}
                <div 
                  className="absolute hidden sm:flex items-center justify-center pointer-events-none select-none z-20"
                  style={{
                    left: `${centerX}%`,
                    top: `${centerY}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative w-36 h-24 sm:w-44 sm:h-28 flex items-center justify-center">
                    <img
                      src="/logo/Logo Horizontal Dark Transparent.png"
                      alt="Pravaah Core"
                      className="w-full h-full object-contain object-left scale-[1.35] filter drop-shadow-[0_4px_16px_rgba(23,105,224,0.3)] animate-pulse-subtle"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Constellation Nodes (Desktop absolute positioning / Mobile responsive grid) */}
                
                {/* Desktop View: Constellation Layout matching reference */}
                <div className="relative w-full h-[520px] hidden sm:block z-30">
                  {CONSTELLATION_NODES.map((node) => {
                    const isMatched = activeFilter === 'all' || activeFilter === node.category;
                    const isHovered = hoveredNodeId === node.id;
                    const IconComponent = ICON_COMPONENTS[node.iconName] || Code2;

                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                          isMatched 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-25 scale-90 grayscale'
                        } ${isHovered ? 'scale-110 z-40' : 'z-20'}`}
                        style={{
                          left: `${node.x}%`,
                          top: `${node.y}%`,
                        }}
                      >
                        <div className={`px-3.5 py-2 rounded-2xl bg-white border transition-all duration-300 flex items-center gap-2.5 shadow-soft ${
                          isHovered
                            ? 'border-[#1769E0] shadow-[0_6px_20px_rgba(23,105,224,0.25)] ring-2 ring-[#1769E0]/20'
                            : isMatched && activeFilter !== 'all'
                            ? 'border-[#1769E0]/60 ring-2 ring-[#1769E0]/15'
                            : 'border-[#D6E3F4] hover:border-[#1769E0]/40'
                        }`}>
                          {/* Icon */}
                          <div 
                            className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0"
                            style={{ color: node.color }}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>

                          {/* Info */}
                          <div className="flex flex-col text-left">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-[#0B1B3A] whitespace-nowrap">
                                {node.name}
                              </span>
                              <span 
                                className="w-1.5 h-1.5 rounded-full" 
                                style={{ backgroundColor: node.dotColor }}
                              />
                            </div>
                            <span className="text-[9px] font-bold text-[#667085] tracking-wider uppercase">
                              {node.categoryLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile View: Clean Responsive Node Grid */}
                <div className="grid grid-cols-2 gap-3 w-full sm:hidden z-30">
                  {CONSTELLATION_NODES.map((node) => {
                    const isMatched = activeFilter === 'all' || activeFilter === node.category;
                    const IconComponent = ICON_COMPONENTS[node.iconName] || Code2;

                    if (!isMatched && activeFilter !== 'all') return null;

                    return (
                      <div
                        key={node.id}
                        className="p-3 rounded-2xl bg-white border border-[#D6E3F4] shadow-xs flex items-center gap-2.5"
                      >
                        <div 
                          className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0"
                          style={{ color: node.color }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-[#0B1B3A] truncate">
                              {node.name}
                            </span>
                            <span 
                              className="w-1.5 h-1.5 rounded-full shrink-0" 
                              style={{ backgroundColor: node.dotColor }}
                            />
                          </div>
                          <span className="text-[9px] font-bold text-[#667085] uppercase">
                            {node.categoryLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
