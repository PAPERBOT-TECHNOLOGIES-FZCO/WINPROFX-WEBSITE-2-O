import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { RiArrowLeftLongLine } from 'react-icons/ri'
import SeoHead from '@/components/seo-head'

export default function Error() {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SeoHead
        title={t('errors.seoTitle')}
        canonicalPath={pathname}
        robots="noindex, nofollow"
      />
      <h2 className="text-5xl leading-normal">{t('errors.title')}</h2>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="btn mt-4 md:mt-6 lg:mt-8 heading-btn active py-3 px-6 flex items-center gap-x-4"
      >
        <RiArrowLeftLongLine /> {t('errors.backHome')}
      </button>
    </div>
  )
}
