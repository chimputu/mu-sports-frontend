/**
 * @fileoverview Booking request form.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { useState } from 'react';
import Alert from '@/app/_components/Common/Alert';
import { muFetch, ApiError } from '@/app/_lib/api';
import { endAfterStart, isFutureDate } from '@/app/_lib/validate';
import { VENUE_TYPES } from '@/app/_lib/constants';

const VENUES = [
  { id: 'main-football-field', label: 'Main Football Field' },
  { id: 'sports-complex-court-a', label: 'Sports Complex Court A' },
  { id: 'sports-complex-court-b', label: 'Sports Complex Court B' },
  { id: 'volleyball-court', label: 'Volleyball Court' },
  { id: 'indoor-badminton-hall', label: 'Indoor Badminton Hall' },
  { id: 'table-tennis-room', label: 'Table Tennis Room' },
  { id: 'athletics-track', label: 'Athletics Track' },
  { id: 'chess-room', label: 'Chess Room' },
];

const initial = {
  venueId: '',
  date: '',
  startTime: '',
  endTime: '',
  purpose: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [serverError, setServerError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.venueId) next.venueId = 'Select a facility.';
    if (!form.date) next.date = 'Choose a date.';
    else if (!isFutureDate(form.date)) next.date = 'Choose a future date.';
    if (!form.startTime) next.startTime = 'Choose a start time.';
    if (!form.endTime) next.endTime = 'Choose an end time.';
    else if (
      form.startTime &&
      !endAfterStart(`${form.date}T${form.startTime}`, `${form.date}T${form.endTime}`)
    ) {
      next.endTime = 'End time must be after start time.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setSubmitStatus('sending');
    try {
      await muFetch('/api/bookings', {
        method: 'POST',
        body: {
          venueId: form.venueId,
          startTime: `${form.date}T${form.startTime}:00+02:00`,
          endTime: `${form.date}T${form.endTime}:00+02:00`,
          purpose: form.purpose || undefined,
        },
      });
      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus('idle');
      if (err instanceof ApiError) {
        setServerError(err.message);
      } else {
        setServerError('Could not submit booking. Try again.');
      }
    }
  }

  if (submitStatus === 'success') {
    return (
      <Alert variant="success" title="Booking submitted">
        Your reservation has been submitted and will be confirmed within one
        working day. Track it on your bookings page.
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="venue" className="block micro-label text-slate-500 mb-2">
          Facility
        </label>
        <select
          id="venue"
          value={form.venueId}
          onChange={(e) => update('venueId', e.target.value)}
          aria-invalid={errors.venueId ? 'true' : undefined}
          className={`input-base ${
            errors.venueId ? 'border-red-500' : 'border-slate-300'
          }`}
        >
          <option value="">Select a facility</option>
          {VENUES.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
        {errors.venueId && (
          <p className="mt-1 text-xs text-red-600">{errors.venueId}</p>
        )}
      </div>

      <div>
        <label htmlFor="date" className="block micro-label text-slate-500 mb-2">
          Date
        </label>
        <input
          id="date"
          type="date"
          value={form.date}
          onChange={(e) => update('date', e.target.value)}
          aria-invalid={errors.date ? 'true' : undefined}
          className={`input-base ${errors.date ? 'border-red-500' : 'border-slate-300'}`}
        />
        {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="start" className="block micro-label text-slate-500 mb-2">
            Start
          </label>
          <input
            id="start"
            type="time"
            value={form.startTime}
            onChange={(e) => update('startTime', e.target.value)}
            aria-invalid={errors.startTime ? 'true' : undefined}
            className={`input-base ${
              errors.startTime ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.startTime && (
            <p className="mt-1 text-xs text-red-600">{errors.startTime}</p>
          )}
        </div>
        <div>
          <label htmlFor="end" className="block micro-label text-slate-500 mb-2">
            End
          </label>
          <input
            id="end"
            type="time"
            value={form.endTime}
            onChange={(e) => update('endTime', e.target.value)}
            aria-invalid={errors.endTime ? 'true' : undefined}
            className={`input-base ${errors.endTime ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.endTime && (
            <p className="mt-1 text-xs text-red-600">{errors.endTime}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="purpose" className="block micro-label text-slate-500 mb-2">
          Purpose (optional)
        </label>
        <input
          id="purpose"
          type="text"
          value={form.purpose}
          onChange={(e) => update('purpose', e.target.value)}
          placeholder="Team training, inter-college match, etc."
          className="input-base border-slate-300"
        />
      </div>

      {serverError && <Alert variant="error" title="Booking failed">{serverError}</Alert>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitStatus === 'sending'}
          className="btn-primary w-full md:w-auto"
        >
          {submitStatus === 'sending' ? 'Sending…' : 'Request booking'}
        </button>
      </div>

      <p className="text-xs text-slate-500">
        Facility types available: {Object.values(VENUE_TYPES).join(', ')}.
      </p>
    </form>
  );
}