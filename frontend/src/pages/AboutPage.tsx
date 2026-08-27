import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Zap, Users, Code, Award, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { AboutSection } from '../sections/AboutSection';
import { StatsSection } from '../sections/StatsSection';
import { CustomerSection } from '../sections/CustomerSection';
import { CTASection } from '../components/common/CTASection';

const CORE_VALUES = [
  {
    icon: Code,
    title: 'Clean & Maintainable Code',
    desc: 'We write strict TypeScript and modular architectures so your application is robust, scalable, and easy to maintain long into the future.',
  },
  {
    icon: Users,
    title: 'Direct Developer Access',
    desc: 'Communicate directly with senior engineers and architects without multiple layers of account managers or delayed handoffs.',
  },
  {
    icon: ShieldCheck,
    title: '100% Code Ownership',
    desc: 'You own all intellectual property, source repositories, database schemas, and credentials with zero vendor lock-in.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround & Agile Milestones',
    desc: 'We ship iterative milestones with clear sprint reviews so you can test and provide feedback on real software early.',
  },
  {
    icon: Award,
    title: 'Transparent Pricing & Timelines',
    desc: 'No surprise costs or hidden fees. We provide detailed scopes of work, defined milestone deliverables, and fixed estimates.',
  },
  {
    icon: Sparkles,
    title: 'Long-Term Partnership & SLA',
    desc: 'We support our software long after launch with security patching, performance monitoring, and proactive cloud maintenance.',
  },
];

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      {/* Breadcrumbs Header */}
      <div className="bg-[#EBF2FA]/80 backdrop-blur-sm border-b border-[#D2DEEE] py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-transparent py-8 sm:py-10 border-b border-[#D2DEEE] text-center relative overflow-hidden">
        {/* Brand Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-tr from-[#1769E0]/15 via-[#6C3FE8]/12 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5 relative z-10">
          <Badge variant="blue" size="md">
            ABOUT PRAVAAH TECHNOLOGY
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
            Engineering Dependable Digital Solutions for <span className="gradient-text-blue-purple">Ambitious Companies</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#556987] max-w-2xl mx-auto leading-relaxed">
            We are a hands-on software development agency helping businesses design, build, automate, and scale web applications, mobile products, and custom operational tools.
          </p>
        </div>
      </div>

      {/* 1. Core About Us Section */}
      <AboutSection onLearnMore={() => navigate('/start-a-project')} />

      {/* 2. Core Values & Principles */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <Badge variant="purple">OUR PRINCIPLES</Badge>
            <h2 className="text-2xl font-extrabold text-[#0B1B3A]">
              How We Work & What We Stand For
            </h2>
            <p className="text-xs sm:text-sm text-[#556987]">
              The foundational standards that guide every line of code we write and every client relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-medium transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769E0] flex items-center justify-center mb-3 border border-blue-200/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A] mb-1.5">{val.title}</h3>
                  <p className="text-xs text-[#556987] leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Key Metrics */}
      <StatsSection />

      {/* 4. Customer Trust & Verified Success */}
      <CustomerSection />

      {/* 5. Consistent Action Banner */}
      <CTASection
        title="Have a Project or Idea in Mind?"
        subtitle="Talk directly with our development team about your requirements, timeline, and budget."
        buttonText="Start a Project"
        buttonLink="/start-a-project"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </div>
  );
};
