import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  ChevronRight, 
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: `Privacy Policy | ${CONTACT_CONFIG.companyName}`,
  description: `Privacy Policy and data protection commitments of ${CONTACT_CONFIG.companyName}. Learn how we collect, handle, and secure client information.`,
  openGraph: {
    title: `Privacy Policy - ${CONTACT_CONFIG.companyName}`,
    description: `Data governance and privacy standards at ${CONTACT_CONFIG.companyName}.`,
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider border border-blue-100 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#6638E8]" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3A] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#667085]">
            Last Updated: <strong className="text-[#0B1B3A]">{lastUpdated}</strong> • Effective for all Pravaah Technology services and platforms.
          </p>
        </div>

        {/* Main Document Body */}
        <div className="rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] shadow-elevated p-6 sm:p-10 space-y-8 leading-relaxed text-sm text-[#334155]">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-xs font-mono font-bold">01</span>
              <span>Overview & Scope</span>
            </h2>
            <p>
              At <strong>{CONTACT_CONFIG.companyName}</strong>, we respect your privacy and are committed to protecting the personal and proprietary information shared with us. This Privacy Policy explains how we collect, store, utilize, and protect your data when you interact with our website, software solutions, APIs, and client consultation services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-xs font-mono font-bold">02</span>
              <span>Information We Collect</span>
            </h2>
            <p>We may collect information in the following categories:</p>
            <ul className="space-y-2 list-disc pl-5 text-[#475467]">
              <li><strong>Contact Data:</strong> Name, professional email address, phone number, and company name when you submit project inquiries or request architectural consultations.</li>
              <li><strong>Project Requirements:</strong> Technical specifications, business goals, and architecture preferences provided during proposal scoping.</li>
              <li><strong>Technical & Telemetry Data:</strong> Browser user-agent, IP address, device viewport, and navigation telemetry collected to optimize user experience and platform responsiveness.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-xs font-mono font-bold">03</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>Your data is used strictly for legitimate business objectives, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Delivering custom software proposals and scopes of work.',
                'Executing client engineering agreements and milestone deliverables.',
                'Maintaining ongoing system SLA support and security monitoring.',
                'Improving website performance and user experience.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0B1B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-xs font-mono font-bold">04</span>
              <span>Confidentiality & Non-Disclosure (NDA)</span>
            </h2>
            <p>
              We treat all client source code, business logic, intellectual property, database schemas, and proprietary algorithms as strictly confidential under binding Non-Disclosure Agreements (NDAs). We never sell, lease, or monetize client data under any circumstances.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-xs font-mono font-bold">05</span>
              <span>Data Protection & Retention</span>
            </h2>
            <p>
              We enforce modern industry security protocols including TLS 1.3 in-transit encryption, AES-256 at-rest storage, and granular role-based access control (RBAC). Data is retained only as long as necessary to fulfill contractual obligations or legal compliance.
            </p>
          </section>

          {/* Section 6: Contact Information */}
          <section className="pt-6 border-t border-[#D6E3F4] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
              Privacy Inquiries & Data Requests
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              If you have questions about this Privacy Policy or wish to request data modification or deletion, please contact our Data Governance lead:
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-xs font-bold text-[#1769E0] hover:bg-blue-100 transition-colors"
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
