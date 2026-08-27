import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { CustomCursor } from './components/common/CustomCursor';
import { ToastProvider } from './context/ToastContext';

// Pages
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
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
          const navOffset = 70;
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
            {/* Master Single-Page Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Direct Section Alias Redirects */}
            <Route path="/services" element={<HomePage />} />
            <Route path="/solutions" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/process" element={<HomePage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/start-a-project" element={<HomePage />} />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/terms" element={<TermsConditionsPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </ToastProvider>
  );
};

export default App;
