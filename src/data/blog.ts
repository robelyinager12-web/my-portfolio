import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-apis-with-nodejs',
    title: 'Building Scalable APIs with Node.js',
    excerpt:
      'Patterns for structuring Express and Node.js APIs that stay maintainable as traffic and team size grow.',
    date: '2026-04-12',
    readMinutes: 7,
    url: '#'
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js Performance Optimization',
    excerpt:
      'Practical techniques for cutting load times in Next.js apps — from image handling to render strategy.',
    date: '2026-03-02',
    readMinutes: 9,
    url: '#'
  },
  {
    slug: 'modern-database-design-principles',
    title: 'Modern Database Design Principles',
    excerpt:
      'How to choose between relational and document databases, and design schemas that age well.',
    date: '2026-01-18',
    readMinutes: 8,
    url: '#'
  },
  {
    slug: 'software-architecture-best-practices',
    title: 'Software Architecture Best Practices',
    excerpt:
      'Lessons on keeping systems decoupled, testable, and easy to hand off to the next engineer.',
    date: '2025-11-30',
    readMinutes: 10,
    url: '#'
  }
];