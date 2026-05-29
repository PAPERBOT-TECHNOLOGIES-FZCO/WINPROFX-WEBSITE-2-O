import React from 'react'
import RegistrationTable from '@/components/company-identity/registration-table'

/**
 * @param {{ rows: { label: string, value: string }[], caption?: string }} props
 */
export default function TrustProcessTable({ rows, caption }) {
  return (
    <figure>
      {caption && (
        <figcaption className="text-sm text-para mb-3 sr-only">{caption}</figcaption>
      )}
      <RegistrationTable rows={rows} />
    </figure>
  )
}
