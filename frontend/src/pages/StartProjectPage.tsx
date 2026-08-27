import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  Palette, 
  Zap, 
  Layers, 
  MessageSquare
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import { CONTACT_CONFIG } from '../config/contact';

const SERVICE_OPTIONS = [
  { id: 'web', label: 'Web Application / Portal', icon: Globe },
  { id: 'ai', label: 'AI Agents & LLM Systems', icon: Sparkles },
  { id: 'uiux', label: 'UI/UX Design & Systems', icon: Palette },
  { id: 'software', label: 'Custom Software & ERP', icon: Cpu },
  { id: 'automation', label: 'Business Process Automation', icon: Zap },
  { id: 'industry', label: 'Industry Solution', icon: Layers },
];

const BUDGET_TIERS = [
  '< $5,000',
  '$5,000 - $15,000',
  '$15,000 - $35,000',
  '$35,000 - $75,000',
  '$75,000+',
];

const TIMELINE_OPTIONS = [
  'Within 2-4 Weeks',
  '1-2 Months',
  '3-6 Months',
  'Flexible / Research Phase',
];

export const StartProjectPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    const solution = searchParams.get('solution');
    const serviceParam = searchParams.get('service');
    const initial: string[] = [];
    if (solution) initial.push('industry');
    if (serviceParam) {
      const match = SERVICE_OPTIONS.find(
        (s) => s.label.toLowerCase() === serviceParam.toLowerCase() || s.id.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) initial.push(match.id);
      else initial.push('web');
    } else if (!solution) {
      initial.push('web');
    }
    return Array.from(new Set(initial));
  });

  const [selectedBudget, setSelectedBudget] = useState<string>('$5,000 - $15,000');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1-2 Months');
  
  const [formData, setFormData] = useState(() => {
    const solution = searchParams.get('solution');
    const reference = searchParams.get('reference');
    let message = '';
    if (solution) {
      message = `Interested in deploying industry solution: ${solution}`;
    } else if (reference) {
      message = `Looking to build a system similar to case study: ${reference}`;
    }
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      message,
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in your name, email, and project details.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedLabels = selectedServices.map(
        (id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label || id
      );

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        service: selectedLabels.length > 0 ? selectedLabels.join(', ') : 'General Ingestion',
        budget: selectedBudget,
        timeline: selectedTimeline,
        message: formData.message,
      };

      await api.submitContact(payload);
      setIsSubmitted(true);
      showToast('Project proposal request received! We will contact you within 24 hours.', 'success');
    } catch (err: any) {
      showToast(err.message || 'Failed to submit proposal request. Please check your connection.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-transparent">
      
      {/* Hero Header */}
      <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden bg-gradient-to-b from-[#EBF2FA] via-[#F0EEFB] to-transparent border-b border-[#D2DEEE] text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#1769E0]/15 via-[#6C3FE8]/12 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-3">
              <Breadcrumbs items={[{ label: 'Start a Project' }]} />
            </div>

            <div className="mb-2.5">
              <Badge variant="gradient" size="md">
                PROJECT ESTIMATOR & PROPOSAL WIZARD
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B3A] tracking-tight leading-tight">
              Let's Build Something High-Impact.
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#556987] leading-relaxed">
              Tell us about your requirements, project scope, and target timeline. Our lead architects will prepare a comprehensive technical proposal and milestone estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Intake Form Section */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white via-[#F7FAFD] to-[#EDF3FB] border border-[#D2DEEE] shadow-elevated text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1B3A]">
                Proposal Request Received!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Thank you for reaching out to Pravaah Technology. A senior solution architect is reviewing your specifications and will respond at <span className="font-bold text-[#1769E0]">{formData.email}</span> within 24 hours.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link to="/">
                  <Button variant="primary" size="md">
                    Return to Home
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hi Pravaah Technology, I just submitted a project proposal request!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="md" className="gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Quick WhatsApp Chat</span>
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-white via-[#F7FAFD] to-[#EDF3FB] border border-[#D2DEEE] shadow-elevated space-y-6">
              
              {/* Step 1: Select Services */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1769E0] flex items-center justify-center text-[11px] font-bold">1</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A]">
                    What services or capabilities do you need?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {SERVICE_OPTIONS.map((srv) => {
                    const Icon = srv.icon;
                    const isSelected = selectedServices.includes(srv.id);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#1769E0] bg-blue-50/80 shadow-xs'
                            : 'border-[#E4E7EC] hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#1769E0] text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-[#0B1B3A]">{srv.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget Range */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1769E0] flex items-center justify-center text-[11px] font-bold">2</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A]">
                    What is your estimated project budget?
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {BUDGET_TIERS.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setSelectedBudget(tier)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        selectedBudget === tier
                          ? 'border-[#1769E0] bg-[#1769E0] text-white shadow-xs'
                          : 'border-[#E4E7EC] bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Target Timeline */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1769E0] flex items-center justify-center text-[11px] font-bold">3</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A]">
                    Target delivery timeline
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIMELINE_OPTIONS.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTimeline(time)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer ${
                        selectedTimeline === time
                          ? 'border-[#6C3FE8] bg-[#6C3FE8] text-white shadow-xs'
                          : 'border-[#E4E7EC] bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact & Project Details */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1769E0] flex items-center justify-center text-[11px] font-bold">4</span>
                  <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A]">
                    Contact Information & Project Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Project Overview & Deliverables *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what you want to build, existing systems, key features, or any specific constraints..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E7EC] bg-[#F7F9FC] text-xs sm:text-sm text-[#0B1B3A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1769E0] resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500">
                  🔒 Strictly confidential. Protected under mutual NDA.
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  withArrow
                  loading={isSubmitting}
                  className="w-full sm:w-auto shadow-glow-blue px-6 py-2.5 sm:py-3 text-sm font-semibold"
                >
                  Submit Project Proposal
                </Button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
