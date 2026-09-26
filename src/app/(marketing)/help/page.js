/**
 * @fileoverview Help centre page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import { faqCategories } from '@/app/_data/faq';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="micro-label text-slate-500 mb-2">Support</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-10">
        Help centre
      </h1>

      <div className="space-y-12">
        {faqCategories.map((cat) => (
          <section key={cat.slug}>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-5">
              {cat.title}
            </h2>
            <ul className="divide-y divide-slate-200 border border-slate-200 rounded-md bg-white">
              {cat.items.map((item) => (
                <li key={item.q} className="p-5">
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    {item.q}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}