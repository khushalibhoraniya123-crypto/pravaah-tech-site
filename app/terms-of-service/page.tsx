import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  Scale, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Mail,
  Phone,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';

export const metadata: Metadata = {
  title: `Terms of Service | ${CONTACT_CONFIG.companyName}`,
  description: `Terms of Service and client engagement agreements for software engineering, web development, and digital solutions by ${CONTACT_CONFIG.companyName}.`,
  openGraph: {
    title: `Terms of Service - ${CONTACT_CONFIG.companyName}`,
    description: `Engagement terms and legal governance for ${CONTACT_CONFIG.companyName}.`,
    type: 'website',
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-[#6638E8] text-xs font-bold uppercase tracking-wider border border-purple-100 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-[#1769E0]" />
            <span>CLIENT AGREEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-[#667085]">
            Last Updated: <strong className="text-[#0B1B3A]">{lastUpdated}</strong> • Governs all engineering deliverables, consulting engagements, and client contracts.
          </p>
        </div>

        {/* Main Document Body */}
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-10 space-y-8 leading-relaxed text-sm text-[#334155]">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6638E8] flex items-center justify-center text-xs font-mono font-bold">01</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p>
              By accessing the website or engaging <strong>{CONTACT_CONFIG.companyName}</strong> for web application development, custom software engineering, mobile systems, UI/UX design, or cloud architecture, you agree to be bound by these Terms of Service and any associated Statement of Work (SOW).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6638E8] flex items-center justify-center text-xs font-mono font-bold">02</span>
              <span>Services & Statement of Work</span>
            </h2>
            <p>
              Every engineering engagement is governed by a mutually approved project specification defining project scope, milestones, delivery schedules, and technical requirements. Any modifications to project scope are managed transparently via formal change requests.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6638E8] flex items-center justify-center text-xs font-mono font-bold">03</span>
              <span>Intellectual Property & Source Code Ownership</span>
            </h2>
            <p>
              Upon final milestone payment completion, <strong>100% full intellectual property (IP) ownership</strong> of custom source code, design systems, assets, and database architecture is unconditionally transferred to the client, subject to standard open-source library licenses.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6638E8] flex items-center justify-center text-xs font-mono font-bold">04</span>
              <span>Warranty & Post-Launch Support</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                '30 to 90 days complimentary bug-fix warranty upon deployment.',
                'Comprehensive technical documentation and API architecture guides.',
                'Optional ongoing SLA maintenance and infrastructure monitoring.',
                'Dedicated response channels for critical incident resolution.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#6638E8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-purple-50 text-[#6638E8] flex items-center justify-center text-xs font-mono font-bold">05</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              In no event shall {CONTACT_CONFIG.companyName} be liable for any indirect, incidental, consequential, or special damages arising out of system usage beyond the total contract value paid by the client for the specific service under dispute.
            </p>
          </section>

          {/* Contact Bar */}
          <section className="pt-6 border-t border-[#D6E3F4] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
              Legal & Contract Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              For contract reviews or terms clarifications, please reach out to our legal engineering team:
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-100 text-xs font-bold text-[#6638E8] hover:bg-purple-100 transition-colors"
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
