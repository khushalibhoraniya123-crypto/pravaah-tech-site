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
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  Boxes,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';

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
    title: 'Business Automation & Workflow RPA',
    badge: '70% Time Saved',
    icon: Zap,
    description: 'Automate manual data entry, invoice parsing, and cross-platform workflows with high-accuracy event-driven pipelines.',
    capabilities: [
      'AI OCR document & invoice data extraction',
      'Automated 2-way sync with ERP accounting ledgers',
      '24/7 background event triggers & alert notifications',
    ],
    highlight: 'Impact: Cuts monthly processing time from days to hours',
    linkParam: 'Business Automation & RPA',
  },
  {
    id: 'ai-business-solutions',
    category: 'ai',
    title: 'AI-Powered Business Solutions & RAG',
    badge: '14 hrs Saved/Wk',
    icon: Sparkles,
    description: 'Deploy private generative AI workspaces and 24/7 autonomous support agents trained securely on internal corporate data.',
    capabilities: [
      'Grounded vector RAG knowledge search & citations',
      'Autonomous tier-1 customer query resolution',
      'Zero-retention private cloud security guardrails',
    ],
    highlight: 'Impact: 85%+ automated first-pass resolution rate',
    linkParam: 'AI-Powered Business Solutions',
  },
  {
    id: 'digital-transformation',
    category: 'cloud',
    title: 'Digital Transformation & Cloud Modernization',
    badge: '99.99% Uptime',
    icon: TrendingUp,
    description: 'Modernize legacy monolithic systems into scalable, containerized cloud microservices with sub-second responsive frontends.',
    capabilities: [
      'Decoupled Docker & Kubernetes microservice clusters',
      'Sub-second edge CDN response times globally',
      'Automated disaster recovery & zero-downtime CI/CD',
    ],
    highlight: 'Impact: 4x faster feature velocity with zero server crashes',
    linkParam: 'Digital Transformation & Cloud',
  },
  {
    id: 'enterprise-erp-crm',
    category: 'erp',
    title: 'Custom Enterprise ERP & CRM Systems',
    badge: '$0 Per-Seat Tax',
    icon: Layers,
    description: 'Centralize inventory, order routing, payroll, and customer accounts under a unified dashboard tailored to your operations.',
    capabilities: [
      'Multi-warehouse inventory & barcode scanning',
      'Granular role-based staff permissions (RBAC)',
      '100% client-owned code with zero per-seat fees',
    ],
    highlight: 'Impact: Saves $180,000+ in annual SaaS license fees',
    linkParam: 'Custom Enterprise ERP & CRM',
  },
  {
    id: 'workflow-analytics',
    category: 'analytics',
    title: 'Workflow Optimization & Real-Time Analytics',
    badge: 'Real-Time P&L',
    icon: BarChart3,
    description: 'Aggregate live data into executive telemetry dashboards to identify profit leaks and automate financial reconciliations.',
    capabilities: [
      'Real-time revenue, inventory & funnel telemetry',
      'Automated balance auditing & reconciliation',
      'Immutable cryptographic event logs for compliance',
    ],
    highlight: 'Impact: +52% faster operational decision velocity',
    linkParam: 'Workflow Optimization & Analytics',
  },
  {
    id: 'fintech-solutions',
    category: 'erp',
    title: 'Fintech & Secure Settlement Gateways',
    badge: 'Bank-Grade SLA',
    icon: DollarSign,
    description: 'Build high-throughput payment reconciliation engines, wealth management portals, and multi-currency settlement gateways.',
    capabilities: [
      'Multi-tier automated KYC & AML verification',
      'Real-time transaction fraud anomaly triggers',
      'PCI-DSS Level 1 compliant data architecture',
    ],
    highlight: 'Impact: Sub-180ms transaction settlement latency',
    linkParam: 'Fintech & Transaction Systems',
  },
];

interface IndustryBlueprint {
  id: string;
  name: string;
  icon: React.ElementType;
  badge: string;
  description: string;
  capabilities: string[];
  highlight: string;
  linkParam: string;
}

const INDUSTRY_BLUEPRINTS: IndustryBlueprint[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Telehealth',
    icon: HeartPulse,
    badge: 'HIPAA Compliant',
    description: 'Encrypted WebRTC consultation rooms, unified electronic medical records, and automated patient scheduling.',
    capabilities: [
      'End-to-end encrypted video consultation rooms',
      'Automated doctor calendar & patient SMS reminders',
      'Digital e-prescription & pharmacy API routing',
    ],
    highlight: 'Impact: 65% reduction in patient appointment wait times',
    linkParam: 'Healthcare & Telehealth Suite',
  },
  {
    id: 'fintech',
    name: 'Finance & Asset Management',
    icon: DollarSign,
    badge: 'Bank-Grade Security',
    description: 'Real-time multi-asset portfolios, automated bank reconciliations, and multi-tier KYC verification engines.',
    capabilities: [
      'Real-time multi-currency settlement ledger',
      'Automated bank API payment reconciliation',
      'Real-time fraud anomaly detection & alerts',
    ],
    highlight: 'Impact: Instant real-time multi-bank reconciliation',
    linkParam: 'Finance & Asset Management Suite',
  },
  {
    id: 'commerce',
    name: 'Retail & Headless Commerce',
    icon: ShoppingBag,
    badge: 'Sub-Second Speed',
    description: 'Headless Next.js 15 storefronts with dynamic multi-currency checkouts and real-time inventory syncing.',
    capabilities: [
      'Sub-0.8s global page load speeds via edge CDN',
      'Multi-warehouse dynamic inventory sync',
      'Custom 1-click checkout & payment routing',
    ],
    highlight: 'Impact: +38% increase in mobile checkout conversions',
    linkParam: 'Retail & Headless Commerce Suite',
  },
  {
    id: 'education',
    name: 'Education & Virtual LMS',
    icon: GraduationCap,
    badge: 'FERPA Ready',
    description: 'Interactive virtual classrooms, automated grading engines, and gamified student progress tracking.',
    capabilities: [
      'Live HD interactive virtual classroom engine',
      'Automated assessment & gradebook builder',
      'Automated verified certificate generation',
    ],
    highlight: 'Impact: Scales effortlessly to 100k+ concurrent learners',
    linkParam: 'Education & Virtual LMS Suite',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurant POS',
    icon: UtensilsCrossed,
    badge: 'POS & KDS',
    description: 'Contactless QR table ordering, live kitchen display systems, and automated recipe inventory tracking.',
    capabilities: [
      'Contactless QR digital ordering & mobile pay',
      'Real-time Kitchen Display System (KDS)',
      'Live ingredient costing & stock deduction',
    ],
    highlight: 'Impact: +28% faster table turnover velocity',
    linkParam: 'Hospitality & Restaurant POS Suite',
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    icon: Boxes,
    badge: 'Supply Chain',
    description: 'Multi-location barcode warehouse scanning, route optimization, and live customer shipment webhooks.',
    capabilities: [
      'Multi-warehouse barcode & QR mobile scanning',
      'Predictive low-stock replenishment triggers',
      'Automated courier dispatch & route optimization',
    ],
    highlight: 'Impact: Zero unscheduled inventory stockouts',
    linkParam: 'Logistics & Warehousing Suite',
  },
];

export const SolutionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Solutions' },
    { id: 'automation', label: 'Automation & RPA' },
    { id: 'ai', label: 'Enterprise AI' },
    { id: 'cloud', label: 'Cloud Modernization' },
    { id: 'erp', label: 'ERP & Software' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const filteredSolutions = activeCategory === 'all'
    ? ALL_SOLUTIONS
    : ALL_SOLUTIONS.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* 1. Hero Section (Compact & Focused) */}
      <section className="relative py-8 sm:py-10 overflow-hidden bg-gradient-to-b from-[#06132D] via-[#081A3A] to-[#06132D] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-2.5">
            
            <div className="flex justify-center mb-1">
              <Breadcrumbs items={[{ label: 'Solutions' }]} className="text-slate-400" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8]">
              <Building2 className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>OUTCOME-DRIVEN BUSINESS SOLUTIONS</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise Solutions That Solve <span className="gradient-text-blue-purple">Real Business Friction</span>.
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We engineer custom, outcome-focused technology systems that eliminate manual bottlenecks, unite fragmented departments, and deliver quantifiable commercial ROI.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="text-[#38BDF8] font-extrabold">+45%</span>
                <span>Operating Speed</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00D2FF] font-extrabold">70%</span>
                <span>Manual Time Saved</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-extrabold">$0</span>
                <span>Per-Seat License Tax</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Business Solutions Section */}
      <section className="py-8 sm:py-10 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title & Filter Tabs */}
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1.5">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Strategic Solutions by Business Goal
            </h2>
            <p className="text-xs text-slate-600">
              Choose a category to explore our tailored problem-solving architectures.
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
                      : 'bg-white text-slate-700 border border-[#E4E7EC] hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Unified Compact Solutions Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E4E7EC] hover:border-[#1769E0]/40 hover:shadow-medium transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1769E0] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#1769E0] bg-blue-50 px-2 py-0.5 rounded-full">
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
                    <div className="space-y-1.5 mb-3 pt-2 border-t border-slate-100">
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
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700 mb-3 truncate">
                      {sol.highlight}
                    </div>

                    {/* Compact CTA Link */}
                    <Link
                      to={`/start-a-project?solution=${encodeURIComponent(sol.linkParam)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Pre-Engineered Turnkey Industry Suites (Same Compact System) */}
      <section className="py-8 sm:py-10 bg-white border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              INDUSTRY FRAMEWORKS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Pre-Engineered Industry Blueprints
            </h2>
            <p className="text-xs text-slate-600">
              Turnkey compliance and operational workflows customized for high-growth sectors.
            </p>
          </div>

          {/* Unified Industry Grid (Same Card Sizing & Hierarchy) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {INDUSTRY_BLUEPRINTS.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] hover:border-[#1769E0]/40 hover:shadow-medium transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1769E0] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                        {ind.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-1.5">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                      {ind.description}
                    </p>

                    {/* Max 3 Capabilities */}
                    <div className="space-y-1.5 mb-3 pt-2 border-t border-slate-200/80">
                      {ind.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* 1-Line Compact Highlight */}
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 mb-3 truncate">
                      {ind.highlight}
                    </div>

                    {/* Compact CTA Link */}
                    <Link
                      to={`/start-a-project?solution=${encodeURIComponent(ind.linkParam)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors"
                    >
                      <span>Request Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Strategic Comparison: Custom Solutions vs Generic SaaS */}
      <section className="py-8 sm:py-10 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              STRATEGIC ADVANTAGE
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Custom Software vs. Off-The-Shelf SaaS
            </h2>
            <p className="text-xs text-slate-600">
              Why fast-growing businesses replace bloated SaaS subscriptions with bespoke technology.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#E4E7EC] overflow-hidden shadow-soft">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#06132D] text-white text-[11px] uppercase tracking-wider">
                  <th className="p-3.5 font-bold">Key Architectural Decision</th>
                  <th className="p-3.5 font-bold text-rose-300 bg-[#081A3A]">Generic SaaS Tools</th>
                  <th className="p-3.5 font-bold text-emerald-400 bg-[#07152F]">Pravaah Custom Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Recurring User License Costs</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">$150–$300 / user / month</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">$0 Recurring License Tax (Unlimited Users)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Workflow Customization</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Forces rigid workarounds</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">100% Tailored to your competitive advantage</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Data Sovereignty & IP</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Vendor lock-in on shared DB</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">100% Client-Owned Private Cloud & IP</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#0B1B3A]">Legacy System Integration</td>
                  <td className="p-3.5 text-rose-600 bg-rose-50/20">Limited paid API connectors</td>
                  <td className="p-3.5 text-emerald-700 font-bold bg-emerald-50/20">Bespoke 2-way database & API sync</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. 4-Step Strategic Transformation Roadmap (Matching Compact System) */}
      <section className="py-8 sm:py-10 bg-white border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#1769E0] uppercase tracking-wider">
              EXECUTION BLUEPRINT
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              The 4-Step Transformation Roadmap
            </h2>
            <p className="text-xs text-slate-600">
              A proven methodology from operational discovery to continuous SLA scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: 'Phase 01', title: 'Operational Audit', desc: 'Diagnose workflow bottlenecks and compute projected ROI.' },
              { phase: 'Phase 02', title: 'Interactive Prototype', desc: 'Interactive UX and validated database schemas with department heads.' },
              { phase: 'Phase 03', title: 'Agile Engineering', desc: 'Sprints with legacy data migration and automated security testing.' },
              { phase: 'Phase 04', title: 'Deployment & SLA', desc: 'Production rollout with staff training and continuous 24/7 SLA monitoring.' },
            ].map((st, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] space-y-1">
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
        title="Ready to Build Your Custom Enterprise Solution?"
        subtitle="Schedule a free technical architecture consultation with our senior solution engineers."
        buttonText="Start a Project"
        buttonLink="/start-a-project"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />

    </div>
  );
};
