import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Workflow, 
  FileText, 
  Clock, 
  RefreshCw 
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CTASection } from '../../components/common/CTASection';

export const AutomationPage: React.FC = () => {
  const automationCapabilities = [
    {
      title: 'End-to-End Workflow Pipelines',
      desc: 'Orchestrate multi-step data pipelines across CRM, accounting, inventory, and communication channels without human intervention.',
      icon: Workflow,
    },
    {
      title: 'Automated Document & Invoice Extraction',
      desc: 'AI-assisted OCR document processors that automatically ingest PDF invoices, receipts, and contracts into structured database tables.',
      icon: FileText,
    },
    {
      title: 'Multi-App Webhook & API Bridges',
      desc: 'Synchronize events instantly across custom internal systems, Stripe, QuickBooks, HubSpot, Slack, and third-party logistics.',
      icon: RefreshCw,
    },
    {
      title: 'Scheduled Background Job Engines',
      desc: 'High-reliability distributed task queues running nightly reconciliations, report generation, and predictive alerts.',
      icon: Clock,
    },
  ];

  const automationBenefits = [
    {
      metric: '70%',
      label: 'Manual Effort Saved',
      desc: 'Teams reclaim thousands of annual hours by automating repetitive administrative routines.',
    },
    {
      metric: '99.9%',
      label: 'Calculation Accuracy',
      desc: 'Eliminate human transposition and formula errors across invoicing and accounting.',
    },
    {
      metric: '24/7',
      label: 'Continuous Execution',
      desc: 'Pipelines trigger and resolve transactions around the clock, even during weekends and holidays.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white/80 via-[#F8FAFD]/90 to-transparent border-b border-[#E8EDF5]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#6C3FE8]/15 via-[#1769E0]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Automation' }
            ]} 
            className="mb-3" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="neutral" size="md">
                INTELLIGENT BUSINESS PROCESS AUTOMATION
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Eliminate Repetitive Tasks with Autonomous Workflow Pipelines.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed max-w-2xl">
                We engineer automated document parsers, CRM synchronization triggers, and resilient background queues that run your operations effortlessly 24/7.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Automate Your Workflows
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
                  <div className="text-xl font-extrabold text-amber-600">70%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Reduction in Labor</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B1B3A]">12k+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Monthly Invoices Parsed</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-600">0 Errors</div>
                  <div className="text-[11px] text-slate-500 font-medium">Calculation Accuracy</div>
                </div>
              </div>
            </div>

            {/* Automation Flow Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-[#06132D] text-white border border-amber-500/20 shadow-elevated relative">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-slate-300">Live Pipeline: Active 24/7</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    Executing
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[9px]">1</span>
                    <span className="text-slate-300">PDF Invoice Received in Inbox</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[9px]">2</span>
                    <span className="text-slate-300">AI OCR Extracts Line Items & Tax</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[9px]">3</span>
                    <span className="text-emerald-400">ERP Ledger Updated & Reconciled</span>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Webhooks • Queue Jobs • Zapier</span>
                  <span className="text-amber-400 font-semibold">100% Automated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              Intelligent Automation Solutions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#556987]">
              Transform slow manual procedures into rapid, deterministic background workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {automationCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] hover:border-amber-500/50 hover:shadow-elevated transition-all flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/50">
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

      {/* Benefits Metrics */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {automationBenefits.map((ben, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-[#D2DEEE] text-center md:text-left shadow-xs">
                <div className="text-3xl font-extrabold text-amber-600 mb-1">{ben.metric}</div>
                <h3 className="text-sm font-bold text-[#0B1B3A] mb-1">{ben.label}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Automate Your Business Operations?"
        subtitle="Let’s audit your manual processes and build high-efficiency automated pipelines."
        buttonText="Start Automation Project"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
