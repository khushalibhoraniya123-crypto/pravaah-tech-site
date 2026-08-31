import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Server, 
  ChevronRight, 
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  Cpu,
  Zap,
  Activity
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';

export const metadata: Metadata = {
  title: `Security Policy | ${CONTACT_CONFIG.companyName}`,
  description: `Infrastructure security protocols, vulnerability disclosure, and data encryption architecture at ${CONTACT_CONFIG.companyName}.`,
  openGraph: {
    title: `Security Policy - ${CONTACT_CONFIG.companyName}`,
    description: `Enterprise security controls and data resilience standards at ${CONTACT_CONFIG.companyName}.`,
    type: 'website',
  },
};

export default function SecurityPolicyPage() {
  const lastUpdated = 'August 31, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/70 to-[#EAF2FC] pt-20 sm:pt-24 pb-16 relative overflow-hidden text-[#0B1B3A]">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1769E0]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#6638E8]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-3 border-b border-[#D6E3F4] pb-4 mb-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
            <Link href="/" className="hover:text-[#1769E0] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1B3A] font-semibold">
              Security Policy
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D6E3F4] bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-[#0B1B3A] hover:border-[#1769E0] hover:text-[#1769E0] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-100 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>INFRASTRUCTURE & RESILIENCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Security Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#667085]">
            Last Updated: <strong className="text-[#0B1B3A]">{lastUpdated}</strong> • Enterprise defense-in-depth protocols and incident response standards.
          </p>
        </div>

        {/* Main Document Body */}
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-10 space-y-8 leading-relaxed text-sm text-[#334155]">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-mono font-bold">01</span>
              <span>Defense-in-Depth Architecture</span>
            </h2>
            <p>
              Security is an integral part of the software development lifecycle at <strong>{CONTACT_CONFIG.companyName}</strong>. We adopt a defense-in-depth engineering methodology covering application code, APIs, CI/CD deployment pipelines, container images, and cloud server configurations.
            </p>
          </section>

          {/* Section 2: Core Controls Grid */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-mono font-bold">02</span>
              <span>Key Technical Security Controls</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { title: 'In-Transit Encryption', desc: 'Mandatory TLS 1.3 encryption across all client communications and external APIs.' },
                { title: 'At-Rest Encryption', desc: 'Industry-standard AES-256 encryption across all databases, backups, and cloud storage.' },
                { title: 'Strict RBAC & Least Privilege', desc: 'Granular role-based access control ensuring minimum required system permissions.' },
                { title: 'Automated Dependency Auditing', desc: 'Continuous vulnerability scanning with automated package patching in CI/CD.' },
                { title: 'DDoS & Rate Limiting', desc: 'Edge protection with automatic rate limiting and anomaly telemetry detection.' },
                { title: 'OWASP Top 10 Compliance', desc: 'Built-in sanitization against SQL injection, XSS, CSRF, and SSRF attacks.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1B3A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Responsible Vulnerability Disclosure */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-mono font-bold">03</span>
              <span>Vulnerability Disclosure Program</span>
            </h2>
            <p>
              We welcome reports from security researchers. If you identify a potential security issue in any of our systems or client platforms, please report it immediately to our security response team. We investigate all valid submissions promptly.
            </p>
          </section>

          {/* Contact Bar */}
          <section className="pt-6 border-t border-[#D6E3F4] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
              Security Team Contact
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              To submit a security finding or request SOC/audit compliance documentation:
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={`mailto:${CONTACT_CONFIG.email}?subject=Security%20Inquiry`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{CONTACT_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-[#0B1B3A] hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{CONTACT_CONFIG.phone}</span>
              </a>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
