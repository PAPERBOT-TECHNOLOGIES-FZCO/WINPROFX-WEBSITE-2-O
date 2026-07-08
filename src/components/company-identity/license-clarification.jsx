import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LicenseClarification({ showDubaiScope = true, showFinancialPending = true }) {
  const { t } = useTranslation('company')

  return (
    <div className="flex flex-col gap-4">
      <p>{t('licenseScopeClarification')}</p>
      {showDubaiScope && <p>{t('dubaiScopeClarification')}</p>}
      {showFinancialPending && (
        <p className="text-para italic">{t('financialLicensePending')}</p>
      )}
    </div>
  )
}
