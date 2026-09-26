/**
 * @fileoverview Homepage hero section.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <p className="micro-label text-primary-600 mb-4">Mulungushi University</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-3xl mb-6 leading-tight">
          University sports, organised.
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mb-10">
          Follow fixtures, book facilities, track inter-college standings,
          and register your team. All in one place.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/fixtures" className="btn-primary">
            View fixtures
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link href="/bookings" className="btn-secondary">
            Book a facility
          </Link>
        </div>
      </div>
    </section>
  );
}