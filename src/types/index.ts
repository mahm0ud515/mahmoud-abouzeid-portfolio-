export interface Profile {
  name: string;
  titles: string[];
  currentRole: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
  summary: string;
  shortBio: string;
  keyStats: {
    label: string;
    value: string;
    helper: string;
  }[];
  specializations: {
    title: string;
    description: string;
    icon: string;
    tags: string[];
  }[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectImage {
  url: string;
  caption: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Healthcare AI' | 'Agentic & RAG' | 'Computer Vision' | 'Mobile & On-Device AI' | 'NLP & Analytics';
  featured: boolean;
  publishedOrShowcased?: string;
  period: string;
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  metrics: MetricItem[];
  contributions: string[];
  datasetInfo?: string;
  architectureSteps?: {
    step: string;
    description: string;
  }[];
  images?: ProjectImage[];
  links?: {
    github?: string;
    demo?: string;
    manuscript?: string;
  };
}

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  provider: string;
  period: string;
  duration: string;
  topics: string[];
  projects: string[];
}

export interface AwardItem {
  title: string;
  entity: string;
  amountOrMetric?: string;
  date: string;
  description: string;
}
