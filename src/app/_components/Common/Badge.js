/**
 * @fileoverview Badge component for status labels.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

const TONES = {
  primary: 'bg-primary-50 text-primary-700 border-primary-50',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-red-50 text-red-700 border-red-200',
  info: 'bg-accent-50 text-accent-600 border-accent-50',
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function Badge({ tone = 'neutral', children }) {
  const styles = TONES[tone] || TONES.neutral;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm border ${styles}`}
    >
      {children}
    </span>
  );
}