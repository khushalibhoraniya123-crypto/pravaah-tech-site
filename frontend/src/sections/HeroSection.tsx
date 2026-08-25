import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { AbstractTechVisual } from '../components/hero/AbstractTechVisual';
import { CONTACT_CONFIG } from '../config/contact';

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreWork?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F9FC] to-[#F7F9FC]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-400/10 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Badge */}
            <div>
              <Badge variant="gradient" size="md">
                {CONTACT_CONFIG.badgeText}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1B3A] tracking-tight leading-[1.08]">
                WE BUILD <br />
                WHAT'S <span className="gradient-text-blue-purple">NEXT.</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-lg sm:text-xl font-bold text-[#1769E0] tracking-wide flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#1769E0] rounded-full inline-block" />
              <span>Design. Develop. Innovate. Automate.</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl">
              {CONTACT_CONFIG.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={onStartProject}
                className="shadow-glow-blue"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onExploreWork}
              >
                Explore Our Work
              </Button>
            </div>

            {/* Micro Highlights Strip */}
            <div className="pt-6 border-t border-[#E4E7EC] flex flex-wrap items-center gap-6 text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                <span>Modern React & AI Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6C3FE8] shrink-0" />
                <span>99.9% Uptime SLAs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Technology Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <AbstractTechVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
