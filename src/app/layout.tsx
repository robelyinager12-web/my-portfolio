import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Robel Yinager — Full-Stack Engineer',
  description:
    'Full-stack engineer and MERN developer specializing in React, Next.js, TypeScript, Three.js, Node.js and Express, with experience across MongoDB, PostgreSQL and MySQL.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'MERN Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Three.js',
    'Node.js',
    'MongoDB',
    'PostgreSQL'
  ],
  authors: [{ name: 'Robel Yinager' }],
  openGraph: {
    title: 'Robel Yinager — Full-Stack Engineer',
    description:
      'Full-stack engineer and MERN developer building interactive, production-grade web applications.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robel Yinager — Full-Stack Engineer',
    description:
      'Full-stack engineer and MERN developer building interactive, production-grade web applications.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash script: runs before React hydrates so dark mode
            is applied instantly, with no white flash on first load. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('portfolio-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark) || (!stored && !window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}