import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Logo } from '../components/common/Logo';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <section id="about" className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-[#EBF3FB] border-t border-[#D2DEEE] relative overflow-hidden">
      {/* Background Subtle Wave Accents matching brand palette */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#6C3FE8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <Badge variant="blue">ABOUT US</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
            Turning Ideas Into <span className="gradient-text-blue-purple">Working Digital Products</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            We are a hands-on technology team helping companies design, build, and maintain software that solves everyday operational challenges.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Tech Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] p-4.5 xs:p-5 sm:p-7 text-white shadow-elevated border border-white/10 overflow-hidden">
              {/* Internal ambient glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#1769E0]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#6C3FE8]/30 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-3.5 xs:space-y-4">
                {/* Brand Logo Header */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10 gap-2">
                  <Logo variant="light" height={28} />
                  <span className="flex items-center gap-1 text-[9px] xs:text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#38BDF8] border border-white/10 px-2 xs:px-2.5 py-0.5 rounded-full shrink-0">
                    <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-[#9B7BFF]" />
                    Reliable Engineering
                  </span>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold leading-snug">
                  Software built with care, tested thoroughly, and delivered on time.
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  We work closely with founders, business owners, and engineering teams to turn ideas into clean, maintainable web apps, mobile products, and custom back-office tools.
                </p>

                {/* Key Pillars */}
                <div className="pt-3 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <div className="w-5 h-5 rounded-md bg-[#1769E0]/30 text-[#38BDF8] flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span>Clear Communication & Fast Turnaround</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                    <div className="w-5 h-5 rounded-md bg-[#6C3FE8]/30 text-[#9B7BFF] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>Secure Setup & 100% Client Code Ownership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Who We Are" Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1769E0]">
                Our Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
                Who We Are
              </h3>
            </div>

            <div className="space-y-3 text-sm sm:text-[15px] text-[#475467] leading-relaxed">
              <p>
                <strong className="text-[#0B1B3A]">Pravaah Technology</strong> is a software development and digital solutions company. We help businesses create clean websites, mobile applications, and internal software that make their day-to-day work simpler.
              </p>
              <p>
                Whether you need a new customer-facing web portal, an iOS and Android app, or custom software to replace manual spreadsheets, our team handles design, development, and deployment from start to finish.
              </p>
              <p className="p-3.5 rounded-xl bg-[#E2ECF9]/80 border-l-4 border-[#1769E0] text-[#0B1B3A] font-medium text-xs sm:text-sm">
                Our approach is straightforward: listen to your goals, recommend practical technology, write clean code, and support your product long after launch.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Direct Developer Communication',
                'Transparent Milestones & Pricing',
                'Modern, Long-Lasting Tech Stack',
                'Reliable Post-Launch Support',
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
                onClick={handleLearnMore}
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
