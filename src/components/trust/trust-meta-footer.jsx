import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'
import {
  TRUST_LAST_REVIEWED,
  TRUST_REVIEWED_BY,
} from '@/lib/trust-pages'

export default function TrustMetaFooter({ showRiskWarning = true }) {
  const { t } = useTranslation('common')

  return (
    <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-sm text-white/70">
      <p>
        <strong className="text-white/90">{t('labels.lastReviewed')}</strong> {TRUST_LAST_REVIEWED}
        {' · '}
        <strong className="text-white/90">{t('labels.reviewedBy')}</strong> {TRUST_REVIEWED_BY}
      </p>
      {showRiskWarning && (
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-white/80">
          <strong className="text-amber-400">{t('labels.riskWarning')}</strong> {t('risk.short')}{' '}
          <LocalizedLink to="/risk-warning/" className="text-primary underline hover:text-white">
            {t('buttons.readFullRiskWarning')}
          </LocalizedLink>
        </p>
      )}
    </div>
  )
}
