/**
 * @fileoverview Homepage upcoming matches section.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { muFetch } from '@/app/_lib/api';
import { formatDateTime } from '@/app/_lib/format';
import EmptyState from '@/app/_components/Common/EmptyState';

async function getUpcoming() {
  try {
    const res = await muFetch('/api/matches?status=SCHEDULED', { revalidate: 60 });
    return (res?.data || []).slice(0, 4);
  } catch {
    return [];
  }
}

export default async function UpcomingMatches() {
  const matches = await getUpcoming();

  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="micro-label text-slate-500 mb-2">Fixtures</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Upcoming matches
            </h2>
          </div>
          <Link
            href="/fixtures"
            className="btn-ghost text-primary-600 shrink-0"
          >
            View all
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {matches.length === 0 ? (
          <EmptyState
            icon={Calendar}
            title="No upcoming matches"
            description="Fixtures will appear here once the Sports Unit publishes the next round."
            actionHref="/standings"
            actionLabel="View standings"
          />
        ) : (
          <ul className="grid md:grid-cols-2 gap-4">
            {matches.map((match) => (
              <li key={match.id}>
                <Link
                  href={`/fixtures/${match.id}`}
                  className="block border border-slate-200 rounded-md p-5 bg-white transition-colors duration-150 hover:border-slate-300"
                >
                  <p className="micro-label text-primary-600 mb-2">
                    {formatDateTime(match.kickoff)}
                  </p>
                  <p className="text-base font-semibold text-slate-900 mb-2">
                    {match.homeTeam.name} vs {match.awayTeam.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {match.venue?.name ?? 'Venue to be confirmed'}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}