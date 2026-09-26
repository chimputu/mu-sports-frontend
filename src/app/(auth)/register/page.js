/**
 * @fileoverview Register page.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

import Link from 'next/link';
import PageHeader from '@/app/_components/Common/PageHeader';
import RegisterForm from '@/app/_components/Auth/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Create account"
        description="Register to book facilities, join teams, and receive match updates."
      />
      <RegisterForm />
      <p className="mt-6 text-sm text-slate-500">
        Already have an account?{' '}
        <Link href="/login" className="text-primary-600 hover:text-primary-700">
          Sign in
        </Link>
        .
      </p>
    </>
  );
}