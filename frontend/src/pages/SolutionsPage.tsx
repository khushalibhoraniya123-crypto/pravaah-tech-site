import React from 'react';
import { SolutionsSection } from '../sections/SolutionsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { Badge } from '../components/common/Badge';
import { useNavigate } from 'react-router-dom';

export const SolutionsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConsult = (solutionName: string) => {
    navigate(`/contact?service=${encodeURIComponent(solutionName)}`);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white to-[#F7F9FC] py-16 md:py-24 border-b border-[#E4E7EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="purple">ENTERPRISE & INDUSTRY SUITES</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] tracking-tight">
            Specialized Business <span className="gradient-text-blue-purple">Solutions</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            Ready-to-deploy frameworks, ERP architectures, automated workflows, and cognitive AI solutions built for real business ROI.
          </p>
        </div>
      </div>

      <SolutionsSection onConsultSolution={handleConsult} />
      <ProcessSection />
    </div>
  );
};
