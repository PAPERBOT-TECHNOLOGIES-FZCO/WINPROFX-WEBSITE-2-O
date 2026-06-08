/**
 * Fixes numbered placeholder corruption and WINPROFX->0 artifacts in trust/company locales.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')
const LOCALES = ['hi', 'id', 'vi', 'bn', 'ms']

function fixPlaceholders(enStr, translatedStr) {
  const placeholders = [...enStr.matchAll(/\{\{[^}]+\}\}/g)].map((m) => m[0])
  if (placeholders.length === 0) return translatedStr
  let result = translatedStr
  for (let i = placeholders.length - 1; i >= 0; i--) {
    result = result.replace(new RegExp(`\\b${i}\\b`, 'g'), placeholders[i])
  }
  return result
}

function fixBrandCorruption(enStr, locStr) {
  let result = fixPlaceholders(enStr, locStr)
  if (!enStr.includes('WINPROFX')) return result

  result = result
    .replace(/^0 /, 'WINPROFX ')
    .replace(/ 0 /g, ' WINPROFX ')
    .replace(/{{brandName}} सेवाएँ/, 'WINPROFX सेवाएँ')
    .replace(/{{brandName}} से संपर्क/, 'WINPROFX से संपर्क')

  return result
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

function getAtPath(obj, path) {
  return path.split('.').reduce((cur, part) => cur?.[part], obj)
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

for (const locale of LOCALES) {
  for (const file of ['trust.json', 'company.json']) {
    const en = JSON.parse(readFileSync(join(LOCALES_DIR, 'en', file), 'utf8'))
    const data = JSON.parse(readFileSync(join(LOCALES_DIR, locale, file), 'utf8'))
    let fixed = 0

    for (const [path, value] of collectStringPaths(data)) {
      const enValue = getAtPath(en, path)
      if (!enValue) continue
      const repaired = fixBrandCorruption(enValue, value)
      if (repaired !== value) {
        setAtPath(data, path, repaired)
        fixed++
      }
    }

    writeFileSync(join(LOCALES_DIR, locale, file), `${JSON.stringify(data, null, 2)}\n`)
    console.log(`${locale}/${file}: fixed ${fixed} strings`)
  }
}

console.log('Corruption repair complete.')
