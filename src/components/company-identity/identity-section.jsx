import React from 'react'

export default function IdentitySection({ title, children, className = '' }) {
  return (
    <section className={`flex flex-col mb-8 md:mb-10 last:mb-0 ${className}`}>
      {title && <h2 className="text-2xl mb-4 font-medium text-white">{title}</h2>}
      <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-6 rounded-2xl lg:rounded-[20px] text-para">
        {children}
      </div>
    </section>
  )
}
