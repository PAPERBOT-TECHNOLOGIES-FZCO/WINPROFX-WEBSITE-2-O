/**
 * Applies trust/legal page translations for hi, id, vi, bn, ms.
 * Uses Google Translate (gtx client) with placeholder-safe segment translation.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const LOCALES_DIR = join(ROOT, 'src', 'locales')
const TARGET_LOCALES = ['hi', 'id', 'vi', 'bn', 'ms']

/** Tokens that must survive machine translation unchanged */
const MASKS = [
  ['WINPROFX LTD - DUBAI BRANCH - REP. OFFICE', 'DUBAIBIZNAME'],
  ['WINPROFX', 'BRANDNAME'],
  ['Winprofx Ltd.', 'LEGALENTITY'],
  ['Saint Lucia', 'JURISDICTION'],
  ['International Business Company', 'COMPANYTYPE'],
  ['Department of Economy and Tourism', 'DEPTET'],
  ['Fortgate Offshore Investment and Legal Services Ltd.', 'REGAGENT'],
  [
    'Certificate of Incorporation, Memorandum of Association, and Articles of Association',
    'DOCTYPES',
  ],
  [
    'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia',
    'REGOFFICE',
  ],
  ['support@winprofx.com', 'SUPPORTEMAIL'],
  ['https://winprofx.com/', 'URLORG'],
  ['https://winprofx.com/', 'URLCOM'],
  ['https://winprofx.ae/', 'URLAE'],
  ['https://my.winprofx.com/', 'URLMY'],
  ['https://partner.winprofx.com/', 'URLPARTNER'],
  ['winprofx.com', 'DOMORG'],
  ['winprofx.com', 'DOMCOM'],
  ['winprofx.ae', 'DOMAE'],
  ['my.winprofx.com', 'DOMMY'],
  ['partner.winprofx.com', 'DOMPARTNER'],
  ['Representative Office', 'REPOFFICE'],
  ['CFD', 'CFDTERM'],
  ['KYC', 'KYCTERM'],
  ['AML', 'AMLTERM'],
  ['MT5', 'MT5TERM'],
  ['UAE', 'UAETERM'],
  ['SCA', 'SCATERM'],
  ['DFSA', 'DFSATERM'],
  ['ADGM', 'ADGMTERM'],
  ['NFP', 'NFPTERM'],
  ['OTP', 'OTPTERM'],
  ['IB', 'IBTERM'],
]

function extractPatch(trust, company) {
  const patch = { trust: {}, company: {} }
  patch.trust.identityNav = trust.identityNav
  patch.trust.shared = trust.shared
  patch.trust.pages = {}
  for (const [key, page] of Object.entries(trust.pages)) {
    if (!page.sections && !page.content && !page.faqs && !page.intro) continue
    patch.trust.pages[key] = {}
    if (page.intro) patch.trust.pages[key].intro = page.intro
    if (page.sections) patch.trust.pages[key].sections = page.sections
    if (page.content) patch.trust.pages[key].content = page.content
    if (page.faqs) patch.trust.pages[key].faqs = page.faqs
  }
  for (const k of [
    'incorporationClarification',
    'licenseScopeClarification',
    'dubaiScopeClarification',
    'dubaiVerificationNote',
    'financialLicenseClarification',
    'financialLicensePending',
    'statsPlaceholder',
    'opsPlaceholder',
    'accountSpecificPrivacyNote',
    'publicReviewResponsePolicy',
    'incorporationPdfTitle',
    'documentTypes',
    'registeredAgent',
    'registeredOffice',
    'incorporationSubscriber',
    'officialDomainLabels',
  ]) {
    patch.company[k] = company[k]
  }
  return patch
}

function maskText(text) {
  let out = text
  for (const [raw, token] of MASKS) out = out.split(raw).join(token)
  out = out.replace(/\{\{([^}]+)\}\}/g, (_, name) => `VAR${name.replace(/[^a-zA-Z0-9]/g, '')}`)
  out = out.replace(/<(\/?)([a-zA-Z0-9]+)>/g, (_, slash, tag) => `TAG${slash}${tag}`)
  return out
}

function unmaskText(text) {
  let out = text
  out = out.replace(/TAG(\/?)([a-zA-Z0-9]+)/g, '<$1$2>')
  out = out.replace(/VAR([a-zA-Z0-9]+)/g, (_, name) => {
    const map = {
      brandName: '{{brandName}}',
      legalEntityName: '{{legalEntityName}}',
      jurisdiction: '{{jurisdiction}}',
      documentTypes: '{{documentTypes}}',
      dubaiBusinessName: '{{dubaiBusinessName}}',
      dubaiLicenseNumber: '{{dubaiLicenseNumber}}',
      dubaiLicenseActivity: '{{dubaiLicenseActivity}}',
      dubaiLicenseCategory: '{{dubaiLicenseCategory}}',
      supportEmail: '{{supportEmail}}',
      incorporationSubscriber: '{{incorporationSubscriber}}',
      companyType: '{{companyType}}',
    }
    return map[name] ?? `{{${name}}}`
  })
  for (const [raw, token] of MASKS) out = out.split(token).join(raw)
  return out
}

const cache = new Map()
const delay = (ms) => new Promise((r) => setTimeout(r, ms))

async function gtxTranslate(text, lang) {
  const url = new URL('https://translate.googleapis.com/translate_a/single')
  url.searchParams.set('client', 'gtx')
  url.searchParams.set('sl', 'en')
  url.searchParams.set('tl', lang)
  url.searchParams.set('dt', 't')
  url.searchParams.set('q', text.slice(0, 4500))

  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  const parts = data?.[0]
  if (!Array.isArray(parts)) throw new Error('Unexpected translate response')
  return parts.map((p) => p?.[0] ?? '').join('')
}

async function translateSegment(text, lang) {
  if (!text?.trim()) return text
  const cacheKey = `${lang}::${text}`
  if (cache.has(cacheKey)) return cache.get(cacheKey)

  const masked = maskText(text)
  let translated = masked

  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const candidate = await gtxTranslate(masked, lang)
      if (candidate?.trim() && candidate.trim() !== masked.trim()) {
        translated = candidate
        break
      }
    } catch (err) {
      if (attempt === 3) console.warn(`  [warn] translate failed: ${text.slice(0, 50)}... (${err.message})`)
    }
    await delay(400 + attempt * 300)
  }

  const result = unmaskText(translated)
  cache.set(cacheKey, result)
  await delay(300)
  return result
}

/** Translate text while keeping {{placeholders}} and HTML tags intact */
async function translateText(text, lang) {
  if (!text?.trim()) return text
  if (!/\{\{[^}]+\}\}/.test(text) && !/<[^>]+>/.test(text)) {
    return fixPlaceholders(text, await translateSegment(text, lang))
  }

  const parts = text.split(/(\{\{[^}]+\}\}|<[^>]+>)/g)
  const translated = []
  for (const part of parts) {
    if (!part) continue
    if (/^\{\{[^}]+\}\}$/.test(part) || /^<[^>]+>$/.test(part)) {
      translated.push(part)
      continue
    }
    translated.push(await translateSegment(part, lang))
  }
  return fixPlaceholders(text, translated.join(''))
}

function setAtPath(obj, path, value) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {}
    cur = cur[parts[i]]
  }
  cur[parts[parts.length - 1]] = value
}

function collectStringPaths(obj, prefix = '') {
  const paths = []
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') paths.push([path, value])
    else if (value && typeof value === 'object' && !Array.isArray(value)) {
      paths.push(...collectStringPaths(value, path))
    }
  }
  return paths
}

function shouldSkipKey(path, enValue, current) {
  if (current && current !== enValue) return true
  return false
}

async function translateAll(enPatch, lang, localeTrust, localeCompany, enTrust, enCompany, onProgress) {
  const out = JSON.parse(JSON.stringify(enPatch))
  const paths = collectStringPaths(enPatch)
  let count = 0
  let skipped = 0

  for (const [path, enValue] of paths) {
    const ns = path.startsWith('trust.') ? 'trust' : path.startsWith('company.') ? 'company' : null
    const relPath = ns ? path.slice(ns.length + 1) : path
    const enSource = ns === 'trust' ? enTrust : enCompany
    const localeSource = ns === 'trust' ? localeTrust : localeCompany
    const current = getAtPath(localeSource, relPath)
    const english = getAtPath(enSource, relPath)

    if (shouldSkipKey(path, english, current)) {
      skipped++
      setAtPath(out, path, current)
      continue
    }

    const translated = await translateText(enValue, lang)
    const fixed = fixPlaceholders(enValue, translated)
    setAtPath(out, path, fixed)
    count++
    if (count % 20 === 0) {
      console.log(`  ${lang}: translated ${count} keys (${skipped} skipped)...`)
      onProgress?.({ trust: localeTrust, company: localeCompany, patch: out })
    }
  }

  console.log(`  ${lang}: translated ${count} keys (${skipped} already done)`)
  return out
}

function getAtPath(obj, path) {
  return path.split('.').reduce((cur, part) => cur?.[part], obj)
}

function fixPlaceholders(enStr, translatedStr) {
  const placeholders = [...enStr.matchAll(/\{\{[^}]+\}\}/g)].map((m) => m[0])
  if (placeholders.length === 0) return translatedStr
  let result = translatedStr
  for (let i = placeholders.length - 1; i >= 0; i--) {
    result = result.replace(new RegExp(`\\b${i}\\b`, 'g'), placeholders[i])
  }
  return result
}

function deepMerge(target, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {}
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
  return target
}

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function saveJson(path, data) {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
}

async function main() {
  const onlyLocale = process.argv[2]
  const locales = onlyLocale ? [onlyLocale] : TARGET_LOCALES
  if (onlyLocale && !TARGET_LOCALES.includes(onlyLocale)) {
    console.error(`Unknown locale: ${onlyLocale}`)
    process.exit(1)
  }

  const enTrust = loadJson(join(LOCALES_DIR, 'en', 'trust.json'))
  const enCompany = loadJson(join(LOCALES_DIR, 'en', 'company.json'))
  const enPatch = extractPatch(enTrust, enCompany)

  const allPatches = {}

  for (const locale of locales) {
    console.log(`Processing ${locale}...`)
    const trustPath = join(LOCALES_DIR, locale, 'trust.json')
    const companyPath = join(LOCALES_DIR, locale, 'company.json')
    const trustData = loadJson(trustPath)
    const companyData = loadJson(companyPath)

    const translatedPatch = await translateAll(
      enPatch,
      locale,
      trustData,
      companyData,
      enTrust,
      enCompany,
      ({ patch }) => {
        saveJson(trustPath, deepMerge(JSON.parse(JSON.stringify(trustData)), patch.trust))
        saveJson(companyPath, deepMerge(JSON.parse(JSON.stringify(companyData)), patch.company))
      }
    )

    saveJson(trustPath, deepMerge(trustData, translatedPatch.trust))
    saveJson(companyPath, deepMerge(companyData, translatedPatch.company))
    allPatches[locale] = translatedPatch
    console.log(`Updated ${locale}/trust.json and ${locale}/company.json`)
  }

  saveJson(join(ROOT, 'scripts', 'trust-page-locale-patches.json'), allPatches)
  console.log('Trust page translations applied.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
