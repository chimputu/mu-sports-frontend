/**
 * @fileoverview Page header used at the top of section pages.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <div className="mb-10">
      {eyebrow && <p className="micro-label text-slate-500 mb-2">{eyebrow}</p>}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-base text-slate-700 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}