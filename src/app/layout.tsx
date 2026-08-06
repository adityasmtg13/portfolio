import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://adityapulipaka.dev'),
  title: 'Aditya Pulipaka | Software Engineer',
  description: 'Portfolio of Aditya Pulipaka, a Computer Science Engineer focused on full-stack development, AI, ML, and product engineering.',
  keywords: ['Aditya Pulipaka', 'portfolio', 'software engineer', 'full stack developer', 'AI', 'machine learning'],
  alternates: {
    canonical: 'https://adityapulipaka.dev',
  },
  openGraph: {
    title: 'Aditya Pulipaka | Software Engineer',
    description: 'Portfolio of Aditya Pulipaka, a Computer Science Engineer focused on full-stack development, AI, ML, and product engineering.',
    url: 'https://adityapulipaka.dev',
    siteName: 'Aditya Pulipaka',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Aditya Pulipaka portfolio preview' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Pulipaka | Software Engineer',
    description: 'Portfolio of Aditya Pulipaka, a Computer Science Engineer focused on full-stack development, AI, ML, and product engineering.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditya Pulipaka',
  jobTitle: 'Software Engineer',
  description: 'Computer Science Engineer focused on full-stack development, artificial intelligence, machine learning, and product engineering.',
  url: 'https://adityapulipaka.dev',
  sameAs: ['https://github.com/adityasmtg13', 'https://www.linkedin.com/in/aditya-pulipaka-b82587294/'],
  alumniOf: 'VIT-AP University',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050505] text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
