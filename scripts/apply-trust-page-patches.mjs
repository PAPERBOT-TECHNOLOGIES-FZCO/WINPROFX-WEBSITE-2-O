/**
 * Merges scripts/trust-page-locale-patches.json into locale files.
 * Fixes numbered placeholder corruption (0, 1, 2 -> {{brandName}}, etc.).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const LOCALES_DIR = join(ROOT, 'src', 'locales')
const PATCHES = JSON.parse(readFileSync(join(ROOT, 'scripts', 'trust-page-locale-patches.json'), 'utf8'))

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

/** Restore {{placeholders}} when machine translation replaced them with 0, 1, 2… */
export function fixPlaceholders(enStr, translatedStr) {
  if (typeof enStr !== 'string' || typeof translatedStr !== 'string') return translatedStr
  const placeholders = [...enStr.matchAll(/\{\{[^}]+\}\}/g)].map((m) => m[0])
  if (placeholders.length === 0) return translatedStr

  let result = translatedStr
  for (let i = placeholders.length - 1; i >= 0; i--) {
    result = result.replace(new RegExp(`\\b${i}\\b`, 'g'), placeholders[i])
  }
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

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function saveJson(path, data) {
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
}

function main() {
  for (const locale of Object.keys(PATCHES)) {
  const enTrust = loadJson(join(LOCALES_DIR, 'en', 'trust.json'))
  const enCompany = loadJson(join(LOCALES_DIR, 'en', 'company.json'))
  const trustPath = join(LOCALES_DIR, locale, 'trust.json')
  const companyPath = join(LOCALES_DIR, locale, 'company.json')
  const trustData = loadJson(trustPath)
  const companyData = loadJson(companyPath)
  const patch = PATCHES[locale]

  for (const [path, patchValue] of collectStringPaths(patch.trust)) {
    const enValue = getAtPath(enTrust, path)
    if (!enValue || patchValue === enValue) continue
    setAtPath(trustData, path, fixPlaceholders(enValue, patchValue))
  }

  for (const [path, patchValue] of collectStringPaths(patch.company)) {
    const enValue = getAtPath(enCompany, path)
    if (!enValue || patchValue === enValue) continue
    setAtPath(companyData, path, fixPlaceholders(enValue, patchValue))
  }

  saveJson(trustPath, trustData)
  saveJson(companyPath, companyData)
  console.log(`Applied trust patches: ${locale}`)
  }

  console.log('Trust page patches merged.')
}

main()
