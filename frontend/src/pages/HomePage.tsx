import React, { useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ServicesStrip } from '../sections/ServicesStrip';
import { ServicesSection } from '../sections/ServicesSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { AboutSection } from '../sections/AboutSection';
import { ValuesSection } from '../sections/ValuesSection';
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
      const navOffset = 80;
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
      const navOffset = 80;
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
        onExploreWork={() => scrollToSection('portfolio')}
      />

      {/* 2. Services Strip & What We Build */}
      <ServicesStrip />
      <ServicesSection onStartInquiryWithService={scrollToContact} />

      {/* 3. Solutions Section */}
      <SolutionsSection onConsultSolution={(s) => scrollToContact(s)} />

      {/* 4. About Us */}
      <AboutSection onLearnMore={() => scrollToSection('about')} />

      {/* 5. Our Values & Statistics */}
      <ValuesSection />
      <StatsSection />

      {/* 6. Technologies */}
      <TechSection />

      {/* 7. Our Process */}
      <ProcessSection />

      {/* 8. Portfolio / Projects */}
      <PortfolioSection onRequestSimilarProject={scrollToContact} />

      {/* 9. Contact Section */}
      <ContactSection preselectedService={inquiryService} />
    </div>
  );
};
