import React from 'react'
import { LICENSE_SCOPE_CLARIFICATION, DUBAI_SCOPE_CLARIFICATION, FINANCIAL_LICENSE_PENDING } from '@/lib/company-registration'

export default function LicenseClarification({ showDubaiScope = true, showFinancialPending = true }) {
  return (
    <div className="flex flex-col gap-4">
      <p>{LICENSE_SCOPE_CLARIFICATION}</p>
      {showDubaiScope && <p>{DUBAI_SCOPE_CLARIFICATION}</p>}
      {showFinancialPending && (
        <p className="text-para italic">{FINANCIAL_LICENSE_PENDING}</p>
      )}
    </div>
  )
}
