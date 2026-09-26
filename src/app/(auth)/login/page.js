/**
 * @fileoverview Login page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import PageHeader from '@/app/_components/Common/PageHeader';
import LoginForm from '@/app/_components/Auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Sign in"
        description="Access your bookings, team, and match notifications."
      />
      <LoginForm />
      <p className="mt-6 text-sm text-slate-500">
        No account yet?{' '}
        <Link href="/register" className="text-primary-600 hover:text-primary-700">
          Create one
        </Link>
        .
      </p>
    </>
  );
}