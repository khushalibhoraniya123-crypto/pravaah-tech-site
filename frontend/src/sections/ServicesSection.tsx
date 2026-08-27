import React, { useState } from 'react';
import { Badge } from '../components/common/Badge';
import { ServiceCard } from '../components/cards/ServiceCard';
import { ServiceDetailModal } from '../components/common/ServiceDetailModal';
import { SERVICES_DATA } from '../data/services';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onStartInquiryWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartInquiryWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectForInquiry = (serviceTitle: string) => {
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
    <section id="services" className="py-20 md:py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue">OUR EXPERTISE</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#081A3A] tracking-tight">
            What We <span className="gradient-text-blue-purple">Build</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            From initial strategy and modern UI/UX design to enterprise software architecture, cloud platforms and cognitive AI systems.
          </p>
        </div>

        {/* 6 Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={handleSelectService}
            />
          ))}
        </div>

      </div>

      {/* Modal View for detailed inspection */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </section>
  );
};
