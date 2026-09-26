/**
 * @fileoverview Match row used in fixtures listing.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { formatDateTime } from '@/app/_lib/format';

export default function MatchRow({ match, showScore = false }) {
  const hasScore = showScore && match.homeScore != null && match.awayScore != null;

  return (
    <Link
      href={`/fixtures/${match.id}`}
      className="flex items-center justify-between gap-4 p-5 transition-colors duration-150 hover:bg-slate-50"
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">
          {match.homeTeam.name} vs {match.awayTeam.name}
        </p>
        <p className="text-xs text-slate-500 mt-1 truncate">
          {formatDateTime(match.kickoff)}
          {match.venue && <> · {match.venue.name}</>}
        </p>
      </div>
      {hasScore && (
        <p className="text-lg font-semibold text-slate-900 tabular-nums shrink-0">
          {match.homeScore}–{match.awayScore}
        </p>
      )}
    </Link>
  );
}