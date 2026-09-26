/**
 * @fileoverview MU Sports homepage.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Hero from './_components/Home/Hero';
import QuickActions from './_components/Home/QuickActions';
import UpcomingMatches from './_components/Home/UpcomingMatches';

export const metadata = {
  title: 'MU Sports — Mulungushi University Sports Platform',
  description:
    'Follow fixtures, book facilities, track inter-college standings, and register your team for Mulungushi University sports.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MU Sports',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  publisher: {
    '@type': 'Organization',
    name: 'Mulungushi University',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <QuickActions />
      <UpcomingMatches />
    </>
  );
}