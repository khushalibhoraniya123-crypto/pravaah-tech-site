"use client";

import React from 'react';
import { ArrowRight, CheckCircle, Globe, Smartphone, Palette, Cpu, Sparkles, Server } from 'lucide-react';
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
      className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-[#E4E7EC] shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-1.5"
    >
      {/* Subtle top gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1769E0] to-[#6C3FE8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 border border-blue-100/80 text-[#1769E0] group-hover:bg-gradient-to-tr group-hover:from-[#1769E0] group-hover:to-[#6C3FE8] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
            <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <Badge variant="purple" size="sm">
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
            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#334155] font-medium">
              <CheckCircle className="w-4 h-4 text-[#1769E0] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
          {service.features.length > 4 && (
            <div className="text-[11px] font-semibold text-[#6C3FE8] pl-6">
              +{service.features.length - 4} more specialized capabilities
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#1769E0] group-hover:text-[#6C3FE8] transition-colors">
        <span>Explore Service Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </div>
  );
};
