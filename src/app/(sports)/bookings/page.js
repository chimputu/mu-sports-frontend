/**
 * @fileoverview Bookings page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import PageHeader from '@/app/_components/Common/PageHeader';
import BookingForm from '@/app/_components/Bookings/BookingForm';

export default function BookingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <PageHeader
        eyebrow="Facilities"
        title="Book a facility"
        description="Reserve a court, field, or hall for training or matches. Bookings are reviewed within one working day."
      />
      <BookingForm />
    </div>
  );
}