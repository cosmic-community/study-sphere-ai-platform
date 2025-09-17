import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CosmicBadge from '@/components/CosmicBadge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Study Sphere AI - Intelligent Parental Control & Learning Platform',
  description: 'Revolutionary AI-powered learning platform that combines intelligent parental controls with adaptive tutoring, collaborative study environments, and comprehensive progress tracking.',
  keywords: 'AI tutoring, parental control, study app, educational technology, learning platform, app blocking, collaborative learning',
  authors: [{ name: 'Study Sphere AI Team' }],
  openGraph: {
    title: 'Study Sphere AI - Intelligent Learning Platform',
    description: 'AI-powered education platform with parental controls and collaborative learning.',
    type: 'website',
    url: 'https://studysphere.ai',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}