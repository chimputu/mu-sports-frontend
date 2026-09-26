/**
 * @fileoverview Team detail page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { notFound } from 'next/navigation';
import { muFetch, ApiError } from '@/app/_lib/api';
import Badge from '@/app/_components/Common/Badge';

async function getTeam(slug) {
  try {
    const res = await muFetch(`/api/teams/${slug}`, { revalidate: 120 });
    return res?.data || null;
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
}

export async function generateMetadata({ params }) {
  const team = await getTeam(params.slug);
  if (!team) return { title: 'Team not found' };
  return {
    title: team.name,
    description: `${team.name} (${team.college}) — ${team.sport.name} at Mulungushi University.`,
  };
}

export default async function TeamDetailPage({ params }) {
  const team = await getTeam(params.slug);
  if (!team) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="mb-4">
        <Badge tone="primary">{team.sport.name}</Badge>
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
        {team.name}
      </h1>
      <p className="text-base text-slate-700 mb-10">{team.college}</p>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
          Roster
        </h2>
        {team.members?.length ? (
          <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md bg-white">
            {team.members.map((m) => (
              <li key={m.id} className="flex items-center justify-between p-4">
                <span className="text-sm font-medium text-slate-900">
                  {m.user.name}
                </span>
                <span className="micro-label text-slate-500">{m.role}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">
            No players registered yet. Rosters appear once team members are added.
          </p>
        )}
      </section>
    </div>
  );
}