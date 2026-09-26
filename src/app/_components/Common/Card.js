/**
 * @fileoverview Card component.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export default function Card({ as: As = 'div', className = '', children, ...rest }) {
  return (
    <As
      className={`border border-slate-200 rounded-md p-5 bg-white ${className}`.trim()}
      {...rest}
    >
      {children}
    </As>
  );
}