/**
 * @fileoverview Button component with primary, secondary, ghost variants.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

export default function Button({
  as: As = 'button',
  variant = 'primary',
  type,
  className = '',
  children,
  ...rest
}) {
  const base = VARIANTS[variant] || VARIANTS.primary;
  const combined = `${base} ${className}`.trim();

  if (As === 'button') {
    return (
      <button type={type || 'button'} className={combined} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <As className={combined} {...rest}>
      {children}
    </As>
  );
}