/**
 * @fileoverview Formatting helpers for dates, times, and currency.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export function formatDate(input) {
  const d = new Date(input);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatTime(input) {
  const d = new Date(input);
  return (
    d.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }) + ' CAT'
  );
}

export function formatDateTime(input) {
  return `${formatDate(input)} · ${formatTime(input)}`;
}

export function formatIso(input) {
  return new Date(input).toISOString();
}

export function formatPrice(amount) {
  const n = Number(amount) || 0;
  return `K${n.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}