import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@/components/button'
import Dropdown from '@/components/ui/dropdown'
import Input from '@/components/ui/input'

export default function OrderCalculator() {
  const { t } = useTranslation('tools')
  const [formData, setFormData] = useState({
    accountType: '',
    accountCurrency: '',
    instrument: '',
    lot: '',
    leverage: '',
  })

  const [results] = useState({
    margin: 485.53,
    spreadCost: 0,
    commission: 6.34,
    swapShot: 0,
    swapLong: -16.11,
    pipValue: 0.408811,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resultRows = [
    { key: 'margin', value: `${results.margin.toFixed(2)} UAH` },
    { key: 'spreadCost', value: `${results.spreadCost} UAH` },
    { key: 'commission', value: `${results.commission.toFixed(2)} UAH` },
    { key: 'swapShot', value: `${results.swapShot} UAH` },
    { key: 'swapLong', value: `${results.swapLong.toFixed(2)} UAH` },
    { key: 'pipValue', value: `${results.pipValue.toFixed(6)} UAH` },
  ]

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(0, 125, 255, 0.00) 0%, rgba(0, 217, 255, 0.80) 250.56%), rgba(2, 4, 8, 0.09)',
      }}
      className="w-full mx-auto relative z-5 rounded-4xl border border-[#191A1D] border-solid backdrop-blur-lg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <div className="w-full">
          <div className="p-6 border-b-2 border-white/8">
            <h3 className="text-white text-2xl">{t('calculatorUi.yourOrder')}</h3>
          </div>
          <div className="p-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4 relative z-2">
              <Dropdown
                btnClass="min-h-12"
                label={t('calculatorUi.accountType')}
                placeholder={t('calculatorUi.selectAccountType')}
                items={[
                  { value: 'standard', name: t('calculatorUi.standard') },
                  { value: 'pro', name: t('calculatorUi.pro') },
                  { value: 'ecn', name: t('calculatorUi.ecn') },
                ]}
              />
              <Dropdown
                btnClass="min-h-12"
                label={t('calculatorUi.accountCurrency')}
                placeholder={t('calculatorUi.selectAccountCurrency')}
                items={[
                  { value: 'UAH', name: 'UAH' },
                  { value: 'USD', name: 'USD' },
                  { value: 'EUR', name: 'EUR' },
                ]}
              />
              <Dropdown
                btnClass="min-h-12"
                label={t('calculatorUi.selectInstrument')}
                placeholder={t('calculatorUi.selectAccountCurrency')}
                items={[
                  { value: 'eurusd', name: 'EUR/USD' },
                  { value: 'usdjpy', name: 'USD/JPY' },
                  { value: 'gbpusd', name: 'GBP/USD' },
                ]}
              />
              <Input
                label={t('calculatorUi.lot')}
                placeholder={t('calculatorUi.lotSizePlaceholder')}
                name="lot"
                value={formData.lot}
                onChange={handleInputChange}
                inputClass="min-h-12 bg-main-bg/24! border-white/24!"
              />
              <Dropdown
                btnClass="min-h-12"
                label={t('calculatorUi.leverage')}
                placeholder={t('calculatorUi.selectLeverage')}
                items={[
                  { value: '1:1', name: '1:1' },
                  { value: '1:10', name: '1:10' },
                  { value: '1:100', name: '1:100' },
                  { value: '1:500', name: '1:500' },
                ]}
              />
            </div>
            <Button animation={false} text={t('calculatorUi.calculateNow')} to="/" className="w-full" />
          </div>
        </div>
        <div className="pl-4 lg:pl-0 py-4 pr-4">
          <div className="rounded-[30px] bg-white/10 p-6 lg:p-8 backdrop-blur-[25px] h-full">
            <h3 className="text-white text-2xl mb-6">{t('calculatorUi.results')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resultRows.map((row) => (
                <div key={row.key} className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                  <p className="uppercase mb-2.5">{t(`calculatorUi.${row.key}`)}</p>
                  <p className="text-white text-2xl font-bold font-satoshi">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
