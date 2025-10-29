import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Adjuvant Ambulance Transport - Medical Transportation Services Houston',
  description: '24/7 Emergency Medical Transportation Services in Houston, Texas. Professional ambulance service provider committed to delivering prompt medical transport.',
  keywords: 'ambulance, medical transport, emergency services, Houston, Texas, medical transportation',
  authors: [{ name: 'Adjuvant Ambulance Transport' }],
  openGraph: {
    title: 'Adjuvant Ambulance Transport - Medical Transportation Services Houston',
    description: '24/7 Emergency Medical Transportation Services in Houston, Texas. Professional ambulance service provider committed to delivering prompt medical transport.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adjuvant Ambulance Transport - Medical Transportation Services Houston',
    description: '24/7 Emergency Medical Transportation Services in Houston, Texas. Professional ambulance service provider committed to delivering prompt medical transport.',
  },
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}// Force rebuild Wed Oct 29 13:34:18 CDT 2025
