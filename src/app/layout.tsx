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
  weight: ['300', '400', '500', '600'],
  variable: '--font-body'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Robel Yinager — Full-Stack Developer',
  description: 'Full-Stack Developer and Software Engineer based in Injibara, Ethiopia. Specializing in React, Next.js, Node.js, TypeScript and MERN stack solutions.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'MERN Stack', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Ethiopia'],
  authors: [{ name: 'Robel Yinager', url: 'https://github.com/robelyinager12-web' }],
  creator: 'Robel Yinager',
  openGraph: {
    type: 'website',
    title: 'Robel Yinager — Full-Stack Developer',
    description: 'Full-Stack Developer based in Injibara, Ethiopia.',
    siteName: 'Robel Yinager Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robel Yinager — Full-Stack Developer',
    description: 'Full-Stack Developer based in Injibara, Ethiopia.'
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={[display.variable, body.variable, mono.variable].join(' ')}
      suppressHydrationWarning
    >
      <body
        className="font-body antialiased"
        style={{
          background: '#050816',
          color: '#E2E8F0',
          fontFamily: 'var(--font-body)',
          fontWeight: 400
        }}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
