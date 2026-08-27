import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  CheckCircle2, 
  Code2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { CONTACT_CONFIG } from '../config/contact';

export const TermsConditionsPage: React.FC = () => {
  const lastUpdated = 'January 15, 2026';

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'services', title: '2. Scope of Services & Deliverables' },
    { id: 'proposals', title: '3. Estimates, Milestones & Payment' },
    { id: 'ip-rights', title: '4. Source Code & Intellectual Property' },
    { id: 'client-responsibilities', title: '5. Client Obligations & Approvals' },
    { id: 'confidentiality', title: '6. Confidentiality & Non-Disclosure' },
    { id: 'warranties', title: '7. Warranties & Bug-Fix Period' },
    { id: 'liability', title: '8. Limitation of Liability' },
    { id: 'termination', title: '9. Term & Project Termination' },
    { id: 'governing-law', title: '10. Governing Law & Jurisdiction' },
    { id: 'contact', title: '11. Legal Inquiries & Notices' },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* Hero Header */}
      <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-transparent border-b border-[#D2DEEE] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#1769E0]/15 via-[#6C3FE8]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-3">
              <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
            </div>

            <div className="mb-2.5">
              <Badge variant="purple" size="md">
                TERMS OF SERVICE
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              Terms & Conditions
            </h1>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#556987] leading-relaxed">
              These terms govern the engagement, design, development, and delivery of custom technology solutions provided by <strong className="text-[#0B1B3A]">{CONTACT_CONFIG.companyName}</strong>.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#D2DEEE] text-xs font-semibold text-[#6C3FE8]">
              <span>Effective Date: {lastUpdated}</span>
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
                  <Scale className="w-4 h-4 text-[#6C3FE8]" />
                  <span>Document Index</span>
                </h3>
                <nav className="space-y-1.5 text-xs sm:text-sm">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block p-2 rounded-xl text-[#475467] hover:text-[#6C3FE8] hover:bg-[#6C3FE8]/10 transition-colors font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Client First Guarantee */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] text-white border border-white/10 shadow-elevated">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C3FE8] to-[#1769E0] text-white flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">Transparent Milestones</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  We work with clear deliverables, documented sprint reviews, and guaranteed code handover upon completion.
                </p>
                <Link to="/start-a-project">
                  <Button variant="primary" size="sm" withArrow className="w-full justify-center">
                    Start a Project
                  </Button>
                </Link>
              </div>
            </aside>

            {/* Legal Document Content */}
            <div className="lg:col-span-8 space-y-8 text-left text-[#334155]">
              
              {/* Section 1 */}
              <div id="acceptance" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Acceptance of Terms
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  By accessing the website of {CONTACT_CONFIG.companyName}, submitting a project proposal, or signing a statement of work (SOW), you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company or legal entity, you represent that you possess full authority to bind that entity.
                </p>
              </div>

              {/* Section 2 */}
              <div id="services" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Scope of Services & Deliverables
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {CONTACT_CONFIG.companyName} provides professional engineering and consulting services across five core technical pillars:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Custom Web Development & SaaS Portals',
                    'iOS & Android Mobile App Engineering',
                    'UI/UX Design Systems & High-Fidelity Prototypes',
                    'Internal Software, ERP & CRM Solutions',
                    'Workflow Automation & CI/CD Pipelines',
                    'Practical AI Agents & Enterprise Integrations',
                  ].map((srv, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0B1B3A] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1769E0] shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div id="proposals" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Estimates, Milestones & Payment Terms
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#475467]">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Written Proposals & SOW:</strong>
                    All projects are governed by a mutually agreed Statement of Work outlining deliverables, timelines, acceptance criteria, and milestones.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Milestone Invoicing:</strong>
                    Invoices are issued upon commencement (initial kickoff) and progressively upon completion of agreed milestone sprint demos.
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <strong className="text-[#0B1B3A] block mb-1">Payment Timeline:</strong>
                    Standard invoice terms are Net 15 days unless otherwise specified in the contractual agreement.
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div id="ip-rights" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#07152F] to-[#0B1B3A] text-white border border-white/10 shadow-elevated space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Source Code & Intellectual Property Ownership
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Upon full payment of all contracted milestones:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li><strong className="text-white">100% Full Ownership:</strong> The client owns all bespoke source code, database architectures, graphics, and documentation created specifically for the project.</li>
                  <li><strong className="text-white">Open Source Components:</strong> Any standard open-source libraries or MIT/Apache packages used remain subject to their respective open-source licenses.</li>
                  <li><strong className="text-white">Code Transfer:</strong> Full repository ownership is transferred directly to your organization's GitHub / GitLab accounts.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="client-responsibilities" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    05
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Client Obligations & Approvals
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  To ensure adherence to project schedules, the client agrees to provide timely feedback on sprint builds, designate a single point of contact for technical clarifications, and furnish necessary brand assets or third-party API credentials in a timely manner.
                </p>
              </div>

              {/* Section 6 */}
              <div id="confidentiality" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    06
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Confidentiality & Non-Disclosure
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Both parties agree to protect and treat all proprietary business data, trade secrets, financial models, and application blueprints as strictly confidential. Confidentiality obligations survive termination of the engagement for a minimum period of three (3) years.
                </p>
              </div>

              {/* Section 7 */}
              <div id="warranties" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    07
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Warranties & Bug-Fix Period
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  We stand behind the quality of our code:
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-[#1769E0]/30 text-xs sm:text-sm text-[#0B1B3A]">
                  <strong>Post-Launch Warranty:</strong> We provide an inclusive 30-day post-launch warranty period during which any functional defects or bugs deviating from approved specifications will be resolved at no additional charge.
                </div>
              </div>

              {/* Section 8 */}
              <div id="liability" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    08
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  In no event shall either party be liable for any indirect, incidental, special, punitive, or consequential damages (including loss of profits or business interruption). {CONTACT_CONFIG.companyName}'s aggregate liability under any statement of work shall not exceed the total fees paid by the client under that specific agreement.
                </p>
              </div>

              {/* Section 9 */}
              <div id="termination" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center font-bold text-xs">
                    09
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Term & Project Termination
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Either party may terminate an active statement of work upon 14 days written notice. In the event of early termination, the client shall pay for all work completed up to the effective date of termination, and {CONTACT_CONFIG.companyName} will deliver all work-in-progress code and assets.
                </p>
              </div>

              {/* Section 10 */}
              <div id="governing-law" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#D2DEEE] shadow-xs space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center font-bold text-xs">
                    10
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Governing Law & Dispute Resolution
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  These Terms and any dispute arising out of or related to our services shall be governed by and construed in accordance with the applicable laws of Gujarat, India, with exclusive jurisdiction in the courts of Surat.
                </p>
              </div>

              {/* Section 11: Contact */}
              <div id="contact" className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#F0F5FC] via-[#F4F1FB] to-[#EDF3FB] border border-[#D2DEEE] shadow-soft space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6C3FE8] text-white flex items-center justify-center font-bold text-xs">
                    11
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1B3A]">
                    Legal Inquiries & Notices
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  For contractual inquiries, legal notices, or formal master service agreements, contact our team:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={`mailto:${CONTACT_CONFIG.email}`}
                    className="p-3 rounded-xl bg-white border border-[#D2DEEE] hover:border-[#6C3FE8] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6C3FE8]/10 text-[#6C3FE8] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#667085]">Legal Email</div>
                      <div className="text-xs font-bold text-[#0B1B3A] truncate">{CONTACT_CONFIG.email}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    className="p-3 rounded-xl bg-white border border-[#D2DEEE] hover:border-[#6C3FE8] flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1769E0]/10 text-[#1769E0] flex items-center justify-center shrink-0">
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
