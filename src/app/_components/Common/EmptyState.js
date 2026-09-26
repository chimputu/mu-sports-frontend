/**
 * @fileoverview Empty state component used across lists and tables.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionHref,
  actionLabel,
}) {
  return (
    <div className="py-16 text-center max-w-md mx-auto">
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-5 h-5 text-slate-400" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-slate-500 leading-relaxed mb-6">{description}</p>
      )}
      {actionHref && actionLabel && (
        <Link href={actionHref} className="btn-secondary">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}