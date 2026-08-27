import React, { useState } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { ServicesStrip } from '../sections/ServicesStrip';
import { ServicesSection } from '../sections/ServicesSection';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { CustomerSection } from '../sections/CustomerSection';
import { TechSection } from '../sections/TechSection';
import { ProcessSection } from '../sections/ProcessSection';
// import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage: React.FC = () => {
  const [inquiryService, setInquiryService] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 64;
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
      const navOffset = 64;
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

      {/* 2. Services Infinite Marquee Strip & Capabilities */}
      <ServicesStrip />
      <ServicesSection onStartInquiryWithService={scrollToContact} />

      {/* 3. About Us Overview */}
      <AboutSection onLearnMore={() => scrollToSection('about')} />

      {/* 5. Key Statistics */}
      <StatsSection />

      {/* 6. Customer Success & Testimonials */}
      <CustomerSection />

      {/* 7. Technologies Stack */}
      <TechSection />

      {/* 8. Our 4-Phase Process */}
      <ProcessSection />

      {/* 9. Featured Projects & Case Studies (Temporarily commented out) */}
      {/* <ProjectsSection /> */}

      {/* 10. Contact Inquiry Form */}
      <ContactSection preselectedService={inquiryService} />
    </div>
  );
};
