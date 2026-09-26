/**
 * @fileoverview Match detail page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { notFound } from 'next/navigation';
import { MapPin, Calendar } from 'lucide-react';
import { muFetch, ApiError } from '@/app/_lib/api';
import { formatDateTime } from '@/app/_lib/format';
import Badge from '@/app/_components/Common/Badge';
import { MATCH_STATUSES } from '@/app/_lib/constants';

async function getMatch(id) {
  try {
    const res = await muFetch(`/api/matches/${id}`, { revalidate: 30 });
    return res?.data || null;
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
}

export async function generateMetadata({ params }) {
  const match = await getMatch(params.id);
  if (!match) return { title: 'Match not found' };
  return {
    title: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
    description: `Kick off ${formatDateTime(match.kickoff)} at ${
      match.venue?.name || 'Mulungushi University'
    }.`,
  };
}

export default async function MatchDetailPage({ params }) {
  const match = await getMatch(params.id);
  if (!match) notFound();

  const statusTone =
    match.status === 'LIVE'
      ? 'danger'
      : match.status === 'COMPLETED'
        ? 'neutral'
        : match.status === 'SCHEDULED'
          ? 'primary'
          : 'warning';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="mb-8">
        <Badge tone={statusTone}>{MATCH_STATUSES[match.status] || match.status}</Badge>
      </div>

      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
        {match.homeTeam.name} vs {match.awayTeam.name}
      </h1>

      <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-10">
        <span className="inline-flex items-center gap-2">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          {formatDateTime(match.kickoff)}
        </span>
        {match.venue && (
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {match.venue.name}
          </span>
        )}
      </div>

      {match.homeScore !== null && match.awayScore !== null && (
        <div className="border border-slate-200 rounded-md p-8 bg-white mb-10">
          <p className="micro-label text-slate-500 mb-4">Final score</p>
          <p className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 tabular-nums">
            {match.homeScore} – {match.awayScore}
          </p>
        </div>
      )}

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
          Match events
        </h2>
        {match.events?.length ? (
          <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md bg-white">
            {match.events.map((event) => (
              <li key={event.id} className="flex items-center gap-4 p-4">
                <span className="w-10 text-right text-xs text-slate-500 tabular-nums">
                  {event.minute != null ? `${event.minute}'` : '—'}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {event.type.replace(/_/g, ' ').toLowerCase()}
                </span>
                {event.detail && (
                  <span className="text-sm text-slate-500">{event.detail}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">
            No events recorded yet. They appear here as the match progresses.
          </p>
        )}
      </section>
    </div>
  );
}