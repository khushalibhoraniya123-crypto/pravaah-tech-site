"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { PortfolioProject } from '@/types';

interface ProjectCardProps {
  project: PortfolioProject;
  onViewDetails?: (project: PortfolioProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const caseStudyUrl = `/portfolio/${project.id}`;

  return (
    <div className="group rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 h-full">
      <div>
        {/* Project Thumbnail Image with Overlay and Zoom */}
        <Link href={caseStudyUrl} className="block relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06132D]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Category Pill Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0B1B3A] shadow-xs border border-white/60">
              {project.category}
            </span>
          </div>

          {/* Client & Year Tag */}
          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
            <span className="truncate font-semibold">{project.client}</span>
            <span className="text-slate-300 font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
              {project.year}
            </span>
          </div>
        </Link>

        {/* Project Info */}
        <div className="p-6 sm:p-7">
          <Link href={caseStudyUrl} className="block">
            <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-1.5">
              {project.name}
            </h3>
          </Link>
          <p className="text-xs font-semibold text-[#6638E8] mb-3">
            {project.subtitle}
          </p>
          <p className="text-sm text-[#667085] leading-relaxed line-clamp-2 mb-5">
            {project.shortDesc}
          </p>

          {/* Stats Bar */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-2xl bg-blue-50/60 border border-blue-100/70 mb-5">
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
        <Link
          href={caseStudyUrl}
          onClick={() => onViewDetails?.(project)}
          className="w-full py-3 px-4 rounded-xl border border-[#D6E3F4] bg-white group-hover:bg-[#0B1B3A] group-hover:border-[#0B1B3A] group-hover:text-white text-[#0B1B3A] text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-soft"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};


