import React from 'react';
import { AboutSection } from '../sections/AboutSection';
import { ValuesSection } from '../sections/ValuesSection';
import { StatsSection } from '../sections/StatsSection';
import { ProcessSection } from '../sections/ProcessSection';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Users, Award, Shield } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-[#F7F9FC]">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-white to-[#F7F9FC] py-16 md:py-24 border-b border-[#E4E7EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="blue">ABOUT PRAVAAH TECHNOLOGY</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3A] tracking-tight">
            Engineering Digital Excellence & <span className="gradient-text-blue-purple">Long-Term Value</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            {CONTACT_CONFIG.tagline}
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection onLearnMore={() => navigate('/contact')} />

      {/* Deep Story & Philosophy Block */}
      <section className="py-16 md:py-24 bg-white border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1769E0]">
                Our Mission & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3A]">
                Building the digital infrastructure for tomorrow's market leaders.
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                At Pravaah Technology, we believe that software should not simply function — it should elevate business operations, deliver measurable ROI, and delight every end user.
              </p>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                Whether deploying mission-critical enterprise ERP systems or fine-tuning neural AI agents, we enforce rigorous engineering rigor and clean architecture standards across every single commit.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md" withArrow onClick={() => navigate('/contact')}>
                  Discuss Your Project
                </Button>
                <Button variant="outline" size="md" onClick={() => navigate('/portfolio')}>
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1769E0] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3A]">Zero Technical Debt</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Type-safe TypeScript, strict linting, modular components, and comprehensive automated test suites.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6C3FE8] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3A]">Enterprise Security</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  OWASP security practices, encrypted data storage, and strict role-based access governance.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3A]">Dedicated Squads</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Senior engineers, UI/UX architects, and DevOps leads allocated exclusively to your milestones.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3A]">Proven Track Record</h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  50+ platforms engineered with 99% client satisfaction and long-term retainer partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values & Stats */}
      <ValuesSection />
      <StatsSection />
      <ProcessSection />
    </div>
  );
};
