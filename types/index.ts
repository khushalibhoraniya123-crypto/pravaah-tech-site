export type ServiceCategory = 
  | 'web'
  | 'mobile'
  | 'uiux'
  | 'software'
  | 'ai'
  | 'digital';

export interface ServiceItem {
  id: string;
  number: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  challenges: {
    title: string;
    points: string[];
  };
  approach: {
    title: string;
    points: string[];
  };
  benefits: string[];
  process: {
    step: string;
    phase: string;
    description: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  caseStudyRef?: {
    name: string;
    link: string;
  };
}


export interface SolutionChallenge {
  title: string;
  points: string[];
}

export interface SolutionApproach {
  title: string;
  points: string[];
}

export interface SolutionMetric {
  value: string;
  label: string;
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  category: 'enterprise' | 'industry';
  description: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  architecture: string[];
  challenges: SolutionChallenge;
  approach: SolutionApproach;
  deliverables: string[];
  metrics: SolutionMetric[];
  caseStudyHighlight?: {
    name: string;
    link: string;
    result: string;
  };
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
  category?: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  iconName: string;
  color?: string;
}

export type ProcessPhase = ProcessStep;

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
