/**
 * @fileoverview Teams listing page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { Users } from 'lucide-react';
import { muFetch } from '@/app/_lib/api';
import PageHeader from '@/app/_components/Common/PageHeader';
import EmptyState from '@/app/_components/Common/EmptyState';
import TeamCard from '@/app/_components/Teams/TeamCard';

async function getTeams() {
  try {
    const res = await muFetch('/api/teams', { revalidate: 120 });
    return res?.data || [];
  } catch {
    return [];
  }
}

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <PageHeader
        eyebrow="Registered squads"
        title="Teams"
        description="Every team registered with the Mulungushi University Sports Unit."
      />

      {teams.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No teams yet"
          description="Team registrations appear here once approved. Sign in to register your squad."
          actionHref="/register"
          actionLabel="Create account"
        />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((team) => (
            <li key={team.id}>
              <TeamCard team={team} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}