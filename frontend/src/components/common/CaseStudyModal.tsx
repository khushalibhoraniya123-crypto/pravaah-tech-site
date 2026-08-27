import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Sparkles,
  ShieldCheck,
  Zap,
  Quote
} from 'lucide-react';
import type { CaseStudy } from '../../data/caseStudies';
import { Button } from './Button';
import { ParticleBackground } from './ParticleBackground';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto border border-[#E4E7EC] animate-in zoom-in-95 duration-200">
        
        {/* Modal Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${caseStudy.heroImageGradient} text-white relative shrink-0 overflow-hidden`}>
          {/* Particle background */}
          <ParticleBackground />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15 focus:outline-none"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{caseStudy.category}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {caseStudy.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {caseStudy.tagline}
            </p>

            {/* Client and Year Meta */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#38BDF8]" />
                <span>{caseStudy.client}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
                <span>Delivered {caseStudy.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#334155]">
          
          {/* 1. Quantified Metrics Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-[#1769E0]">{m.value}</div>
                <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* 2. Challenge vs. Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Business Challenge */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-2">
              <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 text-rose-600" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* The Engineered Solution */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
              <div className="flex items-center gap-1.5 text-[#1769E0] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1769E0]" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* 3. Architecture Highlights & Deliverables */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#0B1B3A] uppercase tracking-wider">
              Key Architecture Highlights & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tech Stack Employed */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-[#0B1B3A] border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Client Testimonial Callout */}
          {caseStudy.testimonial && (
            <div className="p-5 rounded-2xl bg-[#06132D] text-white flex items-start gap-4 shadow-sm">
              <Quote className="w-8 h-8 text-[#1769E0] shrink-0 opacity-70" />
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="text-xs font-bold text-[#38BDF8]">
                  {caseStudy.testimonial.author} <span className="text-slate-400 font-normal">• {caseStudy.testimonial.role}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Interested in building a similar custom platform?
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer w-full sm:w-auto"
            >
              Close
            </button>
            <Link
              to={`/start-a-project?reference=${encodeURIComponent(caseStudy.title)}`}
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="sm" withArrow className="w-full justify-center shadow-glow-blue text-xs font-bold">
                Build Similar Architecture
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
