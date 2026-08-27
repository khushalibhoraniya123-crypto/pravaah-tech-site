import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { QueryProvider } from '@/components/providers/query-provider';
import { CONTACT_CONFIG } from '@/config/contact';

export const metadata: Metadata = {
  metadataBase: new URL('https://pravaahtechnology.com'),
  title: `${CONTACT_CONFIG.companyName} - Modern Technology Agency & AI Software Development`,
  description: CONTACT_CONFIG.tagline,
  keywords: [
    'Pravaah Technology',
    'Web Development',
    'App Development',
    'AI Solutions',
    'Software Architecture',
    'Next.js Development',
    'ERP Systems',
    'Surat Technology Agency',
  ],
  authors: [{ name: CONTACT_CONFIG.companyName }],
  openGraph: {
    title: `${CONTACT_CONFIG.companyName} - Modern Technology Agency`,
    description: CONTACT_CONFIG.tagline,
    url: 'https://pravaahtechnology.com',
    siteName: CONTACT_CONFIG.companyName,
    images: [
      {
        url: '/logo/Logo Horizontal Dark.png',
        width: 1200,
        height: 630,
        alt: CONTACT_CONFIG.companyName,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-[#0B1B3A]">
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
