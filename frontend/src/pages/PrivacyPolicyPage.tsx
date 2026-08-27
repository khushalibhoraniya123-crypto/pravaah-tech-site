import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { CONTACT_CONFIG } from '../config/contact';

export const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'January 15, 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'data-collection', title: '2. Information We Collect' },
    { id: 'data-usage', title: '3. How We Use Your Information' },
    { id: 'client-ownership', title: '4. Code & Intellectual Property Ownership' },
    { id: 'data-security', title: '5. Security & Encryption Standards' },
    { id: 'third-parties', title: '6. Subprocessors & Third-Party Tools' },
    { id: 'cookies', title: '7. Cookies & Analytics Policy' },
    { id: 'user-rights', title: '8. Your Rights & Data Portability' },
    { id: 'contact', title: '9. Contact & Inquiries' },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* Hero Header */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-transparent border-b border-[#D2DEEE] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#1769E0]/15 via-[#6C3FE8]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-3">
              <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
            </div>

            <div className="mb-2.5">
              <Badge variant="blue" size="md">
                LEGAL & PRIVACY
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed">
              At <strong className="text-[#0B1B3A]">{CONTACT_CONFIG.companyName}</strong>, we respect your privacy and are committed to protecting your personal data, business requirements, and proprietary software source code.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#D2DEEE] text-xs font-semibold text-[#1769E0]">
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Navigation Sidebar (Desktop sticky) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#F8FAFD] to-[#EDF3FB] border border-[#D2DEEE] shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B1B3A] mb-3.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1769E0]" />
                  <span>Table of Contents</span>
                </h3>
                <nav className="space-y-1.5 text-xs sm:text-sm">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block p-2 rounded-xl text-[#475467] hover:text-[#1769E0] hover:bg-[#1769E0]/10 transition-colors font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Security Commitment Box */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] text-white border border-white/10 shadow-elevated">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769E0] to-[#6C3FE8] text-white flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">Strict Confidentiality</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  We sign Non-Disclosure Agreements (NDAs) before discussing sensitive project architectures or commercial models.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="sm" withArrow className="w-full justify-center">
                    Request NDA Discussion
                  </Button>
                </Link>
              </div>
            </aside>

            {/* Legal Document Content */}
            <div className="lg:col-span-8 space-y-8 text-left text-[#334155]">
              
              {/* Section 1 */}
              <div id="introduction" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Introduction & Overview
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {CONTACT_CONFIG.companyName} ("we", "us", or "our") operates the website and delivers enterprise technology services including web development, mobile application engineering, UI/UX design systems, software development, and workflow automation.
                </p>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  This Privacy Policy describes our practices regarding the collection, storage, processing, and protection of information when you browse our website, submit project inquiries, or engage us for digital engineering solutions.
                </p>
              </div>

              {/* Section 2 */}
              <div id="data-collection" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#475467]">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Directly Provided Information:</strong>
                    When you contact us, request a proposal, or start a project, we collect your name, business email address, phone number, company name, project specifications, and estimated budget ranges.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Technical & Usage Data:</strong>
                    We automatically record non-personally identifiable technical telemetry such as browser type, operating system version, referring URLs, device dimensions, and page navigation durations to ensure seamless responsiveness.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Client Business Assets:</strong>
                    During active project execution, you may share design files, brand logos, API credentials, or database requirements. These are treated with strict confidentiality under bilateral NDAs.
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="data-usage" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  We use the information gathered solely for legitimate commercial and technical execution purposes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Scoping project milestones & timelines',
                    'Delivering custom software & web applications',
                    'Communicating progress & sprint deliverables',
                    'Providing post-deployment SLA support & maintenance',
                    'Maintaining website reliability and uptime',
                    'Preventing security threats and abuse',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#0B1B3A] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed pt-2">
                  <strong className="text-[#0B1B3A]">We never sell, rent, or trade your personal or project data</strong> to third-party data brokers or marketing advertisers under any circumstances.
                </p>
              </div>

              {/* Section 4 */}
              <div id="client-ownership" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] text-white border border-white/10 shadow-elevated space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Code & Intellectual Property Ownership
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Upon completion of project deliverables and settlement of contractual invoices, <strong className="text-white">100% of all custom source code, documentation, UI designs, and deployment repositories belong exclusively to you, the client</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We do not retain proprietary hold over your intellectual assets or customer data.
                </p>
              </div>

              {/* Section 5 */}
              <div id="data-security" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    05
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Security & Encryption Standards
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  We enforce stringent technical controls to safeguard your information:
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#475467]">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                    <span><strong>Transport Security:</strong> All data transmitted over our website is encrypted via modern TLS 1.3 / HTTPS protocols.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#6C3FE8] shrink-0 mt-0.5" />
                    <span><strong>Access Control:</strong> Access to development staging environments and client credentials is strictly restricted using multi-factor authentication (MFA) and least-privilege policies.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#1769E0] shrink-0 mt-0.5" />
                    <span><strong>Zero Data Drift:</strong> Dedicated repositories and environments ensure client data is isolated with zero cross-tenant contamination.</span>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div id="third-parties" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    06
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Subprocessors & Third-Party Tools
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  To operate our infrastructure and deliver reliable client communications, we may utilize trusted industry providers (such as GitHub for version control, cloud hosting providers like Vercel/AWS, and secure email relay gateways). Each provider maintains SOC2, ISO27001, or GDPR compliance standards.
                </p>
              </div>

              {/* Section 7 */}
              <div id="cookies" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    07
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Cookies & Analytics Policy
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Our website uses lightweight session tokens and performance cookies to remember user preferences and measure aggregate page traffic. We do not use intrusive tracking pixels or invasive retargeting scripts. You can disable cookies at any time through your browser settings.
                </p>
              </div>

              {/* Section 8 */}
              <div id="user-rights" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    08
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Your Rights & Data Portability
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Depending on your jurisdiction, you hold rights to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#475467]">
                  <li>Request access to the personal data we store regarding your account.</li>
                  <li>Request correction of inaccurate or incomplete contact records.</li>
                  <li>Request permanent deletion of your inquiry data from our communication records.</li>
                  <li>Export project history and code assets in standard machine-readable formats.</li>
                </ul>
              </div>

              {/* Section 9: Contact */}
              <div id="contact" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#F0F5FC] via-[#F4F1FB] to-[#EDF3FB] border border-[#D2DEEE] shadow-soft space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0] text-white flex items-center justify-center font-bold text-xs">
                    09
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Contact & Data Protection Inquiries
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  For privacy requests, NDA agreements, or legal questions, contact our legal and administrative team directly:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="p-3 rounded-xl bg-white border border-[#D2DEEE] hover:border-[#1769E0] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#667085]">Email Us</div>
                      <div className="text-xs font-bold text-[#0B1B3A] truncate">{CONTACT_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    className="p-3 rounded-xl bg-white border border-[#D2DEEE] hover:border-[#1769E0] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#667085]">Phone Consultation</div>
                      <div className="text-xs font-bold text-[#0B1B3A] truncate">{CONTACT_CONFIG.phone}</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
