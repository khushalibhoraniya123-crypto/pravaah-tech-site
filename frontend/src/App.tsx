import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';

// Pages
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';

// Scroll to top helper or hash anchor scroll on navigation
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth',
        });
        return;
      }
    }
    if (!hash && pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

// Main Layout Wrapper
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollHandler />
      {!isAdmin && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingActions />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <AppLayout>
            <Routes>
              {/* Single-Page Master Website */}
              <Route path="/" element={<HomePage />} />
              
              {/* Protected Admin Portal */}
              <Route path="/admin" element={<AdminPage />} />
              
              {/* All other routes fallback to master single-page view */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </AppLayout>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;
