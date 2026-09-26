/**
 * @fileoverview Client-side providers for MU Sports.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

'use client';

import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  function push(message, variant = 'success') {
    setToast({ message, variant });
    setTimeout(() => setToast(null), variant === 'error' ? 6000 : 4000);
  }

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-4 right-4 md:right-6 z-50 max-w-sm"
        >
          <div
            className={`border rounded-md p-4 text-sm shadow-lg bg-white ${
              toast.variant === 'error'
                ? 'border-red-200 text-red-900'
                : 'border-emerald-200 text-emerald-900'
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export default function Providers({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}