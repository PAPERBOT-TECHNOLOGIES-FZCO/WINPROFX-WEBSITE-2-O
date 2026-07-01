/**
 * Re-translate es/pt locale files where strings still match English.
 * Usage: node scripts/retranslate-stale-locales.mjs [es|pt]
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const TARGET = process.argv[2] || 'es'
const LANG = TARGET === 'pt' ? 'pt' : 'es'
const EN_DIR = join('src/locales/en')
const OUT_DIR = join('src/locales', TARGET)

const PRESERVE = [
  /WINPROFX/gi,
  /MetaTrader 5/gi,
  /\bMT5\b/g,
  /\bCFDs?\b/gi,
  /\bECN\b/g,
  /\bIB\b/g,
  /support@winprofx\.com/gi,
  /winprofx\.org/gi,
  /my\.winprofx\.org/gi,
  /partner\.winprofx\.org/gi,
  /TradingView/gi,
  /FXStreet/gi,
  /Trading Central/gi,
  /App Store/gi,
  /Google Play/gi,
  /\{\{[^}]+\}\}/g,
  /<[^>]+>/g,
  /https?:\/\/[^\s"']+/g,
]

const cache = new Map()
const delay = (ms) => new Promise((r) => setTimeout(r, ms))

function protect(text) {
  const tokens = []
  let protectedText = text
  for (const pattern of PRESERVE) {
    protectedText = protectedText.replace(pattern, (match) => {
      const token = `\uE000${tokens.length}\uE001`
      tokens.push(match)
      return token
    })
  }
  return { protectedText, tokens }
}

function restore(text, tokens) {
  let result = text
  tokens.forEach((token, i) => {
    result = result.split(`\uE000${i}\uE001`).join(token)
    result = result.split(`E000${i}E001`).join(token)
  })
  return result
}

async function translateText(text) {
  if (!text?.trim() || text.length < 2) return text
  const key = `${LANG}::${text}`
  if (cache.has(key)) return cache.get(key)

  const { protectedText, tokens } = protect(text)
  const url = new URL('https://api.mymemory.translated.net/get')
  url.searchParams.set('q', protectedText.slice(0, 450))
  url.searchParams.set('langpair', `en|${LANG}`)

  let translated = protectedText
  try {
    const res = await fetch(url)
    const data = await res.json()
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      translated = data.responseData.translatedText
    }
  } catch {
    translated = protectedText
  }

  const result = restore(translated, tokens)
  cache.set(key, result)
  await delay(300)
  return result
}

async function translateDiff(enVal, trVal) {
  if (typeof enVal === 'string') {
    if (typeof trVal !== 'string' || trVal === enVal) return translateText(enVal)
    return trVal
  }
  if (Array.isArray(enVal)) {
    const out = []
    for (let i = 0; i < enVal.length; i++) {
      out.push(await translateDiff(enVal[i], trVal?.[i]))
    }
    return out
  }
  if (enVal && typeof enVal === 'object') {
    const out = { ...(trVal && typeof trVal === 'object' ? trVal : {}) }
    for (const [k, v] of Object.entries(enVal)) {
      out[k] = await translateDiff(v, out[k])
    }
    return out
  }
  return trVal
}

async function main() {
  const files = readdirSync(EN_DIR).filter((f) => f.endsWith('.json'))
  for (const file of files) {
    console.log(`Retranslating stale strings in ${TARGET}/${file} ...`)
    const en = JSON.parse(readFileSync(join(EN_DIR, file), 'utf8'))
    const current = JSON.parse(readFileSync(join(OUT_DIR, file), 'utf8'))
    const translated = await translateDiff(en, current)
    writeFileSync(join(OUT_DIR, file), `${JSON.stringify(translated, null, 2)}\n`)
    console.log(`Wrote ${TARGET}/${file}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
