import React, { useState } from 'react';
import { Badge } from '../components/common/Badge';
import { PROCESS_DATA } from '../data/process';
import { Search, Compass, Palette, Code, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

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

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="purple">OUR 6-STEP METHODOLOGY</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            How We Turn Ideas Into <span className="gradient-text-blue-purple">Digital Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            A clear and collaborative process that takes your idea from concept to a successful digital product.
          </p>
        </div>

        {/* Desktop Horizontal Interactive Timeline (hidden on small screens) */}
        <div className="hidden lg:block mb-16">
          {/* Horizontal Track Line */}
          <div className="relative flex items-center justify-between before:absolute before:top-6 before:left-8 before:right-8 before:h-1 before:bg-[#E4E7EC] before:z-0">
            {PROCESS_DATA.map((step, idx) => {
              const Icon = PROCESS_ICON_MAP[step.iconName] || Search;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  {/* Step Circle */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-soft ${
                      isActive
                        ? 'bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white scale-110 shadow-glow-blue'
                        : 'bg-white border-2 border-[#E4E7EC] text-[#667085] group-hover:border-[#1769E0]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Number & Title */}
                  <div className="text-center mt-3">
                    <span className="font-mono text-xs font-bold text-slate-400 block">
                      {step.number}
                    </span>
                    <span className={`text-xs font-bold tracking-wider uppercase ${isActive ? 'text-[#1769E0]' : 'text-[#0B1B3A]'}`}>
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Feature Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] shadow-medium transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black gradient-text-blue-purple">
                    {PROCESS_DATA[activeStep].number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1769E0] bg-blue-50 px-3 py-1 rounded-full">
                    {PROCESS_DATA[activeStep].tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
                  {PROCESS_DATA[activeStep].title} Phase
                </h3>

                <p className="text-base text-[#475467] leading-relaxed max-w-2xl">
                  {PROCESS_DATA[activeStep].description}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-3">
                  {PROCESS_DATA[activeStep].highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0B1B3A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-[#E4E7EC] text-center shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white flex items-center justify-center mb-3 shadow-glow-blue">
                  {React.createElement(PROCESS_ICON_MAP[PROCESS_DATA[activeStep].iconName] || Search, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-sm font-bold text-[#0B1B3A]">Stage Output</h4>
                <p className="text-xs text-[#667085] mt-1">Verified milestones & production reviews</p>
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_DATA.length - 1))}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < PROCESS_DATA.length - 1 ? prev + 1 : 0))}
                    className="px-3 py-1.5 rounded-lg bg-[#0B1B3A] text-white text-xs font-semibold hover:bg-[#1769E0]"
                  >
                    Next Step →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_DATA.map((step) => {
            const Icon = PROCESS_ICON_MAP[step.iconName] || Search;
            return (
              <div
                key={step.number}
                className="relative pl-12 before:absolute before:left-5 before:top-12 before:bottom-0 before:w-0.5 before:bg-[#E4E7EC] last:before:hidden"
              >
                {/* Timeline node icon */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white flex items-center justify-center shadow-soft">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#1769E0]">{step.number}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6C3FE8]">{step.tagline}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B3A] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed mb-4">{step.description}</p>
                  
                  <div className="space-y-1.5">
                    {step.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#334155]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1769E0]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
