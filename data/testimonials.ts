export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  content: string;
  projectTag: string;
  metricHighlight: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rajesh Shah',
    role: 'Managing Director',
    company: 'FinPulse Advisory',
    avatarText: 'RS',
    avatarBg: 'from-[#1769E0] to-[#00D2FF]',
    rating: 5,
    content: 'Pravaah Technology completely overhauled our legacy advisory portal into a blazingly fast Next.js web platform. Our client onboarding time dropped by 65% and client feedback has been extraordinary.',
    projectTag: 'Web & Financial Portal',
    metricHighlight: '65% Faster Onboarding',
  },
  {
    id: '2',
    name: 'Aakash Patel',
    role: 'Founder & CEO',
    company: 'LogiFlow Supply Chain',
    avatarText: 'AP',
    avatarBg: 'from-[#6638E8] to-[#1769E0]',
    rating: 5,
    content: 'The team delivered our custom multi-warehouse ERP system ahead of schedule. Their attention to clean code, seamless database synchronization, and mobile responsiveness made a world of difference.',
    projectTag: 'Custom ERP & Cloud System',
    metricHighlight: '100% Milestone Accuracy',
  },
  {
    id: '3',
    name: 'Pooja Mehta',
    role: 'Chief Product Officer',
    company: 'Aura Care Telehealth',
    avatarText: 'PM',
    avatarBg: 'from-[#00D2FF] to-[#10B981]',
    rating: 5,
    content: 'Finding a software development partner that truly understands HIPAA compliance and responsive UI/UX is rare. Pravaah Technologies delivered a world-class telemedicine mobile and web application.',
    projectTag: 'Healthcare & Mobile App',
    metricHighlight: '4.9/5 User Rating',
  },
  {
    id: '4',
    name: 'Vikram Desai',
    role: 'Operations Head',
    company: 'Gourmet Express',
    avatarText: 'VD',
    avatarBg: 'from-[#F59E0B] to-[#EF4444]',
    rating: 5,
    content: 'The automated Kitchen Display and QR POS system built by Pravaah automated our entire restaurant operations across 4 locations. Order processing speed doubled within the first month.',
    projectTag: 'POS & Automation Pipeline',
    metricHighlight: '2x Order Throughput',
  },
];
