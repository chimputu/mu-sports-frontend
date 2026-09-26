/**
 * @fileoverview About page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <p className="micro-label text-slate-500 mb-2">About</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
        Sport, without the notice board.
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-slate-700 max-w-3xl">
        <p>
          MU Sports is the official sports platform for Mulungushi University.
          It replaces the notice boards, WhatsApp groups, and paper sign-up
          sheets that used to coordinate university sport.
        </p>
        <p>
          Students can find fixtures, follow live scores, check league
          standings, book facilities, and register teams. Sports Unit staff
          can schedule matches, record results, and confirm bookings from a
          single interface.
        </p>
        <p>
          The platform is built mobile-first for the reality of Zambian campus
          networks. It loads fast on mid-range Android phones and works on
          intermittent connections.
        </p>
      </div>

      <section className="mt-14 pt-10 border-t border-slate-200">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
          Owners
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Built by Kafiswe Chimputu and Elijah Manda, Full Stack Developers,
          Mulungushi University.
        </p>
      </section>
    </article>
  );
}