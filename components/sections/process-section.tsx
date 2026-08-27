"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PROCESS_DATA } from '@/data/process';
import { 
  Search, 
  Compass, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const PROCESS_ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Compass,
  Palette,
  Code,
  Rocket,
  TrendingUp,
};

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStep = PROCESS_DATA[activeStep];
  const IconComponent = PROCESS_ICON_MAP[currentStep.iconName] || Search;

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">OUR METHODOLOGY</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            How We Deliver <span className="gradient-text-blue-purple">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Our battle-tested 6-phase engineering lifecycle ensures transparent communication, rapid iteration, and reliable production deployments.
          </p>
        </div>

        {/* 6 Step Tab Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_DATA.map((step, idx) => {
            const StepIcon = PROCESS_ICON_MAP[step.iconName] || Search;
            const isSelected = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-[#0B1B3A] text-white border-[#0B1B3A] shadow-medium scale-[1.02]'
                    : 'bg-white text-[#334155] border-[#E4E7EC] hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#38BDF8]' : 'text-slate-400'}`}>
                    {step.number}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                </div>
                <div>
                  <div className="text-sm font-bold truncate">{step.title}</div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-[#667085]'}`}>
                    {step.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight Card for Active Step */}
        <div className="rounded-3xl bg-white border border-[#E4E7EC] shadow-elevated p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#1769E0] border border-blue-100 flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#6C3FE8] uppercase tracking-wider">
                    Phase {currentStep.number} of 06
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
                    {currentStep.title} — {currentStep.tagline}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#667085] leading-relaxed">
                {currentStep.description}
              </p>

              {/* Checklist Highlights */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables in this Phase</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                      <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Action & Next Step Guide (5 cols) */}
            <div className="lg:col-span-5 bg-[#F7F9FC] rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1769E0]">Agile Guarantee</div>
              <p className="text-xs text-[#667085] leading-relaxed">
                We maintain continuous integration sprints with daily Slack/WhatsApp standups and bi-weekly staging demonstration environments.
              </p>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0B1B3A]">Ready to move to next phase?</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_DATA.length)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0B1B3A] text-white text-xs font-bold hover:bg-[#1769E0] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
