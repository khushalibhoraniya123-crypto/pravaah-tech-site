import React, { useState } from 'react';
import { Badge } from '../components/common/Badge';
import { ProjectCard } from '../components/cards/ProjectCard';
import { ProjectDetailModal } from '../components/common/ProjectDetailModal';
import { PORTFOLIO_DATA } from '../data/portfolio';
import type { PortfolioProject, PortfolioCategory } from '../types';

interface PortfolioSectionProps {
  onRequestSimilarProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: { label: string; value: PortfolioCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Apps', value: 'Web' },
    { label: 'Mobile Apps', value: 'Mobile' },
    { label: 'UI/UX Design', value: 'UI/UX' },
    { label: 'Software & ERP', value: 'Software' },
    { label: 'AI Solutions', value: 'AI' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const handleRequestSimilar = (name: string) => {
    if (onRequestSimilarProject) {
      onRequestSimilarProject(name);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="blue">FEATURED CASE STUDIES</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Our Work That <span className="gradient-text-blue-purple">Defines Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Explore recent digital systems, web architectures, mobile platforms, and AI systems engineered for visionary clients.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveCategory(tab.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.value
                  ? 'bg-[#0B1B3A] text-white shadow-soft'
                  : 'bg-white border border-[#E4E7EC] text-[#667085] hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilar}
      />
    </section>
  );
};
