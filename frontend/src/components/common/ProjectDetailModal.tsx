import React from 'react';
import { X, CheckCircle2, Layers } from 'lucide-react';
import type { PortfolioProject } from '../../types';
import { Button } from './Button';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07152F]/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-elevated border border-[#E4E7EC] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative aspect-[21/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152F] via-[#07152F]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0] text-white inline-block mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">{project.name}</h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F7F9FC] border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">Client</span>
              <span className="font-bold text-[#0B1B3A]">{project.client}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Year</span>
              <span className="font-bold text-[#0B1B3A]">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Domain</span>
              <span className="font-bold text-[#0B1B3A]">{project.category} Architecture</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">Status</span>
              <span className="font-bold text-emerald-600">Production Live</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Architecture & Overview
            </h4>
            <p className="text-sm text-[#334155] leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Impact Stats */}
          {project.stats && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Performance Impact
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
                    <div className="text-xl font-extrabold text-[#1769E0]">{stat.value}</div>
                    <div className="text-xs text-[#667085] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6C3FE8]" />
              <span>Project Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0B1B3A] p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F7F9FC] border-t border-[#E4E7EC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#667085]">
            Interested in building a similar platform?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="outline" size="sm" onClick={onClose} className="w-full sm:w-auto">
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => {
                onRequestSimilar(project.name);
                onClose();
              }}
              className="w-full sm:w-auto"
            >
              Request a Similar Build
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
