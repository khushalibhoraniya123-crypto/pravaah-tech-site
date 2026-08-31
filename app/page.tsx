"use client";

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesStrip } from '@/components/sections/services-strip';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { StatsSection } from '@/components/sections/stats-section';
import { TechSection } from '@/components/sections/tech-section';
import { ProcessSection } from '@/components/sections/process-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
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

      {/* 3. About Us Section */}
      <AboutSection onLearnMore={() => scrollToSection('about')} />

      {/* 5. Performance Statistics */}
      <StatsSection />

      {/* 6. Technology Matrix */}
      <TechSection />

      {/* 7. 6-Phase Engineering Methodology */}
      <ProcessSection />

      {/* 8. Featured Projects & Case Studies */}
      <PortfolioSection onRequestSimilarProject={scrollToContact} />

      {/* 9. Contact Section powered by TanStack React Query */}
      <ContactSection preselectedService={inquiryService} />
    </div>
  );
}
