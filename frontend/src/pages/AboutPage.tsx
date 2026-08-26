import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Users, 
  Award, 
  Shield, 
  Layers,
  Atom, 
  Globe, 
  Code2, 
  FileCode2, 
  Palette, 
  Server, 
  Terminal, 
  Cpu, 
  Workflow, 
  Database, 
  HardDrive, 
  Table, 
  Zap, 
  Cloud, 
  Box, 
  GitBranch, 
  BrainCircuit, 
  Bot, 
  Wand2 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/common/CTASection';
import { getStatsData } from '../data/stats';
import { TECH_STACK_DATA } from '../data/techStack';

const TECH_ICON_MAP: Record<string, React.ElementType> = {
  Atom,
  Globe,
  Code2,
  FileCode2,
  Palette,
  Server,
  Layers,
  Terminal,
  Shield,
  Cpu,
  Database,
  HardDrive,
  Table,
  Zap,
  Cloud,
  Box,
  GitBranch,
  Workflow,
  Sparkles,
  BrainCircuit,
  Wand2,
  Bot,
};

export const AboutPage: React.FC = () => {
  const statsList = getStatsData();
  const [activeTechCategory, setActiveTechCategory] = useState<string>('frontend');

  const activeCategoryData = TECH_STACK_DATA.find((c) => c.id === activeTechCategory) || TECH_STACK_DATA[0];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* 1. Hero Section (Company Introduction) */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-3">
              <Breadcrumbs items={[{ label: 'About Us' }]} />
            </div>

            <div className="mb-2.5">
              <Badge variant="blue" size="md">
                ABOUT PRAVAAH TECHNOLOGY
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              Engineering Digital Excellence & Long-Term Value.
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#556987] leading-relaxed">
              We are a team of visionary technologists, software architects, and product designers dedicated to crafting intelligent systems that drive measurable commercial impact.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link to="/start-a-project">
                <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                  Work With Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="md">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision + Why Choose Us (Company Strengths) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1769E0]">
                Our Mission & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] leading-tight">
                Building the digital foundation for tomorrow's market leaders.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Pravaah Technology, we believe that software should not simply function — it should elevate business operations, deliver measurable ROI, and delight every end user.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether deploying mission-critical enterprise ERP systems or fine-tuning neural AI agents, we enforce rigorous engineering standards and clean architecture across every single deliverable.
              </p>

              <div className="pt-1 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button variant="primary" size="md" withArrow>
                    Contact Our Leadership
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-1.5 hover:border-[#1769E0]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1769E0] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1B3A]">Zero Technical Debt</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Type-safe TypeScript, strict modularity, and automated testing suites.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-1.5 hover:border-[#6C3FE8]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#6C3FE8] flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1B3A]">Enterprise Security</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  OWASP practices, encrypted data storage, and role-based access governance.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-1.5 hover:border-emerald-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1B3A]">Dedicated Squads</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Senior engineers and UI/UX architects allocated exclusively to your goals.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-1.5 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1B3A]">Proven Track Record</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  12+ projects launched with 99% client satisfaction and long-term retention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Key Statistics Section */}
      <section className="py-8 sm:py-10 bg-[#06132D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {statsList.map((stat, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white">{stat.label}</div>
                <div className="text-[11px] text-slate-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact Supporting Technology Matrix Section */}
      <section className="py-8 sm:py-10 bg-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-5 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              TECHNOLOGY EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Our Engineering Stack
            </h2>
            <p className="text-xs text-slate-600">
              Modern frameworks, cloud infrastructures, and AI models powering our client solutions.
            </p>
          </div>

          {/* Category Switcher Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-5">
            {TECH_STACK_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTechCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTechCategory === cat.id
                    ? 'bg-[#1769E0] text-white shadow-xs'
                    : 'bg-white border border-[#E4E7EC] text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.name.replace(' Engineering', '').replace(' & Caching', '').replace(' & Automation', '')}
              </button>
            ))}
          </div>

          {/* Active Category Compact Cards Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeCategoryData.items.map((tech, idx) => {
                const Icon = TECH_ICON_MAP[tech.icon] || Code2;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E4E7EC] hover:border-[#1769E0]/40 transition-all flex items-center gap-3 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#0B1B3A]">
                      <Icon className="w-4.5 h-4.5 text-[#1769E0]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-[#0B1B3A] truncate">{tech.name}</span>
                        <span className="text-[9.5px] font-semibold text-[#1769E0] bg-blue-50 px-1.5 py-0.5 rounded shrink-0">
                          {tech.highlight}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#667085] truncate leading-tight mt-0.5">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Consultation CTA */}
      <CTASection
        title="Ready to Partner with Pravaah Technology?"
        subtitle="Let’s build the technological competitive advantage your organization deserves."
        buttonText="Schedule a Consultation"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
