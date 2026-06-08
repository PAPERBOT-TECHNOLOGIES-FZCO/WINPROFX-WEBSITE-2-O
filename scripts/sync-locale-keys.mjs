/**
 * Deep-merge missing keys from en locale files into all other locales.
 * Missing keys inherit English values (fallback until translated).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')
const SOURCE = 'en'

function deepMergeMissing(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {}
      }
      deepMergeMissing(target[key], value)
    } else if (!(key in target)) {
      target[key] = value
    }
  }
  return target
}

async function main() {
  const sourceDir = join(LOCALES_DIR, SOURCE)
  const files = (await readdir(sourceDir)).filter((f) => f.endsWith('.json'))
  const locales = (await readdir(LOCALES_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && d.name !== SOURCE)
    .map((d) => d.name)

  for (const file of files) {
    const sourceData = JSON.parse(await readFile(join(sourceDir, file), 'utf8'))
    for (const locale of locales) {
      const targetPath = join(LOCALES_DIR, locale, file)
      let targetData = {}
      try {
        targetData = JSON.parse(await readFile(targetPath, 'utf8'))
      } catch {
        // file may not exist
      }
      const merged = deepMergeMissing(targetData, sourceData)
      await writeFile(targetPath, `${JSON.stringify(merged, null, 2)}\n`)
    }
  }
  console.log('Synced missing keys from en into all locales.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
