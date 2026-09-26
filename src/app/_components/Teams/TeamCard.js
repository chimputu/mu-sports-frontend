/**
 * @fileoverview Team card for the teams listing.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import Badge from '@/app/_components/Common/Badge';

export default function TeamCard({ team }) {
  return (
    <Link
      href={`/teams/${team.slug}`}
      className="block border border-slate-200 rounded-md p-5 bg-white transition-colors duration-150 hover:border-slate-300"
    >
      <div className="mb-3">
        <Badge tone="primary">{team.sport?.name || 'Sport'}</Badge>
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{team.name}</h3>
      <p className="text-xs text-slate-500">{team.college}</p>
      {typeof team._count?.members === 'number' && (
        <p className="text-xs text-slate-500 mt-2">
          {team._count.members} {team._count.members === 1 ? 'member' : 'members'}
        </p>
      )}
    </Link>
  );
}