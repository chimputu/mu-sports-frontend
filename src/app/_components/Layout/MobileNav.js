/**
 * @fileoverview Mobile navigation drawer.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '@/app/_data/navigation';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-slate-700 hover:text-primary-600 transition-colors duration-150"
      >
        {open ? (
          <X className="w-5 h-5" aria-hidden="true" />
        ) : (
          <Menu className="w-5 h-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-slate-700 border-b border-slate-200 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login" onClick={() => setOpen(false)} className="btn-secondary">
                Sign in
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="btn-primary">
                Join
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}