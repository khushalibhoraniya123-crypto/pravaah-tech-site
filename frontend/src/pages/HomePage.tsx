import React, { useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ServicesStrip } from '../sections/ServicesStrip';
import { ServicesSection } from '../sections/ServicesSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { TechSection } from '../sections/TechSection';
import { ProcessSection } from '../sections/ProcessSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  const [inquiryService, setInquiryService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection
        onStartProject={() => scrollToContact()}
        onExploreServices={() => scrollToSection('services')}
      />

      {/* 2. Services Marquee Strip & What We Build */}
      <ServicesStrip />
      <ServicesSection onStartInquiryWithService={scrollToContact} />

      {/* 3. Industry Solutions Section */}
      <SolutionsSection onConsultSolution={(s) => scrollToContact(s)} />

      {/* 4. About Us Section */}
      <AboutSection onLearnMore={() => scrollToSection('about')} />

      {/* 5. Performance Statistics */}
      <StatsSection />

      {/* 6. Technology Matrix */}
      <TechSection />

      {/* 7. 6-Phase Engineering Methodology */}
      <ProcessSection />

      {/* 8. Featured Projects & Case Studies */}
      <PortfolioSection onRequestSimilarProject={scrollToContact} />

      {/* 9. Contact Section */}
      <ContactSection preselectedService={inquiryService} />
    </div>
  );
};
