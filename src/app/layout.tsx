import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Robel Yinager — Full-Stack Engineer',
  description: 'Full-stack engineer and MERN developer specializing in React, Next.js, TypeScript, Three.js, Node.js and Express based in Injibara Ethiopia.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'MERN Stack', 'React', 'Next.js', 'TypeScript', 'Three.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Ethiopia'],
  authors: [{ name: 'Robel Yinager', url: 'https://github.com/robelyinager12-web' }],
  creator: 'Robel Yinager',
  openGraph: {
    type: 'website',
    title: 'Robel Yinager — Full-Stack Engineer',
    description: 'Full-stack engineer and MERN developer building interactive production-grade web applications.',
    siteName: 'Robel Yinager Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robel Yinager — Full-Stack Engineer',
    description: 'Full-stack engineer and MERN developer building interactive production-grade web applications.'
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[display.variable, body.variable, mono.variable].join(' ')} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('theme');
            if (t === 'light') {
              document.documentElement.classList.add('light');
            }
          } catch(e) {}
        `}} />
      </head>
      <body className="font-body antialiased bg-bg-primary text-text-primary">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
