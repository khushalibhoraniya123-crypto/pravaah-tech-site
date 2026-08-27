import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Layers, 
  TrendingUp,
  Server,
  Smartphone,
  Gauge,
  ArrowRight
} from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CTASection } from '../../components/common/CTASection';

export const WebDevelopmentPage: React.FC = () => {
  const capabilities = [
    {
      title: 'Enterprise Web Applications',
      desc: 'Scalable multi-tenant SaaS platforms, interactive portals, and mission-critical cloud frontends engineered for extreme traffic.',
      icon: Layers,
    },
    {
      title: 'Headless E-Commerce & Marketplaces',
      desc: 'Sub-second shopping experiences, custom checkout funnels, multi-currency processing, and dynamic inventory synchronization.',
      icon: ShoppingBagIcon,
    },
    {
      title: 'Progressive Web Apps (PWA)',
      desc: 'Offline-first, installable app experiences with push notifications, service workers, and native hardware integration.',
      icon: Smartphone,
    },
    {
      title: 'API Engineering & Cloud Integration',
      desc: 'Robust RESTful and GraphQL endpoints, webhook dispatchers, third-party ERP connectors, and microservices bridges.',
      icon: Server,
    },
  ];

  const techStack = [
    { name: 'React 19 & Next.js', category: 'Frontend Framework' },
    { name: 'TypeScript', category: 'Type Safety' },
    { name: 'Node.js & Express', category: 'API Backend' },
    { name: 'Tailwind CSS', category: 'Styling Architecture' },
    { name: 'PostgreSQL & MongoDB', category: 'Database Systems' },
    { name: 'Vercel & AWS', category: 'Edge Cloud Hosting' },
  ];

  const features = [
    {
      icon: Gauge,
      title: 'Sub-Second Load Times',
      desc: 'Server-Side Rendering (SSR), Static Site Generation (SSG), and Edge caching for 98+ Google Lighthouse scores.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      desc: 'OWASP standards, automated SSL/TLS encryption, CSRF protection, and sanitized input validation.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Focused Architecture',
      desc: 'Optimized user flows, responsive layouts across all devices, and frictionless checkout/inquiry paths.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-white/80 via-[#F8FAFD]/90 to-transparent border-b border-[#E8EDF5]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#1769E0]/10 via-[#6C3FE8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <Breadcrumbs 
            items={[
              { label: 'What We Do', href: '/what-we-do' },
              { label: 'Web Development' }
            ]} 
            className="mb-3" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Badge variant="blue" size="md">
                HIGH PERFORMANCE & SCALABLE
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
                Modern Web Engineering Built for Speed, Scale & High Conversion.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed max-w-2xl">
                We engineer bespoke web applications, enterprise SaaS platforms, and lightning-fast digital storefronts that engage users and drive measurable business growth.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link to="/start-a-project">
                  <Button variant="primary" size="md" withArrow className="shadow-glow-blue">
                    Build Your Web Application
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="md">
                    Explore Solutions
                  </Button>
                </Link>
              </div>

              {/* Metrics pill strip */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xl font-extrabold text-[#1769E0]">99.8%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-[#0B1B3A]">&lt;0.8s</div>
                  <div className="text-[11px] text-slate-500 font-medium">Avg. TTFB Speed</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Responsive Layout</div>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-[#06132D] text-white border border-white/10 shadow-elevated relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">react-enterprise.tsx</span>
                </div>

                <div className="font-mono text-[11px] space-y-1.5 text-slate-300">
                  <p><span className="text-[#B59CFF]">export const</span> <span className="text-[#00D2FF]">WebPlatform</span> = () =&gt; &#123;</p>
                  <p className="pl-4 text-slate-400"><span className="text-[#B59CFF]">const</span> framework = <span className="text-emerald-400">'Next.js 15'</span>;</p>
                  <p className="pl-4 text-slate-400"><span className="text-[#B59CFF]">const</span> architecture = <span className="text-emerald-400">'Edge Serverless'</span>;</p>
                  <p className="pl-4 text-slate-400"><span className="text-[#B59CFF]">const</span> performance = <span className="text-amber-300">99.4</span>;</p>
                  <p className="pl-4 text-emerald-400">// Automatic SEO & CDN Distribution</p>
                  <p className="pl-4"><span className="text-[#B59CFF]">return</span> &lt;<span className="text-cyan-300">ScalableSystem</span> /&gt;;</p>
                  <p>&#125;;</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">
                    ✓ Production Ready
                  </span>
                  <span>React 19 + TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A]">
              Full-Spectrum Web Capabilities
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#556987]">
              Tailored architecture and modern engineering for ambitious startups to large enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white to-[#F5F8FD] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-elevated transition-all flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#1769E0] flex items-center justify-center shrink-0 border border-blue-200/50">
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

      {/* Key Benefits Grid */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F2EDFB] to-[#EAF2FB] border-y border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-white/90 border border-[#D2DEEE] shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#1769E0] text-white flex items-center justify-center mb-3 shadow-xs">
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

      {/* Technologies Used */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-xl font-bold text-[#0B1B3A] mb-5">Technologies We Rely On</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-gradient-to-b from-white to-[#F6F9FD] border border-[#D2DEEE] shadow-xs text-center">
                <div className="text-xs sm:text-sm font-bold text-[#0B1B3A]">{tech.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-[#EBF3FB] border-t border-[#D2DEEE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#0B1B3A]">Featured Web Projects</h2>
              <p className="text-xs text-slate-600 mt-0.5">Real-world outcomes built by our engineering team.</p>
            </div>
            <Link to="/solutions" className="text-xs sm:text-sm font-bold text-[#1769E0] hover:underline flex items-center gap-1">
              <span>Explore Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white/90 border border-[#D2DEEE] flex flex-col justify-between shadow-xs">
              <div>
                <div className="text-[11px] font-bold text-[#1769E0] uppercase mb-1">E-Commerce</div>
                <h3 className="text-base font-bold text-[#0B1B3A] mb-1.5">Aura Luxe Marketplace</h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Headless e-commerce platform with sub-second page transitions, dynamic currency conversion, and a 38% increase in checkout conversions.
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 mb-4">
                  <span>+38% Conversion</span>
                  <span>•</span>
                  <span>0.8s Page Load</span>
                </div>
              </div>
              <Link to="/case-studies/aura-luxe" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-[#E4E7EC] flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold text-[#1769E0] uppercase mb-1">Travel Platform</div>
                <h3 className="text-base font-bold text-[#0B1B3A] mb-1.5">Voyager Global Travel</h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Interactive dynamic flight booking and destination itinerary engine processing over $4.2M in annual travel transactions.
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 mb-4">
                  <span>$4.2M Bookings</span>
                  <span>•</span>
                  <span>120+ Destinations</span>
                </div>
              </div>
              <Link to="/case-studies/voyager-travel" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769E0] hover:text-[#0B1B3A] transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Web Application?"
        subtitle="Schedule a free technical architecture consultation with our engineering team."
        buttonText="Start a Project"
        buttonLink="/start-a-project"
      />

    </div>
  );
};

// Helper SVG Icon
const ShoppingBagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);
