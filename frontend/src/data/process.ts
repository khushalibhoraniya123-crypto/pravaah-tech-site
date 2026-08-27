import type { ProcessStep } from '../services/types';

export const PROCESS_DATA: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Understanding Your Requirements',
    description: 'We meet with you to discuss your project goals, core features, timeline, and what your users actually need.',
    highlights: ['Initial Consultation', 'Feature Scope Definition', 'Technical Assessment', 'Budget & Timeline Plan'],
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'PLAN',
    tagline: 'Roadmap & Architecture',
    description: 'We outline the database structure, select the right tech stack, and create clear milestones for the build.',
    highlights: ['Tech Stack Selection', 'Milestone Schedule', 'Database Architecture', 'Clear Deliverables'],
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'DESIGN',
    tagline: 'UI/UX & Interactive Prototypes',
    description: 'We create clean wireframes and clickable Figma prototypes so you can test the look and feel before coding begins.',
    highlights: ['Wireframes & User Flows', 'Clickable Figma Prototype', 'Design System & Colors', 'Feedback & Revisions'],
    iconName: 'Palette',
  },
  {
    number: '04',
    title: 'BUILD',
    tagline: 'Clean Code & Development',
    description: 'Our developers build your frontend, backend, and APIs with clean, modular, and well-tested code.',
    highlights: ['Frontend & Mobile UI', 'Secure Backend APIs', 'Database Integration', 'Weekly Progress Updates'],
    iconName: 'Code',
  },
  {
    number: '05',
    title: 'TEST & LAUNCH',
    tagline: 'Quality Testing & Deployment',
    description: 'We test across devices, browsers, and screen sizes to ensure everything runs quickly and smoothly at launch.',
    highlights: ['Cross-Device Testing', 'Speed Optimization', 'Security Check', 'Domain & Cloud Setup'],
    iconName: 'Rocket',
  },
  {
    number: '06',
    title: 'SUPPORT',
    tagline: 'Maintenance & Updates',
    description: 'We stay by your side after launch to handle server maintenance, feature additions, and ongoing technical support.',
    highlights: ['Ongoing Maintenance', 'Performance Monitoring', 'New Feature Updates', 'Quick Support Response'],
    iconName: 'TrendingUp',
  },
];
