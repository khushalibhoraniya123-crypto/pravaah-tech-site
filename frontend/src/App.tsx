import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { CustomCursor } from './components/common/CustomCursor';
import { ToastProvider } from './context/ToastContext';

// Pages
import { HomePage } from './pages/HomePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopmentPage';
import { AISolutionsPage } from './pages/services/AISolutionsPage';
import { UIUXDesignPage } from './pages/services/UIUXDesignPage';
import { SoftwareDevelopmentPage } from './pages/services/SoftwareDevelopmentPage';
import { AutomationPage } from './pages/services/AutomationPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top or anchor handler on every route transition
const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(targetId);
        if (element) {
          const navOffset = 64;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navOffset,
            behavior: 'smooth',
          });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 60);
        }
      };
      setTimeout(() => tryScroll(), 50);
      return;
    }
    // Instant scroll to top on page change if no hash
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

// Main Layout Wrapper
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <ScrollHandler />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <Router>
        <AppLayout>
          <Routes>
            {/* Core Home Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* What We Do & Service Routes */}
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/services" element={<WhatWeDoPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/services/automation" element={<AutomationPage />} />
            
            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsPage />} />
            
            {/* About Navigation: Dedicated About Page reusing exact same AboutSection */}
            <Route path="/about" element={<AboutPage />} />

            {/* Contact & Project Initiation */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-a-project" element={<StartProjectPage />} />
            
            {/* Case Study Detail View */}
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </ToastProvider>
  );
};

export default App;
