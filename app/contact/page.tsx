import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';
import { ContactSection } from '@/components/sections/contact-section';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: `Contact Us | ${CONTACT_CONFIG.companyName}`,
  description: `Get in touch with ${CONTACT_CONFIG.companyName} for bespoke web development, mobile apps, enterprise ERP, and autonomous AI software solutions. Located in Surat, Gujarat.`,
  openGraph: {
    title: `Contact ${CONTACT_CONFIG.companyName}`,
    description: `Connect with our engineering leads to discuss your project requirements. Phone: ${CONTACT_CONFIG.phone}`,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EEF5FD] via-[#F6F2FE]/70 to-[#EAF2FC] pt-20 sm:pt-24 pb-14 sm:pb-16 relative overflow-hidden">
      {/* Ambient background glows & tech grid */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1769E0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#6638E8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      {/* 1. Breadcrumbs */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-2 pb-6 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D6E3F4] pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#667085]">
            <Link href="/" className="hover:text-[#1769E0] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1B3A] font-semibold">
              Contact Us
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[#D6E3F4] bg-white/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-[#0B1B3A] hover:bg-white hover:border-[#1769E0] hover:text-[#1769E0] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* 2. Direct Channels Banner */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Channel 1: Phone */}
          <a
            href={`tel:${CONTACT_CONFIG.phoneRaw}`}
            className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] hover:border-[#1769E0] shadow-soft hover:shadow-elevated transition-all flex items-start gap-3.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#1769E0] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#1769E0] group-hover:text-white transition-all shadow-xs">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">Direct Phone</div>
              <div className="text-sm font-extrabold text-[#0B1B3A] group-hover:text-[#1769E0] transition-colors truncate">
                {CONTACT_CONFIG.phone}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Mon–Sat, 9AM–7PM IST</div>
            </div>
          </a>

          {/* Channel 2: WhatsApp */}
          <a
            href={`https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] hover:border-emerald-500 shadow-soft hover:shadow-elevated transition-all flex items-start gap-3.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">WhatsApp Instant</div>
              <div className="text-sm font-extrabold text-[#0B1B3A] group-hover:text-emerald-600 transition-colors truncate">
                {CONTACT_CONFIG.whatsapp}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Fastest Response</div>
            </div>
          </a>

          {/* Channel 3: Email */}
          <a
            href={`mailto:${CONTACT_CONFIG.email}`}
            className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] hover:border-[#6638E8] shadow-soft hover:shadow-elevated transition-all flex items-start gap-3.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#6638E8] border border-purple-100 flex items-center justify-center shrink-0 group-hover:bg-[#6638E8] group-hover:text-white transition-all shadow-xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">Email Inquiry</div>
              <div className="text-xs font-extrabold text-[#0B1B3A] group-hover:text-[#6638E8] transition-colors truncate">
                {CONTACT_CONFIG.email}
              </div>
              <div className="text-[11px] text-purple-600 font-semibold mt-0.5">24h Written Proposal</div>
            </div>
          </a>

          {/* Channel 4: Office Location */}
          <a
            href={CONTACT_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D6E3F4] hover:border-rose-500 shadow-soft hover:shadow-elevated transition-all flex items-start gap-3.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-[#667085] uppercase tracking-wider">Surat Office</div>
              <div className="text-xs font-extrabold text-[#0B1B3A] group-hover:text-rose-600 transition-colors truncate">
                Amorina Market, Punagam
              </div>
              <div className="text-[11px] text-rose-600 font-semibold mt-0.5">Open in Google Maps ↗</div>
            </div>
          </a>

        </div>
      </div>

      {/* 3. Full Interactive Contact Form & Quality Guarantees */}
      <ContactSection />
    </div>
  );
}
