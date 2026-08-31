"use client";

import React, { useState } from 'react';
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
  Cloud, 
  Box, 
  GitBranch, 
  Sparkles,
  Layers
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  categoryLabel: string;
  categoryColor: string;
  iconName: string;
  iconColor: string;
  x: number; // percentage from left
  y: number; // percentage from top
  dotColor: string;
}

const CONSTELLATION_NODES: TechNode[] = [
  // Top-Left: React.js
  { 
    id: 'react', 
    name: 'React.js', 
    category: 'frontend', 
    categoryLabel: 'FRONTEND', 
    categoryColor: '#00D2FF',
    iconName: 'Atom', 
    iconColor: '#00D2FF', 
    dotColor: '#00D2FF', 
    x: 32, 
    y: 16 
  },
  // Mid-Left: Next.js
  { 
    id: 'nextjs', 
    name: 'Next.js', 
    category: 'frontend', 
    categoryLabel: 'FRONTEND', 
    categoryColor: '#00D2FF',
    iconName: 'Globe', 
    iconColor: '#0B1B3A', 
    dotColor: '#00D2FF', 
    x: 16, 
    y: 42 
  },
  // Center-Left: JavaScript
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    category: 'frontend', 
    categoryLabel: 'FRONTEND', 
    categoryColor: '#00D2FF',
    iconName: 'FileCode2', 
    iconColor: '#EAB308', 
    dotColor: '#00D2FF', 
    x: 38, 
    y: 35 
  },
  // Bottom-Left Outer: Tailwind CSS
  { 
    id: 'tailwind', 
    name: 'Tailwind CSS', 
    category: 'frontend', 
    categoryLabel: 'FRONTEND', 
    categoryColor: '#00D2FF',
    iconName: 'Palette', 
    iconColor: '#38BDF8', 
    dotColor: '#00D2FF', 
    x: 15, 
    y: 72 
  },
  // Bottom-Left Inner: Python
  { 
    id: 'python', 
    name: 'Python', 
    category: 'backend', 
    categoryLabel: 'BACKEND', 
    categoryColor: '#10B981',
    iconName: 'Terminal', 
    iconColor: '#3776AB', 
    dotColor: '#10B981', 
    x: 33, 
    y: 68 
  },
  // Bottom-Left Center: TypeScript
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    category: 'frontend', 
    categoryLabel: 'FRONTEND', 
    categoryColor: '#00D2FF',
    iconName: 'Code2', 
    iconColor: '#3178C6', 
    dotColor: '#00D2FF', 
    x: 44, 
    y: 86 
  },
  // Bottom-Right Center: PHP
  { 
    id: 'php', 
    name: 'PHP', 
    category: 'backend', 
    categoryLabel: 'BACKEND', 
    categoryColor: '#10B981',
    iconName: 'Server', 
    iconColor: '#777BB4', 
    dotColor: '#10B981', 
    x: 58, 
    y: 86 
  },
  // Bottom-Right Outer: Node.js
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    category: 'backend', 
    categoryLabel: 'BACKEND', 
    categoryColor: '#10B981',
    iconName: 'Server', 
    iconColor: '#5FA04E', 
    dotColor: '#10B981', 
    x: 74, 
    y: 86 
  },
  // Bottom-Right Mid: MongoDB
  { 
    id: 'mongodb', 
    name: 'MongoDB', 
    category: 'database', 
    categoryLabel: 'DATABASE', 
    categoryColor: '#F59E0B',
    iconName: 'HardDrive', 
    iconColor: '#47A248', 
    dotColor: '#F59E0B', 
    x: 70, 
    y: 68 
  },
  // Center-Right Inner: GitHub CI/CD
  { 
    id: 'github', 
    name: 'GitHub CI/CD', 
    category: 'cloud', 
    categoryLabel: 'CLOUD', 
    categoryColor: '#1769E0',
    iconName: 'GitBranch', 
    iconColor: '#2088FF', 
    dotColor: '#1769E0', 
    x: 73, 
    y: 50 
  },
  // Far-Right: Docker
  { 
    id: 'docker', 
    name: 'Docker', 
    category: 'cloud', 
    categoryLabel: 'CLOUD', 
    categoryColor: '#1769E0',
    iconName: 'Box', 
    iconColor: '#2496ED', 
    dotColor: '#1769E0', 
    x: 88, 
    y: 50 
  },
  // Top-Right Mid: AWS Cloud
  { 
    id: 'aws', 
    name: 'AWS Cloud', 
    category: 'cloud', 
    categoryLabel: 'CLOUD', 
    categoryColor: '#1769E0',
    iconName: 'Cloud', 
    iconColor: '#FF9900', 
    dotColor: '#1769E0', 
    x: 79, 
    y: 30 
  },
  // Top-Right High: OpenAI / LLMs
  { 
    id: 'openai', 
    name: 'OpenAI / LLMs', 
    category: 'ai', 
    categoryLabel: 'AI & TOOLS', 
    categoryColor: '#9333EA',
    iconName: 'Sparkles', 
    iconColor: '#10A37F', 
    dotColor: '#9333EA', 
    x: 69, 
    y: 16 
  },
];

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Technologies', count: 13 },
  { id: 'frontend', label: 'Frontend & UI', count: 5 },
  { id: 'backend', label: 'Backend & APIs', count: 3 },
  { id: 'database', label: 'Databases', count: 1 },
  { id: 'cloud', label: 'Cloud & DevOps', count: 3 },
  { id: 'ai', label: 'AI & Tools', count: 1 },
];

const ICON_MAP: Record<string, React.ElementType> = {
  Atom,
  Globe,
  Code2,
  FileCode2,
  Palette,
  Server,
  Terminal,
  Database,
  HardDrive,
  Cloud,
  Box,
  GitBranch,
  Sparkles,
  Layers,
};

export const TechSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Exact focal center coordinate of the Pravaah logo emblem on the canvas
  const centerX = 55;
  const centerY = 48;

  return (
    <section id="technologies" className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-[#EBF3FC] via-[#F4F1FD]/60 to-[#E8F1FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1769E0]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#6638E8]/12 rounded-full blur-3xl pointer-events-none" />
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

          {/* Right Panel: Prominently Boxed Visual Constellation Canvas (8.5 cols) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <Reveal direction="left" duration={700}>
              <div className="relative rounded-[36px] bg-white/90 backdrop-blur-xl border border-[#D5E3F5] shadow-[0_12px_44px_rgba(23,105,224,0.12)] p-6 sm:p-10 min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center overflow-hidden">
                
                {/* Background Tech Grid & Ambient Glow */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

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
                        stroke={isHovered ? '#1769E0' : isMatched ? '#94A3B8' : '#CBD5E1'}
                        strokeWidth={isHovered ? '2.4' : '1.2'}
                        strokeDasharray={isHovered ? 'none' : '3 4'}
                        strokeOpacity={isMatched ? (isHovered ? '0.95' : '0.45') : '0.12'}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                {/* Center Core: Exact Official Pravaah Emblem Image & Glowing Aura */}
                <div 
                  className="absolute hidden sm:flex items-center justify-center pointer-events-none select-none z-20"
                  style={{
                    left: `${centerX}%`,
                    top: `${centerY}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative w-60 sm:w-72 md:w-84 h-36 sm:h-44 md:h-48 flex items-center justify-center">
                    {/* Ambient Radial Glowing Aura */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/25 via-blue-500/20 to-purple-500/25 rounded-full blur-3xl animate-pulse" />
                    
                    {/* Exact Official Pravaah Emblem Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="/logo/emblem.png" 
                      alt="Pravaah Technology Emblem" 
                      className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(23,105,224,0.35)] relative z-10 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Constellation Nodes (Desktop absolute positioning / Mobile responsive grid) */}
                
                {/* Desktop View: Well-Spaced Non-Overlapping Constellation Layout */}
                <div className="relative w-full h-[540px] hidden sm:block z-30">
                  {CONSTELLATION_NODES.map((node) => {
                    const isMatched = activeFilter === 'all' || activeFilter === node.category;
                    const isHovered = hoveredNodeId === node.id;
                    const IconComponent = ICON_MAP[node.iconName] || Code2;

                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                          isMatched 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-20 scale-90 grayscale'
                        } ${isHovered ? 'scale-110 z-40' : 'z-20'}`}
                        style={{
                          left: `${node.x}%`,
                          top: `${node.y}%`,
                        }}
                      >
                        <div className={`px-3.5 py-2 rounded-2xl bg-white border transition-all duration-300 flex items-center gap-2.5 shadow-soft ${
                          isHovered
                            ? 'border-[#1769E0] shadow-[0_8px_24px_rgba(23,105,224,0.25)] ring-2 ring-[#1769E0]/25'
                            : isMatched && activeFilter !== 'all'
                            ? 'border-[#1769E0]/70 ring-2 ring-[#1769E0]/15'
                            : 'border-[#D6E3F4] hover:border-[#1769E0]/40'
                        }`}>
                          {/* Technology Brand Icon */}
                          <div 
                            className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0"
                            style={{ color: node.iconColor }}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>

                          {/* Technology Name & Category Label */}
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
                            <span 
                              className="text-[9px] font-bold tracking-wider uppercase"
                              style={{ color: node.categoryColor }}
                            >
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
                    const IconComponent = ICON_MAP[node.iconName] || Code2;

                    if (!isMatched && activeFilter !== 'all') return null;

                    return (
                      <div
                        key={node.id}
                        className="p-3 rounded-2xl bg-white border border-[#D6E3F4] shadow-xs flex items-center gap-2.5"
                      >
                        <div 
                          className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0"
                          style={{ color: node.iconColor }}
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
                          <span 
                            className="text-[9px] font-bold uppercase"
                            style={{ color: node.categoryColor }}
                          >
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
