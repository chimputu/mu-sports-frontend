/**
 * @fileoverview League standings table.
 * @copyright (c) Mulungushi University Sports Platform. All rights reserved.
 * Owners: Kafiswe Chimputu and Elijah Manda, Full Stack Developers.
 * This file is the intellectual property of MU Sports and may not be
 * reproduced, distributed, or transmitted without the prior written
 * permission of the owners.
 */

export default function StandingsTable({ rows }) {
  return (
    <div className="overflow-x-auto border border-slate-200 rounded-md bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th scope="col" className="px-5 py-3 micro-label text-slate-500">#</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500">Team</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">P</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">W</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">D</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">L</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">GD</th>
            <th scope="col" className="px-5 py-3 micro-label text-slate-500 text-right">Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, i) => (
            <tr key={row.id} className="transition-colors duration-150 hover:bg-slate-50">
              <td className="px-5 py-3 text-slate-500 tabular-nums">{i + 1}</td>
              <td className="px-5 py-3 font-medium text-slate-900">
                {row.team.name}
                <span className="block text-xs text-slate-500">{row.team.college}</span>
              </td>
              <td className="px-5 py-3 text-right tabular-nums text-slate-700">{row.played}</td>
              <td className="px-5 py-3 text-right tabular-nums text-slate-700">{row.won}</td>
              <td className="px-5 py-3 text-right tabular-nums text-slate-700">{row.drawn}</td>
              <td className="px-5 py-3 text-right tabular-nums text-slate-700">{row.lost}</td>
              <td className="px-5 py-3 text-right tabular-nums text-slate-700">
                {row.goalsFor - row.goalsAgainst}
              </td>
              <td className="px-5 py-3 text-right tabular-nums font-semibold text-slate-900">
                {row.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}