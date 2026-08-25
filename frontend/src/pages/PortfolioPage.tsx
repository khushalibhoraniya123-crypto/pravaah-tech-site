import React from 'react';
import { PortfolioSection } from '../sections/PortfolioSection';
import { Badge } from '../components/common/Badge';
import { useNavigate } from 'react-router-dom';

export const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRequestSimilar = (projectName: string) => {
    navigate(`/contact?service=${encodeURIComponent(`Similar project to ${projectName}`)}`);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white to-[#F7F9FC] py-16 md:py-24 border-b border-[#E4E7EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="blue">PROVEN DIGITAL DELIVERIES</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] tracking-tight">
            Case Studies & <span className="gradient-text-blue-purple">Client Portfolio</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            A showcase of web applications, custom enterprise platforms, mobile apps, and generative AI systems delivered with precision.
          </p>
        </div>
      </div>

      <PortfolioSection onRequestSimilarProject={handleRequestSimilar} />
    </div>
  );
};
