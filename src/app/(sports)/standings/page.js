/**
 * @fileoverview Standings page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { Trophy } from 'lucide-react';
import { muFetch } from '@/app/_lib/api';
import PageHeader from '@/app/_components/Common/PageHeader';
import EmptyState from '@/app/_components/Common/EmptyState';
import StandingsTable from '@/app/_components/Standings/StandingsTable';

async function getStandings() {
  try {
    const res = await muFetch('/api/standings', { revalidate: 120 });
    return res?.data || [];
  } catch {
    return [];
  }
}

export default async function StandingsPage() {
  const rows = await getStandings();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <PageHeader
        eyebrow="League tables"
        title="Standings"
        description="Ordered by points, then goal difference. Updated after each match."
      />

      {rows.length === 0 ? (
        <EmptyState
          icon={Trophy}
          title="No standings yet"
          description="Standings appear once matches have been played and results recorded."
          actionHref="/fixtures"
          actionLabel="View fixtures"
        />
      ) : (
        <StandingsTable rows={rows} />
      )}
    </div>
  );
}