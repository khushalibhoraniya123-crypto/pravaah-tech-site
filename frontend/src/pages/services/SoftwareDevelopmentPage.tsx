import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Layers, 
  Lock,
  GitBranch,
  Workflow
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CTASection } from '../../components/common/CTASection';

export const SoftwareDevelopmentPage: React.FC = () => {
  const softwareCapabilities = [
    {
      title: 'Enterprise ERP & Custom CRMs',
      desc: 'Bespoke operational backbones uniting multi-warehouse inventory, accounting ledgers, HR payroll, and sales pipelines into one secure portal.',
      icon: Layers,
    },
    {
      title: 'Distributed Microservices & APIs',
      desc: 'High-throughput Node.js, Go, and Python microservices communicating with asynchronous message queues (RabbitMQ/Kafka) and Redis caches.',
      icon: Server,
    },
    {
      title: 'Multi-Tenant Database Architectures',
      desc: 'Isolated tenant data partitions, automated daily backup snapshots, and high-concurrency PostgreSQL / MongoDB sharding.',
      icon: Database,
    },
    {
      title: 'Role-Based Access & Audit Logging',
      desc: 'Granular permissions, OAuth2 / SAML SSO integration, AES-256 encryption at rest and in transit, and immutable compliance audit trails.',
      icon: ShieldCheck,
    },
  ];

  const enterpriseFeatures = [
    {
      icon: Lock,
      title: 'Bank-Grade Security & Isolation',
      desc: 'Zero-trust architecture, multi-factor authentication, and end-to-end data encryption for confidential business operations.',
    },
    {
      icon: GitBranch,
      title: 'Automated CI/CD & Zero Downtime',
      desc: 'Dockerized microservices deployed via GitHub Actions pipelines with rolling zero-downtime updates.',
    },
    {
      icon: Workflow,
      title: 'Custom Business Logic Automation',
      desc: 'Replace fragile spreadsheets with deterministic, automated workflow engines and real-time ledger validations.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-emerald-400/15 via-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Software Development' }
            ]} 
            className="mb-3" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="blue" size="md">
                MISSION-CRITICAL ENTERPRISE ARCHITECTURE
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Custom Enterprise Software, ERPs & Robust Cloud Backends.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed max-w-2xl">
                We engineer scalable custom software platforms, unified enterprise resource systems, and distributed backends that eliminate operational bottlenecks.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Discuss Your Architecture
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="md">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xl font-extrabold text-emerald-600">&lt;180ms</div>
                  <div className="text-[11px] text-slate-500 font-medium">API Response Latency</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B1B3A]">150k+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Daily Operations</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#1769E0]">99.9%</div>
                  <div className="text-[11px] text-slate-500 font-medium">SLA Availability</div>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-[#06132D] text-white border border-emerald-500/20 shadow-elevated relative">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-300">Nexus ERP Core</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    Health: 100%
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-slate-300">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400">Microservice Cluster</span>
                    <span className="text-emerald-400 font-bold">12 Nodes Online</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400">Multi-tenant Partition</span>
                    <span className="text-cyan-400 font-bold">Encrypted Isolated</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400">Throughput Velocity</span>
                    <span className="text-purple-400 font-bold">4,800 req/sec</span>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Docker • PostgreSQL • Redis</span>
                  <span className="text-emerald-400 font-semibold">Zero Data Drift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              Enterprise Engineering Capabilities
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Designed from the ground up for high concurrency, rock-solid security, and effortless scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {softwareCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:shadow-elevated transition-all flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B3A] mb-1">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="py-10 sm:py-12 bg-white border-y border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {enterpriseFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1B3A] mb-1">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#06132D] to-[#0E2856] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-elevated">
            <div className="max-w-2xl space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                Enterprise Case Study
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Nexus Enterprise ERP</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Engineered an end-to-end multi-tenant business management ERP for an international supply chain, supporting 12,500+ active staff members across 14 warehouses with sub-180ms response times.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
                <span>+45% Efficiency Boost</span>
                <span>•</span>
                <span>12,500+ Active Users</span>
                <span>•</span>
                <span>Sub-180ms Latency</span>
              </div>
            </div>
            <Link to="/case-studies/nexus-erp">
              <Button variant="primary" size="md" withArrow className="shrink-0 shadow-glow-blue">
                View Case Study
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Custom Enterprise Software?"
        subtitle="Let’s review your system requirements, data schema, and security architecture."
        buttonText="Schedule Technical Call"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
