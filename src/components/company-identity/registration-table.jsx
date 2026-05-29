import React from 'react'

/**
 * @param {{ rows: { label: string, value: string, href?: string, external?: boolean }[] }} props
 */
export default function RegistrationTable({ rows }) {
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[480px] text-sm md:text-base border-collapse">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/8 last:border-0">
              <th
                scope="row"
                className="py-3 pr-4 align-top font-semibold text-white text-left w-[40%]"
              >
                {row.label}
              </th>
              <td className="py-3 align-top text-para">
                {row.href ? (
                  <a
                    href={row.href}
                    className="text-white underline hover:text-primary break-all"
                    {...(row.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : { rel: 'noopener noreferrer' })}
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
