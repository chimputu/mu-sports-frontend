/**
 * @fileoverview Segment error boundary for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { useEffect } from 'react';
import { XCircle } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="border border-red-200 bg-red-50 rounded-md p-4 text-sm text-red-900">
        <div className="flex items-start gap-3">
          <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold mb-1">Something went wrong</p>
            <p className="text-red-800 mb-4">
              We could not load this page. Check your connection and try again.
            </p>
            <button type="button" onClick={reset} className="btn-secondary">
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}