import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Building2,
  BarChart3,
  DollarSign,
  ArrowRight,
  Globe,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Bot
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { ParticleBackground } from '../components/common/ParticleBackground';

interface SolutionItem {
  id: string;
  category: 'all' | 'automation' | 'ai' | 'cloud' | 'erp' | 'analytics';
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  capabilities: string[];
  highlight: string;
  linkParam: string;
}

const ALL_SOLUTIONS: SolutionItem[] = [
  {
    id: 'business-automation',
    category: 'automation',
    title: 'Workflow & Task Automation',
    badge: 'Save Manual Hours',
    icon: Zap,
    description: 'Automate repetitive tasks, invoice processing, and cross-tool data entry with dependable background pipelines.',
    capabilities: [
      'Automated document & invoice data reading',
      'Direct 2-way sync with your accounting software',
      'Automated notifications and status alerts',
    ],
    highlight: 'Key benefit: Eliminates hours of manual data entry weekly',
    linkParam: 'Workflow & Task Automation',
  },
  {
    id: 'ai-business-solutions',
    category: 'ai',
    title: 'AI Assistants & Smart Search',
    badge: 'Practical AI',
    icon: Sparkles,
    description: 'Add smart document search, automated customer support chatbots, and internal AI tools trained safely on your company knowledge.',
    capabilities: [
      'Fast document search with source references',
      'Smart customer query auto-replies',
      'Private data setup with zero public sharing',
    ],
    highlight: 'Key benefit: Quick answers for both your team and customers',
    linkParam: 'AI Assistants & Smart Search',
  },
  {
    id: 'digital-transformation',
    category: 'cloud',
    title: 'Cloud Migration & Modernization',
    badge: 'Reliable Hosting',
    icon: TrendingUp,
    description: 'Upgrade outdated systems to secure cloud setups with fast loading speeds, automated backups, and zero surprise crashes.',
    capabilities: [
      'Containerized hosting (Docker & Kubernetes)',
      'Fast global loading via content delivery networks (CDN)',
      'Automated daily database backups & recovery',
    ],
    highlight: 'Key benefit: Stable, fast platforms that handle traffic spikes',
    linkParam: 'Cloud Migration & Modernization',
  },
  {
    id: 'enterprise-erp-crm',
    category: 'erp',
    title: 'Custom ERP & Management Software',
    badge: 'No Per-User Fees',
    icon: Layers,
    description: 'Bring inventory, orders, staff accounts, and client records into one straightforward dashboard built specifically for your team.',
    capabilities: [
      'Inventory tracking & barcode scanning',
      'Custom user permissions & staff roles',
      'Full code ownership with zero monthly per-user fees',
    ],
    highlight: 'Key benefit: A tool tailored to your exact daily operations',
    linkParam: 'Custom ERP & Management Software',
  },
  {
    id: 'workflow-analytics',
    category: 'analytics',
    title: 'Business Analytics & Reports',
    badge: 'Live Dashboard',
    icon: BarChart3,
    description: 'Connect your sales, stock, and expense data into clear executive dashboards so you can make informed decisions quickly.',
    capabilities: [
      'Live revenue, stock, and sales activity metrics',
      'Automated end-of-month financial summaries',
      'Exportable CSV and PDF reports',
    ],
    highlight: 'Key benefit: Accurate numbers at a glance anytime',
    linkParam: 'Business Analytics & Reports',
  },
  {
    id: 'fintech-solutions',
    category: 'erp',
    title: 'Payment & Billing Portals',
    badge: 'Secure Billing',
    icon: DollarSign,
    description: 'Build custom subscription billing systems, secure customer portals, and automated payment gateway reconciliations.',
    capabilities: [
      'Stripe, Razorpay & bank gateway integration',
      'Automated invoice generation & PDF receipts',
      'Encrypted client billing records & payment logs',
    ],
    highlight: 'Key benefit: Hassle-free customer payments and clear records',
    linkParam: 'Payment & Billing Portals',
  },
];

interface TechSolutionCard {
  id: string;
  title: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  href: string;
}

const TECH_SOLUTIONS_DATA: TechSolutionCard[] = [
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    tag: 'Smart Workflows',
    icon: Bot,
    description: 'AI-assisted tools, smart document search, and workflow automation scripts to save your team hours of repetitive work.',
    highlights: ['Custom AI Chatbots & Smart Search', 'Document Reading & Data Extraction', 'Automated Daily Workflows'],
    href: '/services/ai-solutions',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    tag: 'Web & Portals',
    icon: Globe,
    description: 'Modern, responsive, and fast websites and web applications built with clean code and smooth user navigation.',
    highlights: ['React & Next.js Frameworks', 'Fast Page Load Speeds', 'Mobile Responsive & Search-Ready'],
    href: '/services/web-development',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    tag: 'Custom Tools',
    icon: Code2,
    description: 'Custom software, management tools, and ERP portals designed around your team’s exact daily business processes.',
    highlights: ['Custom Business Dashboards', 'Secure Backend APIs', '100% Client Code Ownership'],
    href: '/services/software-development',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    tag: 'iOS & Android',
    icon: Smartphone,
    description: 'Practical mobile applications designed to run smoothly on both Android and iOS devices with intuitive layouts.',
    highlights: ['Cross-Platform (Flutter / React Native)', 'Push Notifications & Offline Support', 'Smooth, Simple User Interface'],
    href: '/start-a-project?solution=Mobile%20App%20Development',
  },
  {
    id: 'cloud-api',
    title: 'Cloud & API Integration',
    tag: 'Cloud & Sync',
    icon: Cloud,
    description: 'Reliable cloud hosting setup, database management, and seamless third-party software and payment API connections.',
    highlights: ['Cloud Setup & Deployments', 'RESTful API Connections', 'Automated Backups & Monitoring'],
    href: '/start-a-project?solution=Cloud%20%26%20API%20Solutions',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tag: 'Product Design',
    icon: Palette,
    description: 'Clean, modern wireframes, interactive prototypes, and design systems in Figma that make your products easy to use.',
    highlights: ['Clickable Figma Prototypes', 'Complete Design Systems', 'User Journey & Wireframe Planning'],
    href: '/services/ui-ux-design',
  },
];

export const SolutionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Solutions' },
    { id: 'automation', label: 'Automation & RPA' },
    { id: 'ai', label: 'AI Tools' },
    { id: 'cloud', label: 'Cloud & Web' },
    { id: 'erp', label: 'Custom Software' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const filteredSolutions = activeCategory === 'all'
    ? ALL_SOLUTIONS
    : ALL_SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* 1. Hero Section */}
      <section className="relative py-8 sm:py-10 overflow-hidden bg-gradient-to-b from-[#06132D] via-[#081A3A] to-[#06132D] text-white border-b border-white/10">
        {/* Particle background & Brand lighting */}
        <ParticleBackground />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6C3FE8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-2.5">
            
            <div className="flex justify-center mb-1">
              <Breadcrumbs items={[{ label: 'Solutions' }]} className="text-slate-400" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8]">
              <Building2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>PRACTICAL BUSINESS SOLUTIONS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Software Solutions Built for <span className="gradient-text-blue-purple">Everyday Work</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We design and build custom software that simplifies your business processes, eliminates manual paperwork, and helps your team get work done smoothly.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-[#38BDF8] font-extrabold">100%</span>
                <span>Custom Built</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00D2FF] font-extrabold">Zero</span>
                <span>Monthly Per-User Fees</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-extrabold">Direct</span>
                <span>Developer Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Business Solutions by Goal */}
      <section className="py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Title & Filter Tabs */}
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1.5">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              TAILORED SOLUTIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Choose a Solution by Business Goal
            </h2>
            <p className="text-xs text-slate-600">
              Filter through our core solutions to find what fits your current operational needs.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#1769E0] text-white shadow-xs'
                      : 'bg-white/90 text-slate-700 border border-[#D2DEEE] hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white via-[#F7FAFD] to-[#EDF3FB] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-medium transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-200/60 flex items-center justify-center text-[#1769E0] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#1769E0] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                        {sol.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-1.5">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                      {sol.description}
                    </p>

                    {/* Max 3 Capabilities */}
                    <div className="space-y-1.5 mb-3 pt-2 border-t border-[#D2DEEE]">
                      {sol.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* 1-Line Compact Highlight */}
                    <div className="p-2 rounded-lg bg-[#E5EEF9]/70 border border-[#D2DEEE] text-[11px] font-semibold text-slate-700 mb-3 truncate">
                      {sol.highlight}
                    </div>

                    {/* Compact CTA Link */}
                    <Link
                      to={`/start-a-project?solution=${encodeURIComponent(sol.linkParam)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors"
                    >
                      <span>Discuss This Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Technology Solutions Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              TECHNOLOGY SOLUTIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
              Software Services Designed for <span className="gradient-text-blue-purple">Your Needs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore our core technology services designed to make your web, mobile, and internal operations reliable.
            </p>
          </div>

          {/* 6 Technology Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TECH_SOLUTIONS_DATA.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F6F9FD] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#1769E0] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10.5px] font-semibold text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                        {card.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-1.5 group-hover:text-[#1769E0] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-2">
                      {card.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-4 pt-2.5 border-t border-[#D2DEEE]">
                      {card.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-2">
                    <Link
                      to={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#081A3A] transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Strategic Comparison: Custom Solutions vs Generic SaaS */}
      <section className="py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              PRACTICAL COMPARISON
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Custom Software vs. Off-The-Shelf Tools
            </h2>
            <p className="text-xs text-slate-600">
              Why many growing companies choose custom software over generic monthly subscriptions.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-white to-[#F7FAFD] border border-[#D2DEEE] overflow-hidden shadow-soft">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#06132D] text-white text-[11px] uppercase tracking-wider">
                  <th className="p-3.5 font-bold">Key Consideration</th>
                  <th className="p-3.5 font-bold text-rose-300 bg-[#081A3A]">Generic SaaS Tools</th>
                  <th className="p-3.5 font-bold text-emerald-400 bg-[#07152F]">Pravaah Custom Software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D2DEEE] text-slate-700">
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Monthly Per-User Fees</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">$30–$150 per staff member / month</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">$0 Monthly per-user cost (Unlimited staff)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Custom Workflows</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Forces your team into rigid templates</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">Built to match your exact team process</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Data Ownership</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Stored on 3rd party shared servers</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">100% Owned by your business</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">System Integrations</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Requires paid add-ons or plugins</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">Directly connected to your tools & APIs</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. 4-Step Roadmap */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-t border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              HOW WE WORK
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Our 4-Step Development Process
            </h2>
            <p className="text-xs text-slate-600">
              A straightforward process from initial discussion to launch and support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: 'Step 01', title: 'Consultation & Goals', desc: 'We review your requirements, discuss features, and provide a clear timeline.' },
              { phase: 'Step 02', title: 'UI/UX Prototype', desc: 'We design clear wireframes and clickable screens for your feedback.' },
              { phase: 'Step 03', title: 'Coding & Testing', desc: 'We write clean code and test features across browsers and mobile screens.' },
              { phase: 'Step 04', title: 'Launch & Support', desc: 'We deploy to your live domain and provide ongoing maintenance support.' },
            ].map((st, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/90 border border-[#D2DEEE] space-y-1 shadow-xs">
                <span className="text-[11px] font-mono font-bold text-[#1769E0] uppercase">{st.phase}</span>
                <h3 className="text-sm font-bold text-[#0B1B3A]">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-snug">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Consultation CTA */}
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
