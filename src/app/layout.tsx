import type { Metadata } from 'next';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Robel Yinager — Full-Stack Developer',
  description: 'Full-Stack Developer and Software Engineer based in Injibara, Ethiopia. Specializing in React, Next.js, Node.js, TypeScript and MERN stack solutions.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'MERN Stack', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Ethiopia'],
  authors: [{ name: 'Robel Yinager' }],
  creator: 'Robel Yinager',
  openGraph: {
    type: 'website',
    title: 'Robel Yinager — Full-Stack Developer',
    description: 'Full-Stack Developer based in Injibara, Ethiopia.',
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
