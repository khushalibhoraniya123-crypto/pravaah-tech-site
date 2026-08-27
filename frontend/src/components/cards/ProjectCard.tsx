import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '../../types';

interface ProjectCardProps {
  project: PortfolioProject;
  onViewDetails: (project: PortfolioProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="group rounded-3xl bg-white border border-[#E4E7EC] shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Project Thumbnail Image with Overlay */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07152F]/80 via-transparent to-transparent" />

          {/* Category Pill Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0B1B3A] shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Client & Year Tag */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
            <span className="truncate">{project.client}</span>
            <span className="text-slate-300 font-mono">{project.year}</span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-1.5">
            {project.name}
          </h3>
          <p className="text-xs font-semibold text-[#6C3FE8] mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#667085] leading-relaxed line-clamp-2 mb-5">
            {project.shortDesc}
          </p>

          {/* Stats Bar */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-[#F7F9FC] border border-slate-100 mb-5">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-sm font-extrabold text-[#0B1B3A]">{stat.value}</div>
                  <div className="text-[10px] text-[#667085] truncate">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[10px] font-medium text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-7 pt-0">
        <button
          onClick={() => onViewDetails(project)}
          className="w-full py-3 px-4 rounded-xl border border-[#E4E7EC] bg-white group-hover:bg-[#0B1B3A] group-hover:border-[#0B1B3A] group-hover:text-white text-[#0B1B3A] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};
