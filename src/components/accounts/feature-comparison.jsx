import React from 'react'
import { useTranslation } from 'react-i18next'
import CommonTitle from '@/components/common-title'

const FEATURE_ROW_KEYS = [
  'minimumDeposit',
  'spread',
  'commission',
  'maximumLeverage',
  'instruments',
  'minimumLotSize',
  'maximumLotSize',
  'marginCall',
  'stopOut',
  'orderExecution',
  'swapFree',
]

const FEATURE_VALUES = {
  minimumDeposit: { standard: '$50', pro: '$2500', ecn: '$5000' },
  spread: {
    standardKey: 'spreadStandard',
    proKey: 'spreadPro',
    ecnKey: 'spreadEcn',
  },
  commission: {
    standard: 'No Commission',
    pro: 'No Commission',
    ecnKey: 'commissionEcn',
  },
  maximumLeverage: { standard: '1:500', pro: '1:500', ecn: '1:500' },
  minimumLotSize: { standard: '0.01', pro: '0.01', ecn: '0.01' },
  maximumLotSize: { standard: '200', pro: '200', ecn: '200' },
  marginCall: { standard: '50%', pro: '50%', ecn: '50%' },
  stopOut: { standard: '30%', pro: '30%', ecn: '30%' },
  orderExecution: { valueKey: 'orderExecution' },
  swapFree: { valueKey: 'swapFree' },
}

function InstrumentChips({ t }) {
  const keys = t('accounts.featureComparison.instrumentKeys', { returnObjects: true, defaultValue: [] })
  return (
    <div className="flex flex-wrap gap-1.5 justify-center">
      {(Array.isArray(keys) ? keys : []).map((key) => (
        <span
          key={key}
          className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white"
        >
          {t(`accounts.chooseAccount.instruments.${key}`, { defaultValue: key })}
        </span>
      ))}
    </div>
  )
}

function cellValue(t, rowKey, tier) {
  const row = FEATURE_VALUES[rowKey]
  if (rowKey === 'instruments') return <InstrumentChips t={t} />
  if (row.valueKey) return t(`accounts.featureComparison.values.${row.valueKey}`)
  if (row[`${tier}Key`]) return t(`accounts.featureComparison.values.${row[`${tier}Key`]}`)
  return row[tier]
}

export default function FeatureComparison() {
  const { t } = useTranslation('trading')

  const features = FEATURE_ROW_KEYS.map((key) => ({
    name: t(`accounts.featureComparison.rows.${key}`),
    standard: cellValue(t, key, 'standard'),
    pro: cellValue(t, key, 'pro'),
    ecn: cellValue(t, key, 'ecn'),
  }))

  const tiers = [
    { key: 'standard', label: t('accounts.featureComparison.standard') },
    { key: 'pro', label: t('accounts.featureComparison.pro') },
    { key: 'ecn', label: t('accounts.featureComparison.ecn') },
  ]

  return (
    <div className="w-full">
      <CommonTitle title={t('accounts.featureComparison.title')} className="mb-10 lg:mb-16 text-center" />
      <div className="w-full overflow-x-auto">
        <div className="min-w-300">
          <div className="grid grid-cols-4 gap-4">
            <div className="-mr-4 border-2 border-transparent">
              <div className="p-4 h-20 border-b border-white/10" />
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center min-h-14 ${feature.name === t('accounts.featureComparison.rows.instruments') ? 'min-h-22' : ''}`}
                >
                  {feature.name}
                </div>
              ))}
            </div>
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.key}
                style={{
                  backgroundImage: tierIdx === 0
                    ? 'radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #276CEC 80%, #FFFFFF 94.84%)'
                    : tierIdx === 1
                      ? 'radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #00D9FF 80%, #FFFFFF 94.84%)'
                      : 'radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #9D20CA 80%, #FFFFFF 94.84%)',
                  boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.1), inset 0 -30px 0 -28px rgba(255, 255, 255, 0.05)',
                }}
                className="rounded-[30px]"
              >
                <div className="p-4 h-20 flex items-center justify-center border-b border-white/10 rounded-t-[30px]">
                  <p className="text-white font-bold font-satoshi">{tier.label}</p>
                </div>
                {features.map((feature, index, arr) => (
                  <div
                    key={`${tier.key}-${feature.name}`}
                    className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center justify-center text-center min-h-14 ${index === arr.length - 1 ? 'rounded-b-[30px]' : ''}`}
                  >
                    {feature[tier.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
