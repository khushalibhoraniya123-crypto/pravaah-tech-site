"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cpu, 
  Sparkles, 
  Server, 
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Activity,
  Layers,
  Zap,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SERVICES_DATA } from '@/data/services';
import type { ServiceItem } from '@/types';
import { Reveal } from '@/components/ui/reveal';

import { ParticleBackground } from '@/components/ui/particle-background';

const SERVICE_ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Sparkles,
  Server,
};

interface ServicesSectionProps {
  onStartInquiryWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartInquiryWithService }) => {
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];
  const ActiveIcon = SERVICE_ICON_MAP[activeService.iconName] || Globe;

  // Orbit node layout coordinates for desktop (6 nodes around central core in degrees)
  // Angles: [ -150, -90, -30, 30, 90, 150 ] or symmetrical 60 deg increments
  const NODE_POSITIONS = [
    { id: 'web-development', angle: 300, labelPos: 'top-left' },
    { id: 'app-development', angle: 0, labelPos: 'top-center' },
    { id: 'ui-ux-design', angle: 60, labelPos: 'top-right' },
    { id: 'software-solutions', angle: 120, labelPos: 'bottom-right' },
    { id: 'ai-solutions', angle: 180, labelPos: 'bottom-center' },
    { id: 'digital-transformation', angle: 240, labelPos: 'bottom-left' },
  ];

  return (
    <section id="services" className="relative bg-dark-cosmos text-white py-16 sm:py-20 md:py-24 overflow-hidden border-b border-[#0E2856]">
      {/* Subtle floating particles background */}
      <ParticleBackground particleCount={32} />

      {/* Ambient background glows, geometric circuits & dark tech grid */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1769E0]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#6638E8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid-dark opacity-60 pointer-events-none" />
      
      {/* Soft geometric background vector lines for visual depth */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1769E0" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6638E8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M0,120 Q350,180 700,100 T1400,150" fill="none" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="6 8" />
        <path d="M0,450 Q400,380 800,480 T1600,420" fill="none" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Services Hero Header */}
        <Reveal direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-sm shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>THE DIGITAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Technology Services Built <br className="hidden sm:inline" />
              <span className="gradient-text-blue-purple">Around Your Business.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Hover or tap any service satellite below to explore how our unified engineering ecosystem powers your digital transformation.
            </p>
          </div>
        </Reveal>

        {/* 2. Desktop Interactive Digital Ecosystem Orbit (Large Screen) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[540px] mb-12 select-none">
          
          {/* SVG Connection Lines & Orbit Rings */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1769E0" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#6638E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="activeLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D2FF" />
                <stop offset="100%" stopColor="#6638E8" />
              </linearGradient>
            </defs>

            {/* Concentric Orbit Rings */}
            <circle cx="50%" cy="50%" r="220" fill="none" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-40 animate-spin-slow origin-center" />
            <circle cx="50%" cy="50%" r="140" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {/* Connecting Rays from Center to 6 Satellite Nodes */}
            {SERVICES_DATA.map((srv, idx) => {
              const angleRad = (idx * 60 - 90) * (Math.PI / 180);
              const x2 = 50 + 40 * Math.cos(angleRad);
              const y2 = 50 + 40 * Math.sin(angleRad);
              const isActive = srv.id === activeService.id;

              return (
                <line
                  key={srv.id}
                  x1="50%"
                  y1="50%"
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={isActive ? 'url(#activeLine)' : 'rgba(255,255,255,0.12)'}
                  strokeWidth={isActive ? '2.5' : '1'}
                  strokeDasharray={isActive ? 'none' : '4 4'}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Central Digital Core Visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
            {/* Outer Rotating Energy Ring */}
            <div className="absolute w-44 h-44 rounded-full border border-cyan-400/30 animate-spin-slow pointer-events-none" />
            <div className="absolute w-52 h-52 rounded-full border border-purple-500/20 animate-reverse-spin pointer-events-none" />
            
            {/* Center Glowing Core */}
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#0B1B3A] via-[#06132D] to-[#1769E0]/40 border-2 border-cyan-400/40 p-4 flex flex-col items-center justify-center text-center shadow-glow-blue backdrop-blur-xl group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E0] to-[#6638E8] text-white flex items-center justify-center shadow-xs mb-1.5 animate-pulse-subtle">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
                PRAVAAH
              </span>
              <span className="text-xs font-black tracking-tight text-white uppercase">
                DIGITAL CORE
              </span>
              <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] text-[9px] font-mono border border-cyan-400/30">
                ACTIVE
              </div>
            </div>
          </div>

          {/* 6 Connected Floating Satellite Service Nodes */}
          {SERVICES_DATA.map((service, index) => {
            const SrvIcon = SERVICE_ICON_MAP[service.iconName] || Globe;
            const angleRad = (index * 60 - 90) * (Math.PI / 180);
            // Positions on a 220px radius circle within container
            const topPct = 50 + 38 * Math.sin(angleRad);
            const leftPct = 50 + 38 * Math.cos(angleRad);
            const isSelected = service.id === activeService.id;

            return (
              <div
                key={service.id}
                style={{ top: `${topPct}%`, left: `${leftPct}%` }}
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setActiveId(service.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              >
                {/* Node Pill / Orbit Chip */}
                <div className={`px-4 py-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-3 backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#0E2856] text-white border-cyan-400 shadow-glow-blue scale-110 ring-4 ring-cyan-400/20'
                    : 'bg-[#071739]/80 text-slate-300 border-white/15 hover:border-cyan-400/60 hover:bg-[#0B1B3A] hover:scale-105'
                }`}>
                  <span className={`font-mono text-xs font-bold ${
                    isSelected ? 'text-cyan-300' : 'text-slate-400 group-hover:text-cyan-300'
                  }`}>
                    {service.number}
                  </span>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-gradient-to-tr from-[#1769E0] to-[#6638E8] text-white'
                      : 'bg-white/5 text-slate-300 group-hover:text-white'
                  }`}>
                    <SrvIcon className="w-4 h-4" />
                  </div>

                  <div className="text-left">
                    <div className={`text-xs font-bold tracking-tight uppercase ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}>
                      {service.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Mobile / Tablet Responsive Layout (Orbit / Interactive Flow) */}
        <div className="lg:hidden mb-10 space-y-6">
          {/* Mobile Central Core Display */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0B1B3A] to-[#06132D] border border-cyan-400/30 text-center space-y-2 shadow-glow-blue relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1769E0] to-[#6638E8] text-white flex items-center justify-center mx-auto shadow-xs">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-wider">
              Pravaah Digital Core
            </h3>
            <p className="text-xs text-slate-300">
              Tap any connected service below to inspect capabilities & scope.
            </p>
          </div>

          {/* Mobile Service Selector Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {SERVICES_DATA.map((srv) => {
              const SrvIcon = SERVICE_ICON_MAP[srv.iconName] || Globe;
              const isSelected = srv.id === activeService.id;

              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveId(srv.id)}
                  className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E2856] text-white border-cyan-400 shadow-glow-blue scale-[1.02]'
                      : 'bg-[#071739]/90 text-slate-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {srv.number}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate text-white uppercase">
                      {srv.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Active Service Spotlight Detail Reveal (Clean Presentation) */}
        <Reveal direction="up" delay={100}>
          <div className="rounded-3xl bg-gradient-to-br from-[#071739]/95 via-[#091C3E]/95 to-[#06132D]/95 border border-white/20 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF]" />
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Service Identity & Narrative (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                    SERVICE {activeService.number}
                  </span>
                  <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-mono">
                    {activeService.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base text-cyan-200 font-semibold">
                  &ldquo;{activeService.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeService.fullDesc}
                </p>

                {/* Key Capabilities Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deployed Tech Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 mr-1">Stack:</span>
                  {activeService.technologies.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Side: Quick Action & Enterprise SLA Card (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#06132D] border border-white/15 shadow-elevated space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-mono font-bold">
                    <span>ENGINEERING GUARANTEE</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    High-Velocity Agile Delivery
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Every service engagement includes full IP ownership, comprehensive API documentation, automated test suites, and dedicated warranty support.
                  </p>
                  
                  {/* SLA Benchmark */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-300">{activeService.metrics[0].label}</span>
                    <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-mono">
                      {activeService.metrics[0].value}
                    </span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="space-y-2.5 pt-2">
                  <Link
                    href={`/services/${activeService.id}`}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-glow-blue hover:scale-[1.02]"
                  >
                    <span>Explore Full {activeService.title} Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onStartInquiryWithService?.(activeService.title)}
                    className="w-full py-2.5 px-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
