import React, { useState } from 'react';
import { ArrowRight, Eye, Building2 } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { CASE_STUDIES_DATA, type CaseStudy } from '../data/caseStudies';
import { CaseStudyModal } from '../components/common/CaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('erp');

  const categories = [
    { id: 'erp', label: 'Enterprise ERP' },
    { id: 'commerce', label: 'E-Commerce' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'travel', label: 'Web & Cloud' },
    { id: 'fintech', label: 'UI/UX Design' },
  ];

  const filteredProjects = CASE_STUDIES_DATA.filter((proj) => {
    if (activeCategory === 'erp') return proj.id === 'nexus-erp' || proj.id === 'healthsync-telehealth';
    if (activeCategory === 'commerce') return proj.id === 'aura-luxe';
    if (activeCategory === 'ai') return proj.id === 'cognitiveiq-ai';
    if (activeCategory === 'travel') return proj.id === 'voyager-travel';
    if (activeCategory === 'fintech') return proj.id === 'finpulse-wealth';
    return true;
  });

  return (
    <section id="projects" className="py-12 sm:py-14 md:py-16 bg-[#F7F9FC] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <Badge variant="blue">FEATURED CASE STUDIES</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
            Engineered Results That <span className="gradient-text-blue-purple">Drive Real Growth</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#667085] leading-relaxed">
            Click on any project to explore the full architectural case study, business problem diagnosis, and quantified ROI results.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1769E0] text-white shadow-soft'
                    : 'bg-white text-[#334155] border border-[#E4E7EC] hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-[#E4E7EC] hover:border-[#1769E0]/40 hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Visual Top Banner */}
                <div className={`h-36 sm:h-40 bg-gradient-to-tr ${project.heroImageGradient} p-5 flex flex-col justify-between text-white relative`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10.5px] font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#F7F9FC] border border-slate-100 text-center">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-base font-extrabold text-[#1769E0]">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-semibold truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-slate-100 text-slate-700">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action: View Case Study Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0B1B3A] hover:bg-[#1769E0] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer group-hover:shadow-glow-blue"
                >
                  <Eye className="w-4 h-4 text-[#38BDF8]" />
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detailed View Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

    </section>
  );
};
