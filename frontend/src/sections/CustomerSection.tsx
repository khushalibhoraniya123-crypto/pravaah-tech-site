import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';

interface CustomerTestimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  quote: string;
  keyOutcome: string;
  verifiedBadge: string;
}

const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Rajesh Mehta',
    role: 'Managing Director & CEO',
    company: 'Nexus Supply Chain Ltd.',
    industry: 'Enterprise Logistics',
    avatarText: 'RM',
    avatarBg: 'from-blue-600 to-indigo-700',
    rating: 5,
    quote: 'Pravaah Technologies engineered our multi-tenant enterprise ERP with surgical precision. Their distributed backend unified 14 warehouses and saved us over $180,000 in annual recurring SaaS license fees with zero data drift.',
    keyOutcome: '+45% Operational Efficiency',
    verifiedBadge: 'Verified Enterprise Client',
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Digital Commerce',
    company: 'Aura Luxe Marketplace',
    industry: 'High-Growth E-Commerce',
    avatarText: 'ER',
    avatarBg: 'from-purple-600 to-pink-600',
    rating: 5,
    quote: 'The speed and visual polish of Pravaah’s React/Next.js frontend engineering is world-class. Our storefront now loads in under 0.8 seconds globally, directly driving a 38% increase in mobile checkout conversions.',
    keyOutcome: '+38% Conversion Increase',
    verifiedBadge: 'Verified Commercial Client',
  },
  {
    name: 'Vikram Singhania',
    role: 'Chief Technology Officer',
    company: 'CognitiveIQ Systems',
    industry: 'AI & Data Solutions',
    avatarText: 'VS',
    avatarBg: 'from-emerald-600 to-teal-700',
    rating: 5,
    quote: 'Deploying their grounded RAG AI agents transformed our internal legal and operations search. Our staff reclaims 14 hours per week searching through 500,000+ files, backed by zero-data-leakage architecture.',
    keyOutcome: '14 hrs Saved Per Employee/Wk',
    verifiedBadge: 'Verified AI Client',
  },
];

export const CustomerSection: React.FC = () => {
  return (
    <section id="customers" className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#EBF2FA] via-[#F1EDFB] to-[#EAF2FB] border-t border-[#D2DEEE] relative overflow-hidden">
      {/* Subtle brand ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#6C3FE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <Badge variant="blue">CUSTOMER SUCCESS STORIES</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight">
            Trusted by Leaders Who Value <span className="gradient-text-blue-purple">Performance & ROI</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed">
            Read how Pravaah Technologies has partnered with founders, CTOs, and enterprises to deliver high-impact digital solutions.
          </p>
        </div>

        {/* Customer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CUSTOMER_TESTIMONIALS.map((cust, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-b from-white via-[#F7FAFD] to-[#EDF3FB] border border-[#D2DEEE] hover:border-[#1769E0]/50 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(cust.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#1769E0]/30" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 italic">
                  "{cust.quote}"
                </p>
              </div>

              <div>
                {/* Key Outcome Highlight Banner */}
                <div className="p-2.5 rounded-xl bg-white/90 border border-[#D2DEEE] mb-4 flex items-center justify-between shadow-xs">
                  <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Impact:</span>
                  <span className="text-xs font-extrabold text-[#1769E0]">{cust.keyOutcome}</span>
                </div>

                {/* Customer Profile Row */}
                <div className="pt-3 border-t border-[#D2DEEE] flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${cust.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-xs shrink-0`}>
                    {cust.avatarText}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#0B1B3A] truncate">{cust.name}</div>
                    <div className="text-[11px] text-[#556987] truncate">{cust.role} • <strong className="text-slate-800">{cust.company}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Trust Strip */}
        <div className="mt-8 pt-6 border-t border-[#D2DEEE] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>99% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1769E0]" />
            <span>100% Data Confidentiality & NDA</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6C3FE8]" />
            <span>Direct Access to Senior Architects</span>
          </div>
        </div>

      </div>
    </section>
  );
};
