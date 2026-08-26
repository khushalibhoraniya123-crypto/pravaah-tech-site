import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { ContactSection } from '../sections/ContactSection';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC] border-b border-[#E4E7EC] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-3">
              <Breadcrumbs items={[{ label: 'Contact' }]} />
            </div>

            <div className="mb-2.5">
              <Badge variant="blue" size="md">
                GET IN TOUCH WITH PRAVAAH
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              Let's Discuss Your Technology Roadmap.
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#556987] leading-relaxed">
              Connect directly with our engineering and solution architecture leads. We review every inquiry and respond within 24 hours with an actionable roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection preselectedService={preselectedService} />

    </div>
  );
};
