/**
 * @fileoverview Root error boundary for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              The application could not load. Reload the page to try again.
            </p>
            <button type="button" onClick={reset} className="btn-primary">
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}