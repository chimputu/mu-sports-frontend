/**
 * @fileoverview Alert component for inline callouts.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { CheckCircle2, AlertTriangle, Info, XCircle } from 'lucide-react';

const VARIANTS = {
  success: {
    wrapper: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    icon: CheckCircle2,
  },
  warning: {
    wrapper: 'border-amber-200 bg-amber-50 text-amber-900',
    icon: AlertTriangle,
  },
  error: {
    wrapper: 'border-red-200 bg-red-50 text-red-900',
    icon: XCircle,
  },
  info: {
    wrapper: 'border-accent-50 bg-accent-50 text-slate-900',
    icon: Info,
  },
};

export default function Alert({ variant = 'info', title, children }) {
  const config = VARIANTS[variant] || VARIANTS.info;
  const Icon = config.icon;

  return (
    <div className={`border rounded-md p-4 text-sm ${config.wrapper}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
}