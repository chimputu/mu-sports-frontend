/**
 * @fileoverview 404 page for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { Search } from 'lucide-react';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-md mx-auto px-4">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
        <Search className="w-5 h-5 text-slate-400" aria-hidden="true" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
        Page not found
      </h1>
      <p className="text-sm text-slate-500 leading-relaxed mb-6">
        The page you are looking for does not exist. Check the URL, or
        browse our sports catalogue.
      </p>
      <Link href="/" className="btn-secondary">
        Go to homepage
      </Link>
    </div>
  );
}