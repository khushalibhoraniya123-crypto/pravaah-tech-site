import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactSection } from '../sections/ContactSection';
import { Badge } from '../components/common/Badge';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white to-[#F7F9FC] py-16 md:py-24 border-b border-[#E4E7EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="blue">INITIATE CONSULTATION</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] tracking-tight">
            Start Your <span className="gradient-text-blue-purple">Project Journey</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            Connect directly with our engineering and solution architecture leads. We respond within 24 hours with an actionable roadmap.
          </p>
        </div>
      </div>

      <ContactSection preselectedService={preselectedService} />
    </div>
  );
};
