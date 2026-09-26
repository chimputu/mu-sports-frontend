/**
 * @fileoverview Help centre FAQ content.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export const faqCategories = [
  {
    slug: 'fixtures',
    title: 'Fixtures and results',
    items: [
      {
        q: 'How often are fixtures updated?',
        a: 'Fixtures are updated by the Sports Unit whenever a scheduling decision is confirmed. Pages refresh within minutes.',
      },
      {
        q: 'Where are results posted?',
        a: 'Final scores appear on the match detail page and in the standings table within an hour of the final whistle.',
      },
    ],
  },
  {
    slug: 'bookings',
    title: 'Facility bookings',
    items: [
      {
        q: 'How long does a booking take to confirm?',
        a: 'Bookings are reviewed within one working day. You will see the status change on your bookings page.',
      },
      {
        q: 'Can I book a facility for a team?',
        a: 'Yes. Enter the team name in the purpose field when you submit the booking.',
      },
    ],
  },
  {
    slug: 'teams',
    title: 'Teams and registration',
    items: [
      {
        q: 'How do I register a team?',
        a: 'Sign in, open the teams page, and submit a registration. An admin reviews it within two working days.',
      },
      {
        q: 'Who can be a captain?',
        a: 'Any registered student. Captains submit rosters and team registrations on behalf of their squad.',
      },
    ],
  },
];