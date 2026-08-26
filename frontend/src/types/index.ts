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

export interface ValueItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
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
