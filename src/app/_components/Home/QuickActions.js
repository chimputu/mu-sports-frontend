/**
 * @fileoverview Homepage quick action tiles.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { Calendar, Trophy, MapPin, Users } from 'lucide-react';

const ACTIONS = [
  { href: '/fixtures', icon: Calendar, label: 'Fixtures', desc: 'Upcoming matches' },
  { href: '/standings', icon: Trophy, label: 'Standings', desc: 'League tables' },
  { href: '/bookings', icon: MapPin, label: 'Bookings', desc: 'Reserve facilities' },
  { href: '/teams', icon: Users, label: 'Teams', desc: 'Register your squad' },
];

export default function QuickActions() {
  return (
    <section className="section-pad border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="micro-label text-slate-500 mb-6">What you can do</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACTIONS.map(({ href, icon: Icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="border border-slate-200 rounded-md p-5 bg-white transition-colors duration-150 hover:border-slate-300"
            >
              <div className="w-10 h-10 rounded-md bg-primary-50 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
              </div>
              <h2 className="text-base font-semibold text-slate-900 mb-1">{label}</h2>
              <p className="text-xs text-slate-500">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}