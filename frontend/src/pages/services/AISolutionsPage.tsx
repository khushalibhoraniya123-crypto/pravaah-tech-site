import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  Database, 
  ShieldAlert, 
  Activity,
  Workflow
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CTASection } from '../../components/common/CTASection';

export const AISolutionsPage: React.FC = () => {
  const aiCapabilities = [
    {
      title: 'Autonomous AI Agents',
      desc: 'Multi-step reasoning agents that execute tasks across internal tools, databases, APIs, and CRM systems with supervised autonomy.',
      icon: Bot,
    },
    {
      title: 'Enterprise RAG & Document Intelligence',
      desc: 'Semantic vector search engines that ingest PDFs, documentation, spreadsheets, and databases to deliver verified, citation-backed answers.',
      icon: Database,
    },
    {
      title: 'Predictive Analytics & Machine Learning',
      desc: 'Proprietary ML models trained on your business data to forecast customer demand, churn probability, and inventory movement.',
      icon: BrainCircuit,
    },
    {
      title: 'AI Customer Support Workflows',
      desc: '24/7 intelligent conversational assistants that resolve over 85% of tier-1 support queries without human intervention.',
      icon: Sparkles,
    },
  ];

  const aiStack = [
    { name: 'OpenAI GPT-4o & Claude', category: 'LLM Foundations' },
    { name: 'LangChain & LlamaIndex', category: 'Agent Orchestration' },
    { name: 'Pinecone & Qdrant', category: 'Vector Databases' },
    { name: 'Python & FastAPI', category: 'AI Microservices' },
    { name: 'PyTorch & HuggingFace', category: 'Custom Models' },
    { name: 'Guardrails AI', category: 'Enterprise Security' },
  ];

  const securityFeatures = [
    {
      icon: ShieldAlert,
      title: 'Zero Data Leakage & Privacy',
      desc: 'Your proprietary corporate IP and customer records are never used for public model training. Isolated tenant databases.',
    },
    {
      icon: Activity,
      title: 'Sub-second Streaming Latency',
      desc: 'Optimized token streaming pipelines and semantic cache layers ensure lightning-fast conversational UI responses.',
    },
    {
      icon: Workflow,
      title: 'Deterministic Tool Execution',
      desc: 'Granular schema validation on all tool function calls to prevent hallucinations and guarantee accurate data writes.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-[#F7F9FC]">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white via-[#F7F9FC] to-[#F7F9FC] border-b border-[#E4E7EC]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-purple-500/15 via-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'AI Solutions' }
            ]} 
            className="mb-3" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="purple" size="md">
                INTELLIGENT & GENERATIVE AI
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Enterprise AI Agents & Intelligent Automation Systems.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed max-w-2xl">
                We engineer production-grade AI applications, custom LLM agents, grounded RAG search engines, and automated decision pipelines that accelerate operational speed by 10x.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Deploy AI for Your Business
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="md">
                    Explore AI Solutions
                  </Button>
                </Link>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xl font-extrabold text-[#6C3FE8]">99.4%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Factuality Accuracy</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B1B3A]">14 hrs</div>
                  <div className="text-[11px] text-slate-500 font-medium">Weekly Saved / Employee</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-600">85%+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Automated Resolution</div>
                </div>
              </div>
            </div>

            {/* AI Visual Terminal */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-[#06132D] text-white border border-purple-500/20 shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span className="text-xs font-mono text-slate-300 font-semibold">Autonomous Agent: Running</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Live
                  </span>
                </div>

                <div className="font-mono text-[11px] space-y-2 text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <span className="text-purple-400 font-bold">Goal:</span> "Analyze Q3 revenue report & flag supply chain cost outliers."
                  </div>
                  <p className="text-slate-400">→ <span className="text-cyan-400">Step 1:</span> Query Vector Database (Pinecone)...</p>
                  <p className="text-slate-400">→ <span className="text-emerald-400">Step 2:</span> Retrieved 48 matched document chunks.</p>
                  <p className="text-slate-400">→ <span className="text-amber-300">Step 3:</span> Found 2 supplier margin discrepancies.</p>
                  <p className="text-emerald-400">✓ Generated executive summary with citation links.</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-purple-400 font-semibold">RAG Pipeline Active</span>
                  <span>LangChain + Vector DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              Full-Stack Artificial Intelligence
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              From conceptual design and custom model fine-tuning to secure enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {aiCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E4E7EC] hover:shadow-elevated transition-all flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-[#6C3FE8] flex items-center justify-center shrink-0">
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
            {securityFeatures.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC]">
                  <div className="w-9 h-9 rounded-xl bg-[#6C3FE8] text-white flex items-center justify-center mb-3 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1B3A] mb-1">{sec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-[#0B1B3A] mb-6">AI Infrastructure & Frameworks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {aiStack.map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E4E7EC] shadow-xs text-center">
                <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">{tech.name}</div>
                <div className="text-[10px] text-purple-600 font-medium mt-0.5">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured AI Case Study */}
      <section className="py-10 sm:py-12 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#06132D] to-[#0E2856] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-elevated">
            <div className="max-w-2xl space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold uppercase tracking-wider">
                Featured Case Study
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">CognitiveIQ AI Assistant</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Constructed an enterprise generative AI workspace that ingests 500k+ pages of financial and compliance documents, enabling 800+ employees to perform instant citation-backed research with 94% first-pass resolution.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
                <span>94% Query Resolution</span>
                <span>•</span>
                <span>14 hrs Saved/Week</span>
                <span>•</span>
                <span>500k+ Indexed Pages</span>
              </div>
            </div>
            <Link to="/case-studies/cognitiveiq-ai">
              <Button variant="primary" size="md" withArrow className="shrink-0 shadow-glow-blue">
                View Case Study
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Deploy AI in Your Organization?"
        subtitle="Consult directly with our artificial intelligence researchers and systems architects."
        badge="Enterprise AI Consultation"
        buttonText="Start AI Project"
        buttonLink="/start-a-project"
      />

    </div>
  );
};
