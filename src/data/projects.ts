import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    description:
      'A comprehensive healthcare platform streamlining patient records, appointments, billing, and day-to-day hospital operations.',
    longDescription:
      'A full-featured healthcare management platform built to handle the complexity of modern hospital operations. Includes patient registration and record management, appointment scheduling with real-time availability, automated billing and invoice generation, staff management with role-based access control, pharmacy inventory tracking, and detailed analytics dashboards for hospital administrators.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
    accentColor: 'cyan'
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A scalable online marketplace with secure authentication, Stripe payment integration, and real-time inventory management.',
    longDescription:
      'A production-grade e-commerce platform built for scale. Features include product catalogue with advanced filtering and search, secure user authentication with JWT and OAuth, Stripe payment processing with webhook support, real-time inventory management, order tracking and history, admin dashboard for product and order management, and automated email notifications for order updates.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Node.js', 'Redux'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
    accentColor: 'violet'
  },
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    description:
      'An educational platform supporting course creation, assessments, progress tracking, and instructor dashboards.',
    longDescription:
      'A feature-rich learning management system designed for educational institutions and independent instructors. Supports video course creation and hosting, interactive quizzes and assessments, student progress tracking with detailed analytics, certificate generation on course completion, real-time discussion forums, instructor earnings dashboard, and a subscription-based payment model with multiple tier options.',
    tags: ['Next.js', 'Express', 'MongoDB', 'TypeScript', 'Socket.io', 'AWS S3'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
    accentColor: 'pink'
  },
  {
    slug: '3d-data-visualizer',
    title: '3D Data Visualizer',
    description:
      'An interactive WebGL dashboard that maps live metrics onto a navigable 3D scene using Three.js and React.',
    longDescription:
      'A cutting-edge data visualization tool that transforms raw metrics into immersive 3D experiences. Built with Three.js and React Three Fiber, it renders live data as interactive 3D charts, graphs, and spatial visualizations that users can navigate and explore. Connects to REST APIs and WebSockets for real-time data updates, supports multiple visualization types including 3D bar charts, scatter plots, network graphs, and geographic data maps.',
    tags: ['React', 'Three.js', 'Node.js', 'MySQL', 'WebSockets', 'D3.js'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
    accentColor: 'cyan'
  }
];