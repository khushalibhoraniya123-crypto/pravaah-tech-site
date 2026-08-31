"use client";

import React, { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesStrip } from '@/components/sections/services-strip';
import { ServicesSection } from '@/components/sections/services-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TechSection } from '@/components/sections/tech-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CtaBannerSection } from '@/components/sections/cta-banner-section';
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

      {/* 2. About Us Section & Performance Statistics */}
      <AboutSection onLearnMore={() => scrollToContact('General Technical Consultation')} />
      <StatsSection />

      {/* 3. Services & Solutions Section */}
      <ServicesStrip />
      <ServicesSection onStartInquiryWithService={scrollToContact} />
      <SolutionsSection onConsultSolution={(solutionName) => scrollToContact(`Solution: ${solutionName}`)} />

      {/* 4. Our Process Section */}
      <ProcessSection />

      {/* 5. Technologies Section (Technology Matrix) */}
      <TechSection />

      {/* 6. Why Pravaah / Why Businesses Choose Pravaah Technology */}
      <WhyChooseUsSection onConsult={() => scrollToContact('Enterprise Consultation')} />

      {/* 7. Featured Projects Section */}
      <PortfolioSection onRequestSimilarProject={scrollToContact} />

      {/* 8. Testimonials Section & CTA Banner */}
      <TestimonialsSection />
      <CtaBannerSection onStartProject={() => scrollToContact()} />

      {/* 9. Contact Us Section */}
      <ContactSection preselectedService={inquiryService} />
    </div>
  );
}
