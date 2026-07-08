import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const LOCALES_DIR = join(process.cwd(), 'src', 'locales');
const SOURCE_LOCALE = 'en';

function collectKeys(obj, prefix = '') {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...collectKeys(value, path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

async function loadJson(filePath) {
  const raw = await readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function main() {
  const sourceDir = join(LOCALES_DIR, SOURCE_LOCALE);
  const sourceFiles = (await readdir(sourceDir)).filter((f) => f.endsWith('.json'));

  const localeDirs = (await readdir(LOCALES_DIR, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && entry.name !== SOURCE_LOCALE)
    .map((entry) => entry.name);

  let hasMissing = false;

  for (const namespace of sourceFiles) {
    const sourcePath = join(sourceDir, namespace);
    const sourceData = await loadJson(sourcePath);
    const sourceKeys = new Set(collectKeys(sourceData));

    for (const locale of localeDirs) {
      const targetPath = join(LOCALES_DIR, locale, namespace);

      let targetData;
      try {
        targetData = await loadJson(targetPath);
      } catch {
        console.error(`[${locale}] Missing file: ${namespace}`);
        hasMissing = true;
        continue;
      }

      const targetKeys = new Set(collectKeys(targetData));
      const missing = [...sourceKeys].filter((key) => !targetKeys.has(key)).sort();

      if (missing.length > 0) {
        hasMissing = true;
        console.error(`[${locale}] ${namespace} — missing ${missing.length} key(s):`);
        for (const key of missing) {
          console.error(`  - ${key}`);
        }
      }
    }
  }

  if (hasMissing) {
    console.error('\ni18n check failed: one or more locales are missing keys.');
    process.exit(1);
  }

  console.log('i18n check passed: all locales match English key structure.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
