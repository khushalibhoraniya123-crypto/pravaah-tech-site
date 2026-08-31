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
import { ServiceCard } from '@/components/cards/service-card';
import { SERVICES_DATA } from '@/data/services';
import type { ServiceItem } from '@/types';
import { CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

interface ServicesSectionProps {
  onStartInquiryWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartInquiryWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectForInquiry = (serviceTitle: string) => {
    setSelectedService(null);
    if (onStartInquiryWithService) {
      onStartInquiryWithService(serviceTitle);
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-[#EAF2FC] via-[#F4F1FD]/60 to-[#E8F1FB] relative overflow-hidden border-b border-[#D8E4F5]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#6638E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <Badge variant="blue">OUR EXPERTISE</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#081A3A] tracking-tight">
              What We <span className="gradient-text-blue-purple">Build</span>
            </h2>
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              From initial strategy and modern UI/UX design to enterprise software architecture, cloud platforms and cognitive AI systems.
            </p>
          </div>
        </Reveal>

        {/* 6 Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 75} direction="up">
              <ServiceCard
                service={service}
                onSelect={handleSelectService}
              />
            </Reveal>
          ))}
        </div>

      </div>

      {/* shadcn Dialog for detailed service inspection */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-3xl border-none">
            {/* Header Ribbon */}
            <div className="bg-gradient-to-r from-[#07152F] to-[#0B1B3A] text-white p-6 sm:p-8">
              <Badge variant="blue" className="mb-3">
                {selectedService.badge}
              </Badge>
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white text-left">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-slate-300 text-sm mt-2 leading-relaxed text-left">
                  {selectedService.fullDesc}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Core Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1769E0]" />
                  <span>Core Service Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
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
                  {selectedService.deliverables.map((item, i) => (
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
                  {selectedService.technologies.map((tech, i) => (
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
                <Button variant="outline" size="sm" onClick={() => setSelectedService(null)} className="w-full sm:w-auto">
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  withArrow
                  onClick={() => handleSelectForInquiry(selectedService.title)}
                  className="w-full sm:w-auto"
                >
                  Start Inquiry for {selectedService.title}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
