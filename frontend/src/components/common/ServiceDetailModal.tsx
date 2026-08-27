import React from 'react';
import { X, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { Button } from './Button';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07152F]/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-[#E4E7EC] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#07152F] to-[#0B1B3A] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1769E0]/30 text-[#38BDF8] border border-[#38BDF8]/30 mb-3">
            {service.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">{service.title}</h2>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed max-w-lg">
            {service.fullDesc}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1769E0]" />
              <span>Core Service Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6C3FE8]" />
              <span>Guaranteed Deliverables</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.deliverables.map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#6C3FE8] border border-purple-200/60 text-xs font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-[#F7F9FC] border-t border-[#E4E7EC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#667085]">
            Ready to engineer your custom solution?
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
                onSelectForInquiry(service.title);
                onClose();
              }}
              className="w-full sm:w-auto"
            >
              Start Inquiry for {service.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
