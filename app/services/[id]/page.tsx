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
  Zap,
  Globe,
  Smartphone,
  Palette,
  Server
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return {
      title: 'Service Not Found - Pravaah Technology',
    };
  }

  return {
    title: `${service.title} | Pravaah Technology Engineering Services`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} - Pravaah Technology`,
      description: service.shortDesc,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const serviceIndex = SERVICES_DATA.findIndex((s) => s.id === id);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = SERVICES_DATA[serviceIndex];
  const nextService = SERVICES_DATA[(serviceIndex + 1) % SERVICES_DATA.length];
  const prevService = SERVICES_DATA[(serviceIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];

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
            <Link href="/#services" className="hover:text-[#1769E0] transition-colors font-medium">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1B3A] font-semibold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </div>

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D6E3F4] bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-[#0B1B3A] hover:bg-white hover:border-[#1769E0] hover:text-[#1769E0] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="blue">SERVICE CHAPTER {service.number}</Badge>
              <span className="text-xs font-semibold text-[#6638E8] bg-purple-50 px-3 py-0.5 rounded-full border border-purple-200/60 font-mono">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1B3A] tracking-tight uppercase leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#1769E0] font-bold">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#475467] leading-relaxed max-w-3xl">
              {service.fullDesc}
            </p>

            {/* Quick Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-soft transition-all"
              >
                <span>Request Service Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#06132D] text-white space-y-4 border border-white/10 shadow-elevated">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Performance & SLA Targets</span>
              </div>

              <div className="space-y-3">
                {service.metrics.map((metric, i) => (
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

      {/* 3. Challenges vs Engineering Approach */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Challenge */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/50 border border-rose-100 shadow-soft space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-rose-100/80 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>Industry Bottlenecks We Solve</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {service.challenges.title}
            </h2>

            <ul className="space-y-2.5 pt-1">
              {service.challenges.points.map((pt, i) => (
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
              <span>Our Technical Approach</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {service.approach.title}
            </h2>

            <ul className="space-y-2.5 pt-1">
              {service.approach.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Features & Deliverables */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <Badge variant="blue">CAPABILITIES & SCOPE</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            Key Features & Deliverables
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Complete transparency into what we design, engineer, and deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {service.features.map((feat, i) => (
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
                  Enterprise-grade execution with complete test coverage and source code handover.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4-Phase Delivery Process */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="p-6 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 text-[#1769E0] text-[11px] font-bold uppercase tracking-wider border border-blue-100">
              <Workflow className="w-3.5 h-3.5" />
              <span>Step-by-Step Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-2">
                <span className="font-mono text-sm font-black text-[#1769E0]">{step.step}</span>
                <h3 className="text-sm font-bold text-[#0B1B3A]">{step.phase}</h3>
                <p className="text-xs text-[#667085] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Matrix & Benefits */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Tech Stack (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#06132D] text-white space-y-5 border border-white/10 shadow-elevated flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Primary Engineering Stack</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Technologies & Tooling</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Battle-tested frameworks providing maximum speed, security, and developer productivity.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Key Business Benefits</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1B3A]">Expected Outcomes</h3>
            <div className="space-y-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Next & Previous Service Navigation */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[#D6E3F4] py-6">
          
          <Link
            href={`/services/${prevService.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#1769E0] transition-colors" />
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Previous Service</div>
                <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                  {prevService.title}
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">{prevService.number}</span>
          </Link>

          <Link
            href={`/services/${nextService.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between shadow-xs"
          >
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Next Service</div>
              <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                {nextService.title}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-slate-400">{nextService.number}</span>
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
              Ready to start your {service.title} project?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a 30-minute technical discovery session with our engineering leads.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-soft transition-all"
            >
              <span>Consult Lead Engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
