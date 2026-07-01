import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../button'
import { motion } from 'framer-motion'

const CURRENCY_OPTIONS = ['USD', 'EUR', 'INR', 'AUD', 'BDT', 'EGP', 'JYP', 'UAH']

const FIELD_NAMES = ['account', 'converted1', 'converted2', 'converted3', 'converted4', 'converted5']
const DEFAULT_CURRENCIES = ['USD', 'INR', 'AUD', 'BDT', 'EGP', 'JYP']

export default function Converter() {
  const { t } = useTranslation('tools')
  const fields = FIELD_NAMES.map((name, idx) => ({
    name,
    label: idx === 0 ? t('converterUi.account') : t('converterUi.convertedAmount'),
    placeholder: idx === 0 ? t('converterUi.accountPlaceholder') : t('converterUi.convertedPlaceholder'),
    defaultCurrency: DEFAULT_CURRENCIES[idx],
  }))

  const [formData, setFormData] = useState(Object.fromEntries(fields.map((f) => [f.name, ''])))
  const [currencies, setCurrencies] = useState(Object.fromEntries(fields.map((f) => [f.name, f.defaultCurrency])))

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full mx-auto rounded-4xl border border-[#404D5D] backdrop-blur-[100px]"
      style={{
        background: 'linear-gradient(180deg, rgba(0, 125, 255, 0.00) 0%, rgba(0, 217, 255, 0.80) 250.56%), rgba(2, 4, 8, 0.09)',
      }}
    >
      <div>
        <div className="p-6 border-b-2 border-white/8">
          <h5 className="text-white text-2xl">{t('converterUi.title')}</h5>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="text-left font-medium text-white text-sm uppercase tracking-wider block mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full bg-[#0204083D] border border-white/24 rounded-full text-sm text-white px-4 py-3 placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors backdrop-blur-[150px]"
                    style={{ paddingRight: '6rem' }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <span className="text-white text-sm font-medium">{currencies[field.name]}</span>
                    <div className="relative">
                      <select
                        value={currencies[field.name]}
                        onChange={(e) => setCurrencies((prev) => ({ ...prev, [field.name]: e.target.value }))}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full"
                      >
                        {CURRENCY_OPTIONS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.5984 7.45831L11.1651 12.8916C10.5234 13.5333 9.47344 13.5333 8.83177 12.8916L3.39844 7.45831" stroke="#B7BCC1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button animation={false} text={t('converterUi.convertNow')} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
