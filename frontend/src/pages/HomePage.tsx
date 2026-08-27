import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { ServicesStrip } from '../sections/ServicesStrip';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { CustomerSection } from '../sections/CustomerSection';
import { ProcessSection } from '../sections/ProcessSection';
import { CTASection } from '../components/common/CTASection';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection
        onStartProject={() => {
          navigate('/start-a-project');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreServices={() => {
          navigate('/services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Services Infinite Marquee Strip */}
      <ServicesStrip />

      {/* 3. About Us Overview Preview */}
      <AboutSection
        onLearnMore={() => {
          navigate('/about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4. Key Performance Statistics */}
      <StatsSection />

      {/* 5. 6-Phase Engineering Methodology */}
      <ProcessSection />

      {/* 6. Customer Success & Testimonials */}
      <CustomerSection />

      {/* 7. Conversion CTA Banner */}
      <CTASection
        title="Ready to Build What's Next?"
        subtitle="Talk directly with our development team about your requirements, timeline, and budget."
        badge="Start Your Project"
        buttonText="Start a Project"
        buttonLink="/start-a-project"
        secondaryButtonText="Explore All Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};
