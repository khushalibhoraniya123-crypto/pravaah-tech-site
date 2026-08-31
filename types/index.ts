export type ServiceCategory = 
  | 'web'
  | 'mobile'
  | 'uiux'
  | 'software'
  | 'ai'
  | 'digital';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  iconName: string;
  features: string[];
  benefits: string[];
  caseStudyHighlight?: string;
}

export interface StatItem {
  value: string;
  numberOnly: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai';
  tag: string;
  level: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export type PortfolioCategory = 'all' | 'Web' | 'Mobile' | 'UI/UX' | 'Software' | 'AI';

export interface CaseStudyChallenge {
  title: string;
  description: string;
  points: string[];
}

export interface CaseStudySolution {
  title: string;
  description: string;
  highlights: string[];
  architecture?: string[];
}

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface CaseStudyProcessStep {
  step: string;
  phase: string;
  description: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
  description: string;
}

export interface CaseStudyGalleryItem {
  url: string;
  caption: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: 'Web' | 'Mobile' | 'UI/UX' | 'Software' | 'AI';
  subtitle: string;
  client: string;
  industry: string;
  year: string;
  timeline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  stats: { label: string; value: string }[];
  deliverables: string[];
  challenge: CaseStudyChallenge;
  solution: CaseStudySolution;
  keyFeatures: CaseStudyFeature[];
  process: CaseStudyProcessStep[];
  results: CaseStudyResult[];
  gallery?: CaseStudyGalleryItem[];
  liveUrl?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface ContactInquiryResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    createdAt: string;
  };
}
