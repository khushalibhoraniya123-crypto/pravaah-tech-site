import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Sparkles, 
  Palette, 
  Cpu, 
  Zap, 
  Server,
  ArrowRight, 
  CheckCircle2, 
  Terminal,
  Code2,
  ChevronRight
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { CTASection } from '../components/common/CTASection';

// Code snippets for interactive hero terminal
const CODE_SNIPPETS: Record<string, { title: string; lang: string; badge: string; code: string; highlight: string }> = {
  web: {
    title: 'Enterprise Web Platform',
    lang: 'TypeScript / React 19',
    badge: 'Sub-second TTFB',
    highlight: 'Next.js 15 App Router + Edge Caching',
    code: `// Modern Edge-Rendered Enterprise Web Architecture
export const EnterprisePlatform = async ({ tenantId }: { tenantId: string }) => {
  const dataset = await fetchTenantCache(tenantId, { next: { revalidate: 60 } });
  
  return (
    <div className="grid grid-cols-12 gap-6 font-sans">
      <TelemetryDashboard metrics={dataset.realtime} />
      <GlobalSearchEngine latency="<45ms" status="OPTIMAL" />
      <SecurityShield cipher="AES-256-GCM" verified={true} />
    </div>
  );
};`,
  },
  ai: {
    title: 'Autonomous RAG AI Agent',
    lang: 'Python / LangChain',
    badge: 'Zero Hallucination',
    highlight: 'Vector Grounding + Multi-Step Tooling',
    code: `# Production Multi-Tenant RAG & Tool Execution Agent
class AutonomousResearchAgent:
    def __init__(self, vector_db: PineconeClient, llm: ChatModel):
        self.retriever = vector_db.as_retriever(top_k=8, similarity="cosine")
        self.guardrails = SecurityGuardrails(zero_data_retention=True)

    async def execute_task(self, query: str, context: TenantContext) -> AgentResponse:
        docs = await self.retriever.aget_relevant_documents(query, filter=context.tenant_filter)
        grounded_answer = await self.llm.ainvoke_with_citations(query=query, context=docs)
        return self.guardrails.sanitize(grounded_answer)`,
  },
  uiux: {
    title: 'Design Tokens & Atomic Kit',
    lang: 'JSON / Design System',
    badge: 'WCAG AA 100%',
    highlight: 'Figma Token Sync + Responsive Breakpoints',
    code: `{
  "pravaah-tokens": {
    "color": {
      "brand-primary": { "value": "#1769E0", "type": "color" },
      "brand-purple": { "value": "#6C3FE8", "type": "color" },
      "surface-dark": { "value": "#06132D", "type": "color" }
    },
    "typography": {
      "font-heading": "Plus Jakarta Sans, sans-serif",
      "scale-h1": { "size": "48px", "lineHeight": "1.15", "weight": "800" }
    },
    "elevation": { "shadow-glow": "0 0 25px rgba(23, 105, 224, 0.25)" }
  }
}`,
  },
  software: {
    title: 'Distributed Microservices',
    lang: 'Go / Node.js Microservice',
    badge: '4,800 req/sec',
    highlight: 'Multi-Tenant Partition + Redis Caching',
    code: `// High-Throughput Distributed Microservice Handler
func HandleTenantTransaction(w http.ResponseWriter, r *http.Request) {
    ctx, cancel := context.WithTimeout(r.Context(), 180*time.Millisecond)
    defer cancel()

    tenantId := r.Header.Get("X-Tenant-ID")
    if err := auditLogger.RecordEvent(ctx, tenantId, "TRANSACTION_START"); err != nil {
        http.Error(w, "Audit stream unavailable", http.StatusServiceUnavailable)
        return
    }

    result := ledgerCluster.ExecuteAtomic(ctx, tenantId, r.Body)
    json.NewEncoder(w).Encode(result)
}`,
  },
};

// Technical Service Disciplines Catalog
interface ServiceCapability {
  id: string;
  category: 'all' | 'web' | 'ai' | 'uiux' | 'software' | 'automation' | 'cloud';
  title: string;
  badge: string;
  highlightMetric: string;
  icon: React.FC<{ className?: string }>;
  tagline: string;
  desc: string;
  deliverables: string[];
  techStack: string[];
  link: string;
}

const SERVICE_CAPABILITIES: ServiceCapability[] = [
  {
    id: 'web-development',
    category: 'web',
    title: 'Web Engineering & Platforms',
    badge: 'High-Performance & Scalable',
    highlightMetric: '<0.8s TTFB • 98+ PageSpeed',
    icon: Globe,
    tagline: 'Modern frontends, SaaS web apps, and headless commerce platforms.',
    desc: 'We engineer bespoke web applications, enterprise customer portals, and high-converting commercial platforms using Next.js, React 19, TypeScript, and Tailwind CSS. Built with server-side rendering, edge caching, and mobile responsiveness.',
    deliverables: [
      'Bespoke Next.js & React 19 Architectures',
      'Multi-Tenant SaaS Portals & Dashboards',
      'Headless E-Commerce with Instant Checkout',
      'Progressive Web Apps (PWA) with Offline Sync',
      'Automated SEO Metadata & OpenGraph Optimization',
    ],
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel Edge'],
    link: '/services/web-development',
  },
  {
    id: 'ai-solutions',
    category: 'ai',
    title: 'AI Systems & Autonomous Agents',
    badge: 'Generative & Grounded Intelligence',
    highlightMetric: '99.4% Factuality • 85%+ Auto-Resolution',
    icon: Sparkles,
    tagline: 'Custom LLM agents, grounded RAG search engines, and automated reasoning.',
    desc: 'Deploy production-grade artificial intelligence tailored to your internal knowledge. We build autonomous agents that execute multi-step workflows, grounded vector search engines with citation verification, and automated customer support bots.',
    deliverables: [
      'Enterprise RAG & Semantic Vector Search',
      'Autonomous Multi-Tool Agent Orchestration',
      '24/7 Intelligent AI Customer Assistants',
      'OCR Document Extraction & Parsing Pipelines',
      'Zero Data Leakage & Isolated Private Models',
    ],
    techStack: ['OpenAI GPT-4o', 'LangChain', 'Pinecone', 'Python FastAPI', 'LlamaIndex', 'PyTorch'],
    link: '/services/ai-solutions',
  },
  {
    id: 'ui-ux-design',
    category: 'uiux',
    title: 'UI/UX Product Design & Systems',
    badge: 'Human-Centered Digital Experience',
    highlightMetric: '96/100 Usability • 250+ Tokens',
    icon: Palette,
    tagline: 'Scalable Figma design systems, complex dashboards, and interactive prototypes.',
    desc: 'Transform dense business logic into crystal-clear digital interfaces. We construct comprehensive Figma component libraries, multi-brand design tokens, responsive dashboard layouts, and interactive micro-interactions tested with real end users.',
    deliverables: [
      'Atomic Design Systems & Token Architectures',
      'High-Density Fintech & ERP Dashboards',
      'Clickable High-Fidelity Figma Prototypes',
      'Comprehensive UX Journey & Friction Audits',
      'Pixel-Perfect Developer Hand-Off Specs',
    ],
    techStack: ['Figma Tokens', 'Auto-Layout', 'Protopie', 'WCAG AA', 'Design Systems', 'Micro-Interactions'],
    link: '/services/ui-ux-design',
  },
  {
    id: 'software-development',
    category: 'software',
    title: 'Custom Software & Enterprise ERP',
    badge: 'Mission-Critical Cloud Backends',
    highlightMetric: '<180ms Latency • 99.9% Uptime',
    icon: Cpu,
    tagline: 'Unified ERPs, custom CRMs, microservices, and multi-tenant databases.',
    desc: 'Replace fragile spreadsheets and disjointed generic tools with bespoke operational software. We build unified ERP platforms, multi-tenant databases, distributed microservices backends, and role-based security access layers.',
    deliverables: [
      'Unified Business ERP & Warehouse Suites',
      'Bespoke Customer Relationship (CRM) Platforms',
      'Distributed Node.js & Go Microservices',
      'Isolated Multi-Tenant Database Partitions',
      'Role-Based Granular Access & Audit Trails',
    ],
    techStack: ['Node.js', 'Go', 'Docker', 'Redis', 'PostgreSQL', 'RabbitMQ'],
    link: '/services/software-development',
  },
  {
    id: 'automation',
    category: 'automation',
    title: 'Business Process Automation',
    badge: 'Autonomous Workflow Orchestration',
    highlightMetric: '70% Manual Time Saved • 0 Errors',
    icon: Zap,
    tagline: 'Eliminate repetitive manual bottlenecks with automated background pipelines.',
    desc: 'Streamline departmental operations with event-driven automated workflows. We construct intelligent PDF invoice parsers, multi-application webhook bridges, and scheduled background reconciliation engines that run flawlessly 24/7.',
    deliverables: [
      'End-to-End Automated Data Pipelines',
      'AI-Powered Invoice & Receipt Parsing',
      'Multi-App Webhook & REST API Bridges',
      'Scheduled Nightly Ledger Reconciliations',
      'Real-Time Slack/WhatsApp/Email Alert Triggers',
    ],
    techStack: ['Python', 'Webhooks', 'Queue Workers', 'OCR Vision', 'Zapier/Make APIs', 'Redis BullMQ'],
    link: '/services/automation',
  },
  {
    id: 'cloud-devops',
    category: 'cloud',
    title: 'Cloud Architecture & DevOps',
    badge: 'Resilient Cloud Infrastructure',
    highlightMetric: '99.99% Availability • Automated CI/CD',
    icon: Server,
    tagline: 'Containerized deployments, automated CI/CD pipelines, and cloud security.',
    desc: 'Construct bulletproof cloud infrastructure on AWS, Google Cloud, and edge networks. We implement automated GitHub Actions pipelines, Docker container orchestration, automated daily database snapshots, and real-time monitoring.',
    deliverables: [
      'Automated GitHub Actions CI/CD Pipelines',
      'Docker & Kubernetes Containerization',
      'Edge CDN Caching & Global Load Balancing',
      'Automated Backup & Disaster Recovery',
      '24/7 Health Monitoring & SLA Governance',
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog'],
    link: '/start-a-project?service=Cloud%20Architecture',
  },
];

// Interactive Tech Matrix Categories
const TECH_MATRIX = [
  { name: 'React 19 & Next.js 15', category: 'Frontend', desc: 'Server Components, SSR & App Router', level: 'Expert' },
  { name: 'TypeScript', category: 'Frontend', desc: 'Strict Type Safety & Zero Any', level: 'Standard' },
  { name: 'Tailwind CSS', category: 'Frontend', desc: 'Utility-first modern design token styling', level: 'Expert' },
  { name: 'Node.js & Express', category: 'Backend', desc: 'High-concurrency RESTful API servers', level: 'Expert' },
  { name: 'Python & FastAPI', category: 'Backend', desc: 'Asynchronous microservices & AI endpoints', level: 'Expert' },
  { name: 'Go (Golang)', category: 'Backend', desc: 'Ultra-fast low-latency distributed tools', level: 'Advanced' },
  { name: 'OpenAI GPT-4o & Claude', category: 'AI & Data', desc: 'Foundational LLM integration & prompt engineering', level: 'Expert' },
  { name: 'LangChain & LlamaIndex', category: 'AI & Data', desc: 'Agent tool execution & vector orchestration', level: 'Expert' },
  { name: 'Pinecone & Qdrant', category: 'AI & Data', desc: 'High-density vector embeddings search', level: 'Expert' },
  { name: 'PostgreSQL & Supabase', category: 'Databases', desc: 'ACID-compliant relational storage & RLS', level: 'Expert' },
  { name: 'MongoDB & Redis', category: 'Databases', desc: 'Document store & ultra-fast memory cache', level: 'Expert' },
  { name: 'Docker & Kubernetes', category: 'DevOps & Cloud', desc: 'Containerized deployment & scaling', level: 'Expert' },
  { name: 'AWS & Vercel Edge', category: 'DevOps & Cloud', desc: 'Serverless compute & global edge CDN', level: 'Expert' },
  { name: 'Figma Tokens & Design Kits', category: 'UI/UX Design', desc: 'Atomic design systems & prototyping', level: 'Expert' },
];

export const WhatWeDoPage: React.FC = () => {
  const [activeSnippetKey, setActiveSnippetKey] = useState<string>('web');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [techFilter, setTechFilter] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'web', label: 'Web Engineering' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'software', label: 'Custom Software & ERP' },
    { id: 'automation', label: 'Automation & Workflows' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
  ];

  const filteredCapabilities = SERVICE_CAPABILITIES.filter((cap) => {
    if (selectedCategory === 'all') return true;
    return cap.category === selectedCategory;
  });

  const techCategories = ['All', 'Frontend', 'Backend', 'AI & Data', 'Databases', 'DevOps & Cloud', 'UI/UX Design'];

  const filteredTech = TECH_MATRIX.filter((item) => {
    if (techFilter === 'All') return true;
    return item.category === techFilter;
  });

  const faqs = [
    {
      q: 'Do we own 100% of the code, repositories, and intellectual property?',
      a: 'Yes, absolutely. Upon milestone completion, full source code ownership, GitHub repositories, environment configs, and architectural IP transfer completely to your organization with zero vendor lock-in.',
    },
    {
      q: 'How does Pravaah ensure code quality and prevent technical debt?',
      a: 'We enforce strict TypeScript configurations, automated linting, modular component architecture, automated CI/CD unit testing, and peer code reviews for every commit before deploying to staging.',
    },
    {
      q: 'Can you integrate with our existing ERP, CRM, or legacy database systems?',
      a: 'Yes. Our senior backend engineers build custom RESTful and GraphQL connectors, webhook pipelines, and data sync bridges to interface with any existing internal or legacy database.',
    },
    {
      q: 'What kind of support and SLA guarantees do you provide post-launch?',
      a: 'We offer flexible enterprise SLA support tiers including 24/7 uptime monitoring, critical bug-fix turnaround, security patches, cloud cost optimization, and ongoing feature iterations.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* 1. Technical Capabilities Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-[#06132D] via-[#081A3A] to-[#06132D] text-white border-b border-white/10">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6638E8]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="mb-3">
            <Breadcrumbs 
              items={[{ label: 'Services Catalog' }]} 
              className="text-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                <Terminal className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Our Services & Capabilities</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Software & Technology Services Built for <span className="gradient-text-blue-purple">Your Growth</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
                From responsive websites and mobile apps to custom management tools and practical AI integrations — explore what we can build for your business.
              </p>

              {/* Capability Quick Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Web & SaaS Apps', 'Mobile Apps (iOS & Android)', 'UI/UX in Figma', 'Custom ERP & CRM', 'Workflow Automation', 'Cloud Hosting'].map((pill, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                    ✓ {pill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Start a Project
                  </Button>
                </Link>
                <a href="#catalog">
                  <Button variant="glass" size="md" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Browse Services
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Code & Architecture Terminal */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#040C1D] border border-white/15 shadow-elevated overflow-hidden">
                
                {/* Terminal Header & Switcher Tabs */}
                <div className="bg-[#07152F] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10.5px] font-mono text-slate-400">pravaah-core-engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10.5px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Production Engine</span>
                  </div>
                </div>

                {/* Tabs switcher */}
                <div className="grid grid-cols-4 bg-[#0B1B3A] border-b border-white/10 text-[10px] font-mono text-slate-400">
                  <button
                    onClick={() => setActiveSnippetKey('web')}
                    className={`py-1.5 px-2 text-center transition-colors cursor-pointer ${activeSnippetKey === 'web' ? 'bg-white/10 text-white font-bold border-b-2 border-[#1769E0]' : 'hover:text-white'}`}
                  >
                    Router.tsx
                  </button>
                  <button
                    onClick={() => setActiveSnippetKey('ai')}
                    className={`py-1.5 px-2 text-center transition-colors cursor-pointer ${activeSnippetKey === 'ai' ? 'bg-white/10 text-white font-bold border-b-2 border-[#6C3FE8]' : 'hover:text-white'}`}
                  >
                    Agent.py
                  </button>
                  <button
                    onClick={() => setActiveSnippetKey('uiux')}
                    className={`py-1.5 px-2 text-center transition-colors cursor-pointer ${activeSnippetKey === 'uiux' ? 'bg-white/10 text-white font-bold border-b-2 border-pink-500' : 'hover:text-white'}`}
                  >
                    Tokens.json
                  </button>
                  <button
                    onClick={() => setActiveSnippetKey('software')}
                    className={`py-1.5 px-2 text-center transition-colors cursor-pointer ${activeSnippetKey === 'software' ? 'bg-white/10 text-white font-bold border-b-2 border-emerald-500' : 'hover:text-white'}`}
                  >
                    Backend.go
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 font-mono text-[11px] leading-relaxed overflow-x-auto text-slate-300 bg-[#030917]">
                  <div className="text-slate-500 mb-1">// {CODE_SNIPPETS[activeSnippetKey].highlight}</div>
                  <pre className="text-slate-300 font-mono whitespace-pre-wrap">{CODE_SNIPPETS[activeSnippetKey].code}</pre>
                </div>

                {/* Footer Info */}
                <div className="px-4 py-2 bg-[#07152F] border-t border-white/10 flex items-center justify-between text-[10.5px] font-mono text-slate-400">
                  <span className="text-emerald-400">✓ Type Checked & Production Ready</span>
                  <span className="text-slate-400">{CODE_SNIPPETS[activeSnippetKey].lang}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Capabilities Catalog Section */}
      <section id="catalog" className="py-8 sm:py-10 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <Badge variant="blue">CAPABILITIES CATALOG</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
              Our Core Technical Disciplines & Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-[#556987] leading-relaxed">
              Every discipline is architected by dedicated senior engineers and product designers with deep domain expertise.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:pt-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#1769E0] text-white shadow-soft'
                      : 'bg-white/90 text-[#334155] border border-[#D2DEEE] hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {filteredCapabilities.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white via-[#F7FAFD] to-[#EDF3FB] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#1769E0] flex items-center justify-center shrink-0 border border-blue-200/50">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0B1B3A]">{srv.title}</h3>
                          <div className="text-[11px] font-semibold text-[#1769E0]">{srv.highlightMetric}</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                        {srv.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.desc}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-1.5 mb-4 bg-[#E5EEF9]/70 p-3 rounded-xl border border-[#D2DEEE]">
                      <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-600">Core Deliverables & Specs</div>
                      <ul className="space-y-1 text-xs text-slate-700 font-medium">
                        {srv.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1769E0] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Stack & Frameworks</div>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10.5px] font-mono font-medium bg-white text-slate-700 border border-[#D2DEEE]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-3 border-t border-[#D2DEEE] flex items-center justify-between">
                    <Link
                      to={srv.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors group"
                    >
                      <span>Explore Dedicated Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to={`/start-a-project?service=${encodeURIComponent(srv.title)}`}
                      className="text-xs text-slate-600 hover:text-slate-900 font-semibold"
                    >
                      Build This →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Interactive Technology Matrix Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-6 space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Technology Ecosystem Matrix</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3A]">
              Battle-Tested Technologies We Rely On
            </h2>
            <p className="text-xs text-slate-600">
              Selected specifically for extreme speed, developer velocity, type safety, and multi-tenant reliability.
            </p>

            {/* Tech Category Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-2">
              {techCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTechFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    techFilter === cat
                      ? 'bg-[#0B1B3A] text-white'
                      : 'bg-white/90 text-slate-600 hover:bg-white border border-[#D2DEEE]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredTech.map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/90 border border-[#D2DEEE] hover:border-[#1769E0]/50 transition-all flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#0B1B3A]">{tech.name}</span>
                    <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-blue-100 text-[#1769E0] font-bold">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">{tech.desc}</p>
                </div>
                <div className="mt-2 text-[9.5px] font-bold text-slate-500 uppercase tracking-wider">{tech.category}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Engineering Standards & Code Quality Rigor */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
            <Badge variant="blue">ENGINEERING STANDARDS</Badge>
            <h2 className="text-2xl font-extrabold text-[#0B1B3A]">
              What Sets Pravaah Engineering Apart
            </h2>
            <p className="text-xs sm:text-sm text-[#556987]">
              We enforce strict engineering disciplines across every commit, avoiding technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1769E0] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-bold text-[#0B1B3A]">Strict Type Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% strict TypeScript with shared types across API and UI layers to eliminate runtime null pointer crashes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#6C3FE8] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-bold text-[#0B1B3A]">Sub-Second Latency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Server-side rendering, CDN edge distribution, and Redis memory caching for immediate page loads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-bold text-[#0B1B3A]">OWASP Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sanitized database inputs, automated CSRF tokens, strict CORS governance, and AES-256 encrypted storage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] space-y-2 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-sm font-bold text-[#0B1B3A]">Automated CI/CD</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                GitHub Actions pipelines that test, build, and deploy with zero downtime and automated rollbacks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 5-Stage Engineering Lifecycle */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1">
            <h2 className="text-xl font-bold text-[#0B1B3A]">Our 5-Stage Technical Lifecycle</h2>
            <p className="text-xs text-slate-600">From initial system design to continuous SLA cloud support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { step: '01', title: 'Architecture Specs', desc: 'Database schema, ERDs, API definitions, and cloud infrastructure blueprint.' },
              { step: '02', title: 'Tokenized UI/UX', desc: 'Figma design tokens, micro-interactions, and high-fidelity prototype validation.' },
              { step: '03', title: 'Test-Driven Dev', desc: 'Modular sprint builds with type safety, clean abstractions, and code reviews.' },
              { step: '04', title: 'Pen-Testing & QA', desc: 'Automated test suites, security vulnerability scan, and load testing.' },
              { step: '05', title: 'CI/CD & Cloud SLA', desc: 'Zero-downtime deployment, continuous telemetry, and 99.9% uptime maintenance.' },
            ].map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/90 border border-[#D2DEEE] space-y-1 shadow-xs">
                <div className="text-xs font-mono font-extrabold text-[#1769E0]">{st.step}</div>
                <h3 className="text-xs font-bold text-[#0B1B3A]">{st.title}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Delivery FAQs */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1">
            <h2 className="text-xl font-bold text-[#0B1B3A]">Frequently Asked Technical Questions</h2>
            <p className="text-xs text-slate-600">Everything you need to know about our engineering and delivery model.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-b from-white to-[#F6F9FD] border border-[#D2DEEE] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#0B1B3A] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-90 text-[#1769E0]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-[#D2DEEE] pt-3 bg-[#E5EEF9]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Strong Technical CTA */}
      <CTASection
        title="Ready to Build Your Technology Solution?"
        subtitle="Schedule a free technical architecture consultation with our engineering leads."
        badge="Engineering Consultation"
        buttonText="Start Your Project"
        buttonLink="/start-a-project"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="/solutions"
      />

    </div>
  );
};
