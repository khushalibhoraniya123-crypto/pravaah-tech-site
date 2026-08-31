"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFE] to-[#F1F6FD] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1769E0]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#6638E8]/8 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* 1. Centered Section Header Matching Reference Screenshot */}
        <Reveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3F0FF] border border-[#DDD6FE] text-[#7C3AED] text-xs font-bold uppercase tracking-wider shadow-xs">
              <span>ABOUT US</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B3A] tracking-[-0.02em]">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Digital Solutions
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
              We combine technology, creativity and innovation to build digital experiences that make a real difference.
            </p>
          </div>
        </Reveal>

        {/* 2. Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Visual Image Card Frame (approx 5.5 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <Reveal direction="right" duration={700}>
              <div className="relative group">
                {/* Outer Card with Rounded Corners and Glowing Gradient Accent */}
                <div className="relative rounded-[32px] p-2.5 sm:p-3 bg-white border border-[#E2E8F0] shadow-[0_16px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                  
                  {/* Glowing Corner Accent Bar */}
                  <div className="absolute -bottom-1 -right-1 w-32 h-32 border-b-4 border-r-4 border-indigo-500 rounded-br-[32px] pointer-events-none" />
                  
                  {/* Workspace Image */}
                  <div className="relative rounded-[22px] overflow-hidden bg-[#06132D] aspect-[4/3] sm:aspect-[16/11]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/about-workspace.jpg"
                      alt="Pravaah Technology Team Workspace"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Subtle Gradient Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06132D]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & CTA (approx 6.5 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <Reveal direction="left" delay={120} duration={700}>
              <div className="space-y-6 text-left">
                
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
                  Who We Are
                </h3>

                {/* Paragraph 1 */}
                <p className="text-base sm:text-lg text-[#475467] leading-relaxed font-normal">
                  Pravaah Technologies is a technology and digital solutions company focused on helping businesses transform their ideas into modern, scalable and meaningful digital experiences. From websites and applications to UI/UX, software solutions, AI and automation, we combine creativity with technology to deliver solutions built around real business needs.
                </p>

                {/* Paragraph 2 */}
                <p className="text-base sm:text-lg text-[#475467] leading-relaxed font-normal">
                  Our approach is simple — understand the problem, create the right strategy, build with modern technology and deliver a solution that creates long-term value.
                </p>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onLearnMore}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B1528] hover:bg-[#1E293B] text-white text-sm sm:text-base font-bold shadow-[0_8px_24px_rgba(11,21,40,0.25)] hover:shadow-[0_12px_32px_rgba(11,21,40,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </button>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
