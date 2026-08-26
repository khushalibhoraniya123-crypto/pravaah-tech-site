import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  highlights?: string[];
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Build Something Extraordinary?',
  subtitle = 'Transform your digital vision into high-impact technology solutions.',
  description = 'Let’s discuss your architecture, project scope, timeline, and deliverables with our senior technology team.',
  badge = 'Start Your Transformation',
  buttonText = 'Start a Project',
  buttonLink = '/start-a-project',
  secondaryButtonText = 'Contact Our Team',
  secondaryButtonLink = '/contact',
  highlights = [
    'Direct Consultation with Senior Architects',
    'Clear Milestones & Fixed Timelines',
    'Enterprise SLA & 99.9% Uptime Support',
  ],
  className = '',
}) => {
  return (
    <section className={`relative py-10 sm:py-14 overflow-hidden bg-gradient-to-b from-[#07152F] via-[#06132D] to-[#040C1D] text-white ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6638E8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle || description}
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link to={buttonLink}>
            <Button
              variant="primary"
              size="md"
              withArrow
              className="w-full sm:w-auto shadow-glow-blue px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold"
            >
              {buttonText}
            </Button>
          </Link>

          <Link to={secondaryButtonLink}>
            <Button
              variant="glass"
              size="md"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold"
            >
              {secondaryButtonText}
            </Button>
          </Link>
        </div>

        {/* Trust Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
