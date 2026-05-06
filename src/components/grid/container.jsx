import React from 'react'
export default function Container({ children, className = '', fluid = false }) {
  return (
    <div className={`mx-auto px-4 3xl:max-w-330 ${fluid ? 'w-full' : 'container'} ${className}`} >
      {children}
    </div>
  )
}
