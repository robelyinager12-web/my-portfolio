import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    description:
      'A comprehensive healthcare platform streamlining patient records, appointments, billing, and day-to-day hospital operations.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    liveUrl: '#',
    repoUrl: '#',
    accentFrom: '#7C8CF0',
    accentTo: '#5FD4E8'
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A scalable online marketplace with secure authentication, Stripe payment integration, and real-time inventory management.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    accentFrom: '#9D8CF0',
    accentTo: '#5FD4E8'
  },
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    description:
      'An educational platform supporting course creation, assessments, progress tracking, and instructor dashboards.',
    tags: ['Next.js', 'Express', 'MongoDB', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    accentFrom: '#7C8CF0',
    accentTo: '#EC4899'
  },
  {
    slug: '3d-data-visualizer',
    title: '3D Data Visualizer',
    description:
      'An interactive WebGL dashboard that maps live metrics onto a navigable 3D scene — the same technique behind this site\'s background.',
    tags: ['React', 'Three.js', 'Node.js', 'MySQL'],
    liveUrl: '#',
    repoUrl: '#',
    accentFrom: '#0EA5B7',
    accentTo: '#7C3AED'
  }
];
