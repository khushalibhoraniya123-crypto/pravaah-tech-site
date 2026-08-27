import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AboutSection } from '../sections/AboutSection';
import { CTASection } from '../components/common/CTASection';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#FFFFFF]">
      {/* Breadcrumbs Header */}
      <div className="bg-[#F7F9FC] border-b border-[#E4E7EC] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Exact Same About Us Section Reused Directly from Home Page */}
      <AboutSection onLearnMore={() => navigate('/start-a-project')} />

      {/* Consistent Action Banner */}
      <CTASection
        title="Have a Project or Idea in Mind?"
        subtitle="Talk directly with our development team about your requirements, timeline, and budget."
        buttonText="Start a Project"
        buttonLink="/start-a-project"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};
