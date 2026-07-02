export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: 'email' | 'github' | 'linkedin' | 'twitter' | 'telegram';
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  color: 'cyan' | 'violet' | 'pink';
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  accentColor: 'cyan' | 'violet' | 'pink';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'full-time' | 'freelance' | 'part-time';
  highlights: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  note: string;
  type: 'degree' | 'certification';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Service {
  title: string;
  description: string;
  icon: 'fullstack' | 'frontend' | 'backend' | 'database' | 'cloud';
  color: 'cyan' | 'violet' | 'pink';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  url: string;
  tag: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  updated_at: string;
}

export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}