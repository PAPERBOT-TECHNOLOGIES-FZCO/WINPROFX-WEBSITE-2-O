import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')
const SOURCE = 'en'
const TARGET_LOCALES = ['hi', 'id', 'vi', 'bn', 'ms', 'zh', 'ja', 'es', 'pt']
const MIN_LENGTH = 4
const SKIP_KEY_SUFFIXES = ['.path', '.slug']
const SKIP_KEY_PREFIXES = ['articleLinks.', 'meta.lastReviewed', 'meta.lastUpdated']
const SKIP_IDENTICAL_VALUES = new Set([
  'Whatsapp',
  'WhatsApp',
  'App Store',
  'Google Play',
  'Forex',
  'Metal',
  'Crypto',
  'Energies',
  'Indices',
  'MT5',
  'Dubai Professional License',
  'Introducing Broker',
  'WINPROFX',
  'No Swap',
  'No Commission',
  'Low Spread',
  'Standard',
  'Pro',
  'ECN',
  'Fast Payout Settlement',
])

function shouldSkip(key, value) {
  if (SKIP_KEY_SUFFIXES.some((suffix) => key.endsWith(suffix))) return true
  if (key === 'legalEntityName' || key === 'jurisdiction' || key === 'supportEmail') return true
  if (
    key.endsWith('registeredAgent') ||
    key.endsWith('registeredOffice') ||
    key.endsWith('incorporationSubscriber') ||
    key.endsWith('documentTypes')
  ) {
    return true
  }
  if (SKIP_KEY_PREFIXES.some((prefix) => key.startsWith(prefix))) return true
  if (SKIP_IDENTICAL_VALUES.has(value.trim())) return true
  if (/^1:\d+$/.test(value.trim())) return true
  if (/^\$[\d,]+(\.\d+)?$/.test(value.trim())) return true
  if (key.endsWith('.email') && value.trim() === 'Email') return true
  if (key.endsWith('.spread') && value.trim() === 'Spread') return true
  return false
}

function collectStrings(obj, prefix = '') {
  const pairs = []
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      pairs.push(...collectStrings(value, path))
    } else if (typeof value === 'string' && value.trim().length >= MIN_LENGTH && !shouldSkip(path, value)) {
      pairs.push([path, value])
    }
  }
  return pairs
}

async function main() {
  const enFiles = (await readdir(join(LOCALES_DIR, SOURCE))).filter((f) => f.endsWith('.json'))
  let totalUntranslated = 0

  for (const file of enFiles) {
    const enData = JSON.parse(await readFile(join(LOCALES_DIR, SOURCE, file), 'utf8'))
    const enPairs = collectStrings(enData)
    const enMap = Object.fromEntries(enPairs)

    for (const locale of TARGET_LOCALES) {
      const targetPath = join(LOCALES_DIR, locale, file)
      let targetData
      try {
        targetData = JSON.parse(await readFile(targetPath, 'utf8'))
      } catch {
        console.error(`[${locale}] missing file: ${file}`)
        totalUntranslated++
        continue
      }

      const targetMap = Object.fromEntries(collectStrings(targetData))
      const identical = Object.keys(enMap).filter((key) => targetMap[key] === enMap[key])

      if (identical.length > 0) {
        console.error(`\n[${locale}/${file}] ${identical.length} string(s) still identical to English:`)
        for (const key of identical.slice(0, 8)) {
          console.error(`  - ${key}`)
        }
        if (identical.length > 8) {
          console.error(`  ... and ${identical.length - 8} more`)
        }
        totalUntranslated += identical.length
      }
    }
  }

  if (totalUntranslated > 0) {
    console.error(`\nUntranslated check failed: ${totalUntranslated} identical string(s) found.`)
    process.exit(1)
  }

  console.log('Untranslated check passed: no locale strings identical to English.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
