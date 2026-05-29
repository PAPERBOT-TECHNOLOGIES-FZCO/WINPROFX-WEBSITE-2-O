import React from 'react'

/**
 * @param {{ items: { label: string, value: string }[] }} props
 */
export default function StatsPlaceholderGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-solid border-white/8 bg-white/2 p-4 md:p-5"
        >
          <h3 className="text-sm font-semibold text-white mb-2">{item.label}</h3>
          <p className="text-sm text-para">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
