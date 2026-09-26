/**
 * @fileoverview Register form.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/app/_components/Common/Input';
import Alert from '@/app/_components/Common/Alert';
import { muFetch, ApiError } from '@/app/_lib/api';
import { isEmail, minLength } from '@/app/_lib/validate';
import { COLLEGES } from '@/app/_lib/constants';

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    studentId: '',
    college: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!minLength(form.name, 2)) next.name = 'Enter your full name.';
    if (!isEmail(form.email)) next.email = 'Enter a valid email address.';
    if (!minLength(form.password, 8)) next.password = 'Password must be at least 8 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus('sending');
    try {
      const body = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      };
      if (form.studentId.trim()) body.studentId = form.studentId.trim();
      if (form.college) body.college = form.college;

      await muFetch('/api/auth/register', { method: 'POST', body });
      router.push('/');
    } catch (err) {
      setStatus('idle');
      setServerError(
        err instanceof ApiError
          ? err.message
          : 'Could not create account. Try again.'
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Input
        id="name"
        label="Full name"
        value={form.name}
        onChange={(e) => update('name', e.target.value)}
        error={errors.name}
        autoComplete="name"
        required
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => update('email', e.target.value)}
        error={errors.email}
        autoComplete="email"
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => update('password', e.target.value)}
        error={errors.password}
        hint="At least 8 characters."
        autoComplete="new-password"
        required
      />
      <Input
        id="studentId"
        label="Student ID (optional)"
        value={form.studentId}
        onChange={(e) => update('studentId', e.target.value)}
        autoComplete="off"
      />

      <div>
        <label htmlFor="college" className="block micro-label text-slate-500 mb-2">
          College (optional)
        </label>
        <select
          id="college"
          value={form.college}
          onChange={(e) => update('college', e.target.value)}
          className="input-base border-slate-300"
        >
          <option value="">Select a college</option>
          {COLLEGES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {serverError && <Alert variant="error" title="Could not create account">{serverError}</Alert>}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full md:w-auto"
        >
          {status === 'sending' ? 'Sending…' : 'Create account'}
        </button>
      </div>
    </form>
  );
}