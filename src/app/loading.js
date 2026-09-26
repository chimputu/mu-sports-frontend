/**
 * @fileoverview Root loading skeleton.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="h-3 w-32 bg-slate-100 rounded mb-4" aria-hidden="true" />
      <div className="h-10 w-80 max-w-full bg-slate-100 rounded mb-10" aria-hidden="true" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border border-slate-200 rounded-md p-5 bg-white">
            <div className="h-4 w-3/4 bg-slate-100 rounded mb-3" aria-hidden="true" />
            <div className="h-3 w-1/2 bg-slate-100 rounded mb-2" aria-hidden="true" />
            <div className="h-3 w-1/3 bg-slate-100 rounded" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}