/**
 * @fileoverview Login form.
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
import { isEmail } from '@/app/_lib/validate';

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverError, setServerError] = useState(null);

  function validate() {
    const next = {};
    if (!isEmail(form.email)) next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Enter your password.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setStatus('sending');
    try {
      await muFetch('/api/auth/login', { method: 'POST', body: form });
      router.push('/');
    } catch (err) {
      setStatus('idle');
      setServerError(
        err instanceof ApiError ? err.message : 'Could not sign in. Try again.'
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Input
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        error={errors.email}
        autoComplete="email"
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        error={errors.password}
        autoComplete="current-password"
        required
      />

      {serverError && <Alert variant="error" title="Could not sign in">{serverError}</Alert>}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full md:w-auto"
        >
          {status === 'sending' ? 'Sending…' : 'Sign in'}
        </button>
      </div>
    </form>
  );
}