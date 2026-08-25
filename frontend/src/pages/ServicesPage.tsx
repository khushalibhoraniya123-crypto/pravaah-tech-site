import React from 'react';
import { ServicesSection } from '../sections/ServicesSection';
import { TechSection } from '../sections/TechSection';
import { ProcessSection } from '../sections/ProcessSection';
import { Badge } from '../components/common/Badge';
import { useNavigate } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleInquiry = (serviceName: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white to-[#F7F9FC] py-16 md:py-24 border-b border-[#E4E7EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="blue">END-TO-END CAPABILITIES</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] tracking-tight">
            Full-Spectrum <span className="gradient-text-blue-purple">Technology Services</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            From modern web applications and mobile apps to custom enterprise ERP, AI automation, and cloud architecture.
          </p>
        </div>
      </div>

      <ServicesSection onStartInquiryWithService={handleInquiry} />
      <TechSection />
      <ProcessSection />
    </div>
  );
};
