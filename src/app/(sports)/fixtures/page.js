/**
 * @fileoverview Fixtures listing page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { Calendar } from 'lucide-react';
import { muFetch } from '@/app/_lib/api';
import PageHeader from '@/app/_components/Common/PageHeader';
import EmptyState from '@/app/_components/Common/EmptyState';
import MatchRow from '@/app/_components/Fixtures/MatchRow';

async function getAllMatches() {
  try {
    const res = await muFetch('/api/matches', { revalidate: 60 });
    return res?.data || [];
  } catch {
    return [];
  }
}

export default async function FixturesPage() {
  const matches = await getAllMatches();
  const upcoming = matches.filter(
    (m) => m.status === 'SCHEDULED' || m.status === 'LIVE'
  );
  const past = matches.filter((m) => m.status === 'COMPLETED');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <PageHeader
        eyebrow="Match centre"
        title="Fixtures"
        description="Every scheduled fixture, live match, and recorded result across all sports."
      />

      <section className="mb-14">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
          Upcoming
        </h2>
        {upcoming.length === 0 ? (
          <EmptyState
            icon={Calendar}
            title="No upcoming matches"
            description="Check back after the next scheduling window, or browse past results below."
            actionHref="/standings"
            actionLabel="View standings"
          />
        ) : (
          <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md bg-white">
            {upcoming.map((match) => (
              <li key={match.id}>
                <MatchRow match={match} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {past.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
            Results
          </h2>
          <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md bg-white">
            {past.map((match) => (
              <li key={match.id}>
                <MatchRow match={match} showScore />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}