"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Smartphone, Palette, Cpu, Sparkles, Server } from 'lucide-react';
import type { ServiceItem } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Palette,
  Cpu,
  Sparkles,
  Server,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const IconComponent = ICON_MAP[service.iconName] || Globe;

  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className="group relative rounded-3xl bg-white/95 backdrop-blur-md p-7 sm:p-8 border border-[#D6E3F4] shadow-soft hover:shadow-elevated hover:border-[#1769E0]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-2"
    >
      {/* Top Animated Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] via-[#6638E8] to-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Soft Hover Radial Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1769E0]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100/80 text-[#1769E0] group-hover:bg-gradient-to-tr group-hover:from-[#1769E0] group-hover:to-[#6638E8] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:shadow-glow-blue">
            <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
          </div>

          <Badge variant="purple" size="sm" className="group-hover:scale-105 transition-transform">
            {service.badge}
          </Badge>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-[#667085] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Features list */}
        <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
          {service.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#334155] font-medium group-hover:text-[#0B1B3A] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0 group-hover:text-emerald-500 transition-colors" />
              <span>{feature}</span>
            </div>
          ))}
          {service.features.length > 4 && (
            <div className="text-[11px] font-semibold text-[#6638E8] pl-6 pt-0.5">
              +{service.features.length - 4} more specialized capabilities
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#1769E0] group-hover:text-[#6638E8] transition-colors">
        <span>Explore Service Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </div>
  );
};

