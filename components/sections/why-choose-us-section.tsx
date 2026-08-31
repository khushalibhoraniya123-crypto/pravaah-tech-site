"use client";

import React from 'react';
import { 
  Award, 
  Globe, 
  Users, 
  Layers 
} from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface WhyChooseUsSectionProps {
  onConsult?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onConsult }) => {
  const CARDS = [
    {
      num: '01',
      title: 'Expert Team',
      desc: 'A passionate team of designers, developers and strategists brings practical expertise to every project.',
      icon: Award,
      iconBg: 'bg-blue-50 border-blue-100 text-[#2563EB]',
    },
    {
      num: '02',
      title: 'Flexible Collaboration',
      desc: 'We adapt to your tools, workflows and communication style to keep every project aligned.',
      icon: Globe,
      iconBg: 'bg-cyan-50 border-cyan-100 text-[#0284C7]',
    },
    {
      num: '03',
      title: 'Client-Centric',
      desc: 'We work as your technology partner, understanding your goals and building around your real business needs.',
      icon: Users,
      iconBg: 'bg-purple-50 border-purple-100 text-[#7C3AED]',
    },
    {
      num: '04',
      title: 'Full-Stack Expertise',
      desc: 'From frontend and backend to mobile, cloud and modern technologies, we handle the complete digital stack.',
      icon: Layers,
      iconBg: 'bg-indigo-50 border-indigo-100 text-[#4F46E5]',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F7FAFE] to-[#EDF4FC] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1769E0]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#6638E8]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Far Left Ambient Floating Logo Mark */}
      <div className="absolute top-1/3 left-4 pointer-events-none select-none opacity-80 hidden xl:block animate-float-slow">
        <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#D5E3F5] shadow-xs flex items-center justify-center p-1.5 backdrop-blur-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/emblem.png" alt="Pravaah" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Centered Section Header Matching Reference Screenshot */}
        <Reveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[#7C3AED] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span>WHY PRAVAAH</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0B1B3A] tracking-[-0.02em] leading-tight">
              Why Businesses Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]">
                Pravaah
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">
                Technology
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
              We combine technology, creativity and business thinking to build digital solutions that create lasting value.
            </p>
          </div>
        </Reveal>

        {/* 2. 4 Feature Cards Grid with Background Connecting Wave */}
        <div className="relative mb-14 sm:mb-18">
          
          {/* Background Connecting Dotted Wave Line */}
          <svg className="absolute top-1/2 left-0 right-0 w-full h-24 -translate-y-1/2 pointer-events-none opacity-40 hidden lg:block" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 50 C 300 20, 600 80, 900 30 C 1050 5, 1150 40, 1200 50" stroke="#93C5FD" strokeWidth="2" strokeDasharray="6 8" />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10">
            {CARDS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.num} delay={idx * 80} direction="up">
                  <div className="group rounded-[28px] bg-white border border-[#E2E8F0] p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(23,105,224,0.08)] hover:border-[#1769E0]/40 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px] hover:-translate-y-1.5 cursor-default">
                    
                    <div>
                      {/* Card Top: Number & Soft Dot */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {item.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#1769E0] transition-colors" />
                      </div>

                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-2.5">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#667085] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Statement Matching Reference */}
        <Reveal direction="up" delay={120}>
          <div className="text-center space-y-1.5">
            <h4 className="text-base sm:text-lg font-extrabold text-[#0B1B3A]">
              Technology that flows with your business.
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#667085] tracking-widest uppercase">
              INNOVATION • COLLABORATION • QUALITY • GROWTH
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
