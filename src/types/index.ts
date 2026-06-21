export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  accent: 'indigo' | 'cyan' | 'violet' | 'ink';
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  accentFrom: string;
  accentTo: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Service {
  title: string;
  description: string;
  icon: 'fullstack' | 'frontend' | 'backend' | 'database' | 'cloud';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  url: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}