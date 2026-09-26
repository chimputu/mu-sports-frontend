/**
 * @fileoverview Site header for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { Trophy } from 'lucide-react';
import { primaryNav } from '@/app/_data/navigation';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus-visible:outline-none"
            aria-label="MU Sports homepage"
          >
            <span className="w-8 h-8 rounded-md bg-primary-50 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-primary-600" aria-hidden="true" />
            </span>
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-primary-600">MU</span> Sports
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-700 rounded-md transition-colors duration-150 hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/login" className="btn-ghost">
              Sign in
            </Link>
            <Link href="/register" className="btn-primary px-4 py-2 text-xs">
              Join
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}