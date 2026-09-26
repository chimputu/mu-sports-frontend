/**
 * @fileoverview Site footer for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import { footerNav } from '@/app/_data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold tracking-tight mb-3">
              <span className="text-primary-600">MU</span> Sports
            </p>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              The official sports platform for Mulungushi University. Built
              for students, by students.
            </p>
          </div>

          <div>
            <p className="micro-label text-slate-500 mb-4">Platform</p>
            <ul className="space-y-2 text-sm">
              {footerNav.platform.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-700 transition-colors duration-150 hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="micro-label text-slate-500 mb-4">University</p>
            <ul className="space-y-2 text-sm">
              {footerNav.university.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 transition-colors duration-150 hover:text-primary-600"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-slate-700 transition-colors duration-150 hover:text-primary-600"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Mulungushi University Sports Platform.
            All rights reserved.
          </p>
          <p>Built by Kafiswe Chimputu and Elijah Manda, Full Stack Developers.</p>
        </div>
      </div>
    </footer>
  );
}