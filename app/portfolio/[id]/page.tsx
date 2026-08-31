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
  Calendar, 
  Building2, 
  Clock, 
  Target, 
  Lightbulb, 
  ChevronRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Badge } from '@/components/ui/badge';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Case Study Not Found - Pravaah Technology',
    };
  }

  return {
    title: `${project.name} Case Study | Pravaah Technology`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.name} - Case Study | Pravaah Technology`,
      description: project.shortDesc,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.name }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = PORTFOLIO_DATA.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PORTFOLIO_DATA[projectIndex];
  const nextProject = PORTFOLIO_DATA[(projectIndex + 1) % PORTFOLIO_DATA.length];
  const prevProject = PORTFOLIO_DATA[(projectIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length];

  return (
    <div className="bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/70 to-[#EAF2FC] min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* 1. Breadcrumb & Back Button Bar */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-2 pb-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D6E3F4] pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
            <Link href="/" className="hover:text-[#1769E0] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#portfolio" className="hover:text-[#1769E0] transition-colors font-medium">
              Portfolio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1B3A] font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </div>

          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D6E3F4] bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-[#0B1B3A] hover:bg-white hover:border-[#1769E0] hover:text-[#1769E0] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12 relative z-10">
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="blue">{project.category} CASE STUDY</Badge>
            <span className="text-xs font-semibold text-[#6C3FE8] bg-purple-50 px-3 py-0.5 rounded-full border border-purple-200/60">
              {project.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-[#475467] font-medium leading-relaxed">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {/* Project Meta Info Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 p-4 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#D6E3F4] shadow-elevated">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Building2 className="w-3.5 h-3.5 text-[#1769E0]" />
              <span>Client</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-[#0B1B3A] truncate">
              {project.client}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Target className="w-3.5 h-3.5 text-[#6C3FE8]" />
              <span>Industry</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-[#0B1B3A] truncate">
              {project.industry}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Timeline</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-[#0B1B3A]">
              {project.timeline}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Delivered</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-[#0B1B3A]">
              {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Primary Banner Showcase */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border border-[#E4E7EC] bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06132D]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-slate-300 font-bold block mb-0.5">Architecture Showcase</span>
              <span className="text-base sm:text-lg font-bold">{project.name} Production Release</span>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Challenge vs Solution Grid */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* The Challenge Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/40 border border-rose-100/80 shadow-soft space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-rose-100/80 text-rose-700 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>The Core Challenge</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {project.challenge.title}
            </h2>

            <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
              {project.challenge.description}
            </p>

            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-900/70">
                Key Friction Points Encountered:
              </h3>
              <ul className="space-y-2">
                {project.challenge.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/40 border border-blue-100/80 shadow-soft space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-100/80 text-[#1769E0] text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>The Engineering Solution</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              {project.solution.title}
            </h2>

            <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
              {project.solution.description}
            </p>

            <div className="space-y-2.5 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900/70">
                Architectural Highlights:
              </h3>
              <ul className="space-y-2">
                {project.solution.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Key Features Grid */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <Badge variant="purple">FEATURE MATRIX</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            Key Features & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Custom functional capabilities engineered specifically for {project.client}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {project.keyFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D6E3F4] hover:border-[#1769E0]/50 shadow-soft hover:shadow-medium transition-all duration-300 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1769E0] flex items-center justify-center shrink-0 border border-blue-100 font-bold text-xs">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#0B1B3A]">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technical Architecture & Tech Stack */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#06132D] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6638E8]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technical Specifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Technology Stack & Architecture
              </h2>
            </div>

            {/* Architecture breakdown list if available */}
            {project.solution.architecture && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.solution.architecture.map((arch, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies Badges */}
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technologies & Frameworks Deployed:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/15 text-xs sm:text-sm font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Engineering Process Workflow */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <Badge variant="blue">METHODOLOGY</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            How We Engineered the Solution
          </h2>
          <p className="text-xs sm:text-sm text-[#667085]">
            Structured, milestone-driven execution from concept discovery to production scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {project.process.map((p, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#D6E3F4] space-y-2 relative group hover:border-[#1769E0]/60 transition-all duration-300"
            >
              <div className="text-xl font-black text-[#1769E0]/80">
                {p.step}
              </div>
              <h3 className="text-sm font-bold text-[#0B1B3A] leading-snug">
                {p.phase}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Tangible Results & Measurable Outcomes */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B1B3A] via-[#07152F] to-[#06132D] text-white shadow-elevated">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider border border-emerald-500/30">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Business Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Measurable Results & Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1.5 backdrop-blur-xs"
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#A78BFA]">
                  {res.metric}
                </div>
                <div className="text-sm font-bold text-white">
                  {res.label}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                  {res.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Visual Gallery & Screenshots */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
            <Badge variant="purple">VISUAL PREVIEWS</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
              Project Interface & Screens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {project.gallery.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-[#D6E3F4] shadow-soft bg-white flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-[#D6E3F4] text-xs font-semibold text-[#0B1B3A]">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. Next & Previous Case Study Switcher */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-10 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-b border-[#D6E3F4] py-6">
          
          <Link
            href={`/portfolio/${prevProject.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#1769E0] transition-colors" />
              <div>
                <div className="text-[11px] text-slate-500 font-medium">Previous Case Study</div>
                <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                  {prevProject.name}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-400">{prevProject.category}</span>
          </Link>

          <Link
            href={`/portfolio/${nextProject.id}`}
            className="p-4 rounded-2xl border border-[#D6E3F4] bg-[#F7F9FC] hover:bg-white hover:border-[#1769E0] transition-all group flex items-center justify-between"
          >
            <div>
              <div className="text-[11px] text-slate-500 font-medium">Next Case Study</div>
              <div className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors">
                {nextProject.name}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400">{nextProject.category}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1769E0] transition-colors" />
            </div>
          </Link>

        </div>
      </section>

      {/* 11. Bottom CTA Banner */}
      <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#06132D] text-white text-center space-y-4 relative overflow-hidden shadow-elevated">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to build something extraordinary like {project.name}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Let&apos;s engineer tailored software, intelligent AI workflows, or modern web systems for your company.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-[#1769E0] to-[#6638E8] hover:from-[#155fc9] hover:to-[#582ed4] text-white text-xs sm:text-sm font-bold shadow-soft transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Explore All Projects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
