"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ProjectCard } from '@/components/cards/project-card';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import type { PortfolioProject, PortfolioCategory } from '@/types';
import { CheckCircle2, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  onRequestSimilarProject?: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: PortfolioCategory[] = ['all', 'Web', 'Mobile', 'UI/UX', 'Software', 'AI'];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  const handleRequestSimilar = (projectName: string) => {
    setSelectedProject(null);
    if (onRequestSimilarProject) {
      onRequestSimilarProject(`Project similar to ${projectName}`);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="blue">SHOWCASE & PROVEN RESULTS</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Featured Projects & <span className="gradient-text-blue-purple">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Explore how we engineered scalable applications, modernized legacy workflows, and delivered measurable business outcomes for our clients.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0B1B3A] text-white shadow-soft'
                  : 'bg-white border border-[#E4E7EC] text-[#334155] hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All Showcase (6)' : `${cat} Projects`}
            </button>
          ))}
        </div>

        {/* 6 Grid Case Studies */}
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

      {/* shadcn Dialog for Project Inspection */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-3xl border-none">
            {/* Banner Image */}
            <div className="relative aspect-[16/8] w-full bg-slate-900 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152F] via-[#07152F]/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <Badge variant="blue" className="mb-2">
                  {selectedProject.category} • {selectedProject.year}
                </Badge>
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white text-left">
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-slate-300 text-sm text-left">
                    {selectedProject.subtitle}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
              <p className="text-sm text-[#334155] leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Stats Grid */}
              {selectedProject.stats && selectedProject.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-center">
                  {selectedProject.stats.map((st, idx) => (
                    <div key={idx}>
                      <div className="text-lg sm:text-xl font-extrabold text-[#1769E0]">{st.value}</div>
                      <div className="text-xs text-[#667085] font-medium">{st.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#6C3FE8]" />
                  <span>Delivered Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="p-6 bg-[#F7F9FC] border-t border-[#E4E7EC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#667085]">
                Interested in building a similar solution for your business?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button variant="outline" size="sm" onClick={() => setSelectedProject(null)} className="w-full sm:w-auto">
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  withArrow
                  onClick={() => handleRequestSimilar(selectedProject.name)}
                  className="w-full sm:w-auto"
                >
                  Request Similar Project
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
