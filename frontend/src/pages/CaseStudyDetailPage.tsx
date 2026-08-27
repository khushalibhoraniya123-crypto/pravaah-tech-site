import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Quote 
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { ParticleBackground } from '../components/common/ParticleBackground';
import { CASE_STUDIES_DATA } from '../data/caseStudies';

export const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES_DATA.find((c) => c.id === id) || CASE_STUDIES_DATA[0];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* Hero Banner */}
      <section className={`py-12 sm:py-16 bg-gradient-to-r ${caseStudy.heroImageGradient} text-white relative overflow-hidden`}>
        {/* Particle background */}
        <ParticleBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{caseStudy.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {caseStudy.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Client: <strong>{caseStudy.client}</strong></span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
                <span>Delivered {caseStudy.year}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* 1. Quantified Metrics Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-[#E4E7EC] shadow-soft">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1769E0]">{m.value}</div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* 2. Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-100 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wider">
                <Zap className="w-4 h-4 text-rose-600" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-[#1769E0] font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1769E0]" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* 3. Architecture Highlights */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4E7EC] space-y-4 shadow-soft">
            <h3 className="text-base font-bold text-[#0B1B3A]">
              Architecture Highlights & Engineering Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F7F9FC] border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tech Stack */}
          <div className="p-6 rounded-3xl bg-white border border-[#E4E7EC] space-y-3 shadow-soft">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Technology Stack Employed
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-100 text-[#0B1B3A] border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Client Testimonial */}
          {caseStudy.testimonial && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#06132D] text-white flex items-start gap-5 shadow-elevated">
              <Quote className="w-10 h-10 text-[#1769E0] shrink-0 opacity-70" />
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="text-sm font-bold text-[#38BDF8]">
                  {caseStudy.testimonial.author} <span className="text-slate-400 font-normal">• {caseStudy.testimonial.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* 6. Action Callout */}
          <div className="text-center pt-4">
            <Link to={`/start-a-project?reference=${encodeURIComponent(caseStudy.title)}`}>
              <Button variant="primary" size="lg" withArrow className="shadow-glow-blue">
                Build a Similar Custom Solution
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Engineer Your System?"
        subtitle="Schedule a free technical architecture consultation with our engineering team."
        buttonText="Start a Project"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
