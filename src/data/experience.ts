import { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    period: '2025 — Present',
    role: 'Software Engineer',
    company: 'Company Name',
    location: 'Remote',
    type: 'full-time',
    highlights: [
      'Lead end-to-end feature delivery across Next.js and TypeScript frontend and Node.js API layer',
      'Designed and shipped a Three.js-powered interactive product visualizer used across the marketing site',
      'Architected and owned PostgreSQL and MongoDB schemas for core platform services',
      'Reduced API response times by optimizing database queries and implementing Redis caching',
      'Mentored junior developers through code reviews and pair programming sessions'
    ]
  },
  {
    period: '2024 — 2025',
    role: 'Full-Stack Developer',
    company: 'Company Name',
    location: 'Hybrid',
    type: 'full-time',
    highlights: [
      'Built and maintained React and Express features across a production MERN codebase',
      'Introduced automated testing with Jest and React Testing Library raising coverage significantly',
      'Implemented real-time features using Socket.io including live notifications and chat',
      'Collaborated directly with design team to deliver pixel-accurate and accessible UI components',
      'Integrated third-party APIs including Stripe payment processing and AWS S3 file storage'
    ]
  },
  {
    period: '2023 — Present',
    role: 'Freelance Developer',
    company: 'Self-employed',
    location: 'Injibara, Ethiopia',
    type: 'freelance',
    highlights: [
      'Delivered full-stack web applications for independent clients across multiple industries',
      'Handled complete project lifecycle from requirements gathering through deployment and support',
      'Built e-commerce stores, management dashboards, and portfolio sites for local businesses',
      'Maintained long-term client relationships through reliable delivery and clear communication'
    ]
  }
];