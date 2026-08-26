import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-12 sm:py-14 md:py-16 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Subtle Wave Accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2 sm:space-y-2.5">
          <Badge variant="blue">ABOUT US</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
            Turning Ideas Into <span className="gradient-text-blue-purple">Digital Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            We combine technology, creativity and innovation to build digital experiences that make a real difference.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Abstract Tech Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] p-6 sm:p-7 text-white shadow-elevated border border-white/10 overflow-hidden">
              {/* Internal ambient glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#1769E0]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#6C3FE8]/30 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-4">
                {/* Brand Logo Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <Logo variant="light" height={32} />
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#38BDF8] border border-white/10 px-2.5 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-[#9B7BFF]" />
                    Engineered for Impact
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                  Modern Software Architecture That Accelerates Growth.
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We bridge the gap between complex engineering and human-centered design, delivering enterprise-grade web applications, AI integrations, and automated digital ecosystems.
                </p>

                {/* Key Pillars */}
                <div className="pt-3 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <div className="w-5 h-5 rounded-md bg-[#1769E0]/30 text-[#38BDF8] flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span>Agile & Scalable Engineering Pipelines</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <div className="w-5 h-5 rounded-md bg-[#6C3FE8]/30 text-[#9B7BFF] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>Security-First & Cloud-Native Reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Who We Are" Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1769E0]">
                Our Identity & Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
                Who We Are
              </h3>
            </div>

            <div className="space-y-3 text-sm sm:text-[15px] text-[#475467] leading-relaxed">
              <p>
                <strong className="text-[#0B1B3A]">Pravaah Technology</strong> is a technology and digital solutions company focused on helping businesses transform their ideas into modern, scalable and meaningful digital experiences.
              </p>
              <p>
                From websites and applications to UI/UX, software solutions, AI and automation, we combine creativity with technology to deliver solutions built around real business needs.
              </p>
              <p className="p-3.5 rounded-xl bg-[#F7F9FC] border-l-4 border-[#1769E0] text-[#0B1B3A] font-medium text-xs sm:text-sm">
                Our approach is simple — understand the problem, create the right strategy, build with modern technology and deliver a solution that creates long-term value.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Tailored Custom Solutions',
                'Transparent Collaborative Roadmap',
                'Modern Next-Gen Tech Stacks',
                'Dedicated Post-Launch Support',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onLearnMore}
              >
                Learn More About Us
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
