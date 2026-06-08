/**
 * Inserts missing spaces around {{placeholders}} after machine translation.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const LOCALES = ['hi', 'id', 'vi', 'bn', 'ms']

function fixSpacing(text) {
  if (typeof text !== 'string') return text
  return text
    .replace(/([^\s{])(\{\{)/g, '$1 $2')
    .replace(/(\}\})([^\s.,;:!?)])/g, '$1 $2')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function walk(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string' && value.includes('{{')) {
      obj[key] = fixSpacing(value)
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      walk(value)
    }
  }
}

for (const locale of LOCALES) {
  for (const file of ['trust.json', 'company.json']) {
    const path = join('src/locales', locale, file)
    const data = JSON.parse(readFileSync(path, 'utf8'))
    walk(data)
    writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
    console.log(`Fixed spacing: ${locale}/${file}`)
  }
}
