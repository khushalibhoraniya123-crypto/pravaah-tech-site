import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { AbstractTechVisual } from '../components/hero/AbstractTechVisual';
import { CONTACT_CONFIG } from '../config/contact';

interface HeroSectionProps {
  onStartProject?: () => void;
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative pt-16 xs:pt-18 sm:pt-20 md:pt-22 lg:pt-20 pb-6 sm:pb-8 lg:min-h-[calc(100vh-100px)] flex flex-col justify-center overflow-hidden"
    >
      {/* Background brand glow matching logo palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[350px] bg-gradient-to-tr from-[#1769E0]/10 via-[#6C3FE8]/10 to-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xs:gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-3 xs:space-y-4 sm:space-y-4.5 text-left">
            
            {/* Small Badge */}
            <div>
              <Badge variant="gradient" size="md">
                {CONTACT_CONFIG.badgeText}
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold text-[#0B1B3A] tracking-tight leading-[1.1] break-words">
                WE BUILD <br />
                WHAT'S <span className="gradient-text-blue-purple">NEXT.</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="text-sm xs:text-base sm:text-lg font-bold text-[#1769E0] tracking-wide flex items-center gap-2">
              <span className="w-4 xs:w-5 h-0.5 bg-[#1769E0] rounded-full inline-block shrink-0" />
              <span className="break-words">Design. Develop. Innovate. Automate.</span>
            </div>

            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-base text-[#667085] leading-relaxed max-w-xl">
              {CONTACT_CONFIG.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={onStartProject}
                className="w-full xs:w-auto justify-center shadow-glow-blue"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onExploreServices}
                className="w-full xs:w-auto justify-center"
              >
                Explore Services
              </Button>
            </div>

            {/* Micro Highlights Strip */}
            <div className="pt-3.5 sm:pt-4 border-t border-[#E4E7EC] flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] xs:text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-emerald-500 shrink-0" />
                <span>Custom Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#1769E0] shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#6C3FE8] shrink-0" />
                <span>Ongoing Support & Updates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Technology Visual (5 cols) */}
          <div className="lg:col-span-5 relative w-full overflow-hidden">
            <AbstractTechVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
