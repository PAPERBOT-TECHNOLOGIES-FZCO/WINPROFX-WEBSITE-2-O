import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function WebTradingBtn({ to = '#', className = '' }) {
  const { t } = useTranslation('common')

  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`group hover:shadow-lg hover:scale-105 inline-flex items-center gap-2 pl-2 pr-2.5 py-1 border border-white/15 text-white rounded-lg transition-all duration-300 ease-in-out ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v12H4z" opacity="0.4" />
        <path d="M2 18h20v2H2z" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[10px] font-normal text-white block mb-[3px]">{t('download.webTradingPrefix')}</span>
        <span className="text-xl font-semibold leading-none">{t('download.webTradingLabel')}</span>
      </div>
    </Link>
  )
}
