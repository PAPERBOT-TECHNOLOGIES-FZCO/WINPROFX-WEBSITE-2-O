import React from 'react'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '@/components/localized-link'

/**
 * @param {{ path: string, label: string, summary: string }} props
 */
export default function TrustCenterCard({ path, label, summary }) {
  const { t } = useTranslation('common')

  return (
    <LocalizedLink
      to={path}
      className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 hover:border-primary/40 hover:bg-white/8 transition-all"
    >
      <h3 className="mb-2 text-base font-semibold text-white group-hover:text-primary transition-colors">
        {label}
      </h3>
      <p className="text-sm text-white/60 leading-relaxed flex-1">{summary}</p>
      <span className="mt-3 text-xs text-primary/80 group-hover:text-primary">{t('buttons.viewPage')}</span>
    </LocalizedLink>
  )
}
