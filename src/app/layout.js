/**
 * @fileoverview Root layout for MU Sports platform.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { Inter } from 'next/font/google';
import Header from '@/app/_components/Layout/Header';
import Footer from '@/app/_components/Layout/Footer';
import Providers from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MU Sports — Mulungushi University Sports Platform',
    template: '%s — MU Sports',
  },
  description:
    'Follow fixtures, book facilities, track inter-college standings, and register your team for Mulungushi University sports.',
  applicationName: 'MU Sports',
  authors: [{ name: 'Kafiswe Chimputu' }, { name: 'Elijah Manda' }],
  openGraph: {
    type: 'website',
    siteName: 'MU Sports',
    title: 'MU Sports — Mulungushi University',
    description: 'The official sports platform for Mulungushi University.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MU Sports — Mulungushi University',
    description: 'The official sports platform for Mulungushi University.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:border focus:border-slate-300"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}