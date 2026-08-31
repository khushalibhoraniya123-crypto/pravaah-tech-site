import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Activity,
  Workflow,
  Clock,
  Target,
  Zap
} from 'lucide-react';
import { SOLUTIONS_DATA } from '@/data/solutions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SOLUTIONS_DATA.map((solution) => ({
    id: solution.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const solution = SOLUTIONS_DATA.find((s) => s.id === id);

  if (!solution) {
    return {
      title: 'Solution Not Found - Pravaah Technology',
    };
  }

  return {
    title: `${solution.title} | Pravaah Technology Enterprise Solutions`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} - Pravaah Technology`,
      description: solution.description,
      type: 'website',
    },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { id } = await params;
  const solutionIndex = SOLUTIONS_DATA.findIndex((s) => s.id === id);

  if (solutionIndex === -1) {
    notFound();
  }

  const solution = SOLUTIONS_DATA[solutionIndex];
  const nextSolution = SOLUTIONS_DATA[(solutionIndex + 1) % SOLUTIONS_DATA.length];
  const prevSolution = SOLUTIONS_DATA[(solutionIndex - 1 + SOLUTIONS_DATA.length) % SOLUTIONS_DATA.length];

  return (
    <div className="bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/70 to-[#EAF2FC] min-h-screen pt-20 sm:pt-24 pb-14 sm:pb-16 relative overflow-hidden">
      {/* Background ambient lighting & tech grid */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#6638E8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      {/* 1. Breadcrumb Bar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-2 pb-6 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D6E3F4] pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
            <Link href="/" className="hover:text-[#1769E0] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#solutions" className="hover:text-[#1769E0] transition-colors font-medium">
              Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1B3A] font-semibold truncate max-w-[200px] sm:max-w-none">
              {solution.title}
            </span>
          </div>

          <Link
            href="/#solutions"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D6E3F4] bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-[#0B1B3A] hover:bg-white hover:border-[#1769E0] hover:text-[#1769E0] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue">SOLUTION {solution.number}</Badge>
              <span className="text-xs font-semibold text-[#6638E8] bg-purple-50 px-3 py-0.5 rounded-full border border-purple-200/60 font-mono">
                {solution.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              {solution.title}
            </h1>

            <p className="text-base sm:text-lg text-[#1769E0] font-bold">
              {solution.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-3xl">
              {solution.fullDesc}
            </p>

            {/* Quick Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-soft transition-all"
              >
                <span>Request Solution Deployment</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#06132D] text-white space-y-4 border border-white/10 shadow-elevated">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Performance Benchmarks</span>
              </div>

              <div className="space-y-3">
                {solution.metrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-300">{metric.label}</span>
                    <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#A78BFA]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Challenge vs Approach Grid */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Challenge */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-100 shadow-soft space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-rose-100/80 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>Core Business Friction</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {solution.challenges.title}
            </h2>

            <ul className="space-y-2.5 pt-1">
              {solution.challenges.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-100 shadow-soft space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-100/80 text-[#1769E0] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Engineering Approach</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {solution.approach.title}
            </h2>

            <ul className="space-y-2.5 pt-1">
              {solution.approach.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Functional Capabilities & Key Features */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <Badge variant="blue">FUNCTIONAL MATRIX</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            Key Features & System Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Engineered with modular flexibility to match your exact business hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solution.features.map((feat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/40 transition-all duration-300 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#1769E0] border border-blue-100 flex items-center justify-center shrink-0 font-bold text-xs">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A] mb-1">
                  {feat}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Enterprise standard with automated error handling and real-time synchronization.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Architecture & Tech Specs */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#06132D] text-white relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6638E8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical Specifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Architecture & Tech Stack
              </h2>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>

            {/* Technologies Badges */}
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Deployed Technologies & Frameworks:
              </div>
              <div className="flex flex-wrap gap-2">
                {solution.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/15 text-xs font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Measurable Business Benefits */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
                Guaranteed Deliverables & Business ROI
              </h2>
              <p className="text-xs text-[#667085]">Measurable outcomes achieved upon deployment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {solution.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-xs sm:text-sm font-semibold text-[#0B1B3A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Next & Previous Solution Navigation */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[#D6E3F4] py-6">
          
          <Link
            href={`/solutions/${prevSolution.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#1769E0] transition-colors" />
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Previous Solution</div>
                <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                  {prevSolution.title}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">{prevSolution.number}</span>
          </Link>

          <Link
            href={`/solutions/${nextSolution.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between shadow-xs"
          >
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Next Solution</div>
              <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                {nextSolution.title}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-400">{nextSolution.number}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1769E0] transition-colors" />
            </div>
          </Link>

        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#06132D] via-[#0B1B3A] to-[#0E2856] text-white text-center space-y-4 relative overflow-hidden shadow-elevated">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to deploy {solution.title}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a 30-minute technical roadmap session with our lead software architects.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-soft transition-all"
            >
              <span>Consult Lead Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#solutions"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
