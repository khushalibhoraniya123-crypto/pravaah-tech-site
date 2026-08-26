import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Layout, 
  Layers, 
  Users, 
  Sliders
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CTASection } from '../../components/common/CTASection';

export const UIUXDesignPage: React.FC = () => {
  const designCapabilities = [
    {
      title: 'Design Systems & Token Architectures',
      desc: 'Scalable Figma component libraries, multi-brand themes, typography scales, and seamless sync tokens for frontend developers.',
      icon: Layers,
    },
    {
      title: 'Complex Dashboard & Data Visualization',
      desc: 'High-density fintech terminals, SaaS dashboards, and executive analytics tools crafted for fast scanning and zero cognitive fatigue.',
      icon: Layout,
    },
    {
      title: 'Interactive Prototyping & Micro-Interactions',
      desc: 'Clickable high-fidelity prototypes, fluid animation choreographies, and touch gestures tested with real target users.',
      icon: Sliders,
    },
    {
      title: 'UX Research & User Journey Mapping',
      desc: 'In-depth persona discovery, information architecture, competitive teardowns, and friction audit across conversion funnels.',
      icon: Users,
    },
  ];

  const designStages = [
    {
      step: '01',
      title: 'Research & Wireframing',
      desc: 'Empathy mapping, stakeholder interviews, user flows, and low-fidelity structural blueprints.',
    },
    {
      step: '02',
      title: 'Visual Identity & Systems',
      desc: 'Color theory, typography tokens, component hierarchy, and responsive breakpoint guides.',
    },
    {
      step: '03',
      title: 'Interactive Prototyping',
      desc: 'High-fidelity Figma flows, micro-interactions, and real-device usability testing.',
    },
    {
      step: '04',
      title: 'Developer Hand-Off',
      desc: 'Pixel-perfect CSS specs, asset exports, token JSONs, and live engineer walkthroughs.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-pink-400/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'UI/UX Design' }
            ]} 
            className="mb-3" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="purple" size="md">
                HUMAN-CENTERED DIGITAL EXPERIENCES
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Product Design & Design Systems That Delight & Convert.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed max-w-2xl">
                We craft intuitive digital interfaces, comprehensive Figma design systems, and frictionless user experiences that turn complex workflows into delightful interactions.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Start a Design Project
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="md">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xl font-extrabold text-pink-600">96/100</div>
                  <div className="text-[11px] text-slate-500 font-medium">Usability Score</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B1B3A]">250+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Figma Tokens / System</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-600">+52%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Task Velocity</div>
                </div>
              </div>
            </div>

            {/* Design System Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-white border border-[#E4E7EC] shadow-elevated relative">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/10 text-pink-600 flex items-center justify-center">
                      <Palette className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0B1B3A] block">Design System v3.2</span>
                      <span className="text-[9.5px] text-slate-500">Atomic UI Kit</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-bold bg-emerald-100 text-emerald-700">Verified</span>
                </div>

                {/* Color Palette Preview */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Color Tokens</div>
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="h-8 rounded-lg bg-[#1769E0] text-[8.5px] font-bold text-white flex items-end p-1">Primary</div>
                    <div className="h-8 rounded-lg bg-[#6638E8] text-[8.5px] font-bold text-white flex items-end p-1">Purple</div>
                    <div className="h-8 rounded-lg bg-[#00D2FF] text-[8.5px] font-bold text-[#06132D] flex items-end p-1">Cyan</div>
                    <div className="h-8 rounded-lg bg-[#081A3A] text-[8.5px] font-bold text-white flex items-end p-1">Navy</div>
                  </div>

                  {/* UI Preview Buttons */}
                  <div className="pt-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Interactive Components</div>
                    <div className="flex gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-[#1769E0] text-white text-[11px] font-semibold">Active State</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">Secondary</span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">Success</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Figma • Auto-Layout • Tokens</span>
                  <span className="font-bold text-[#1769E0]">100% WCAG AA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              Comprehensive UI/UX Services
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Transforming complex digital logic into crystal clear, intuitive user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {designCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:shadow-elevated transition-all flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-1">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-10 sm:py-12 bg-white border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-[#0B1B3A]">Our 4-Stage Design Workflow</h2>
            <p className="text-xs text-slate-600 mt-0.5">From initial discovery to frictionless developer handoff.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5">
            {designStages.map((st, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
                <div className="text-xl font-extrabold text-pink-600 mb-1">{st.step}</div>
                <h3 className="text-sm font-bold text-[#0B1B3A] mb-1">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#06132D] to-[#0E2856] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-elevated">
            <div className="max-w-2xl space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[11px] font-bold uppercase tracking-wider">
                Featured Design System
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">FinPulse Wealth Analytics</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Created an atomic design system with 250+ responsive tokens and component variants for a high-density wealth management terminal, improving trader task completion speed by +52%.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
                <span>96/100 Usability Score</span>
                <span>•</span>
                <span>250+ Design Tokens</span>
                <span>•</span>
                <span>WCAG AA Compliance</span>
              </div>
            </div>
            <Link to="/case-studies/finpulse-wealth">
              <Button variant="primary" size="md" withArrow className="shrink-0 shadow-glow-blue">
                View Case Study
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Product Design?"
        subtitle="Let’s create an unforgettable, conversion-optimized interface for your users."
        buttonText="Start Design Project"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
