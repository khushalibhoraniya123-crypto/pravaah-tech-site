import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 text-[#1769E0] flex items-center justify-center mx-auto shadow-soft">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6C3FE8]">404 Error</span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1B3A]">Page Not Found</h1>
          <p className="text-sm text-[#667085] leading-relaxed">
            The page you are searching for might have been relocated, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
