/**
 * @fileoverview Client-side validation helpers.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export function isRequired(value) {
  return value !== null && value !== undefined && String(value).trim().length > 0;
}

export function minLength(value, n) {
  return String(value).trim().length >= n;
}

export function isFutureDate(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return false;
  return d.getTime() > Date.now();
}

export function endAfterStart(start, end) {
  return new Date(end).getTime() > new Date(start).getTime();
}