export interface WhyChooseUsItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  points: string[];
}

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'experienced-team',
    title: 'Experienced Engineering Team',
    tagline: 'Senior technical craft & domain mastery',
    description: 'Our core team brings years of specialized experience in full-stack web, mobile architectures, cloud engineering, and applied AI systems.',
    iconName: 'Users',
    badge: 'Senior Talent',
    points: [
      'Full-stack architecture specialists',
      'Modern TypeScript & Next.js experts',
      'Direct developer-to-client communication',
    ],
  },
  {
    id: 'modern-technology',
    title: 'Modern & Scalable Tech Stack',
    tagline: 'Zero legacy debt, built for future growth',
    description: 'We construct systems with modern frameworks, high-throughput microservices, edge computing, and reactive state architectures.',
    iconName: 'Cpu',
    badge: 'State of the Art',
    points: [
      'React 19, Next.js 15 & Node.js ecosystem',
      'High-performance PostgreSQL & Redis caching',
      'Edge deployment with Cloudflare & AWS',
    ],
  },
  {
    id: 'scalable-solutions',
    title: 'Scalable Cloud-Native Solutions',
    tagline: 'Engineered to handle 10x to 100x traffic',
    description: 'Every database schema, API route, and UI component is architected to perform smoothly under high concurrent user load.',
    iconName: 'Layers',
    badge: 'High Performance',
    points: [
      'Sub-second API response benchmarks',
      'Elastic cloud scaling & load balancing',
      'Automated database indexing & optimization',
    ],
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Agile Sprints',
    tagline: 'Transparent milestones and zero surprises',
    description: 'Structured sprint plans, continuous staging demonstrations, and strict adherence to agreed project deadlines.',
    iconName: 'Clock',
    badge: '100% Reliable',
    points: [
      'Bi-weekly staging reviews & feedback loops',
      'Clear project Gantt charts & milestone tracking',
      'Dedicated project manager & technical lead',
    ],
  },
  {
    id: 'client-focused',
    title: 'Client-Focused Partnership',
    tagline: 'We build tailored software that drives revenue',
    description: 'We prioritize your actual business goals over generic code. Every feature is designed to convert users and optimize operations.',
    iconName: 'Sparkles',
    badge: 'Business First',
    points: [
      '100% Intellectual Property (IP) ownership',
      'Custom UI/UX designed around conversion rates',
      'Comprehensive code handover & documentation',
    ],
  },
  {
    id: 'long-term-support',
    title: 'Long-Term Support & Warranty',
    tagline: 'We stand firmly behind the software we build',
    description: 'Complimentary post-launch warranty, ongoing security updates, proactive monitoring, and SLA-backed maintenance packages.',
    iconName: 'ShieldCheck',
    badge: 'Guaranteed Support',
    points: [
      'Dedicated post-deployment warranty period',
      '24/7 uptime monitoring & critical alerting',
      'Continuous security patches & feature iterations',
    ],
  },
];
