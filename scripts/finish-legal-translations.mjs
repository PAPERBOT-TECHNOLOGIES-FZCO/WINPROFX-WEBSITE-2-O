/**
 * Merges remaining legal body translations (es/pt) into legal-body-maps.json.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAPS_PATH = join(process.cwd(), 'scripts', 'legal-body-maps.json');
const MISSING_PATH = '/tmp/missing2.json';
const TRANSLATIONS_PATH = join(process.cwd(), 'scripts', 'legal-missing2-translations.json');

const maps = JSON.parse(readFileSync(MAPS_PATH, 'utf8'));
const missing = JSON.parse(readFileSync(MISSING_PATH, 'utf8'));
const { es: esLines, pt: ptLines } = JSON.parse(readFileSync(TRANSLATIONS_PATH, 'utf8'));

if (!Array.isArray(missing)) {
  console.error('missing2.json must be an array');
  process.exit(1);
}

if (!Array.isArray(esLines) || !Array.isArray(ptLines)) {
  console.error('legal-missing2-translations.json must contain es and pt arrays');
  process.exit(1);
}

if (esLines.length !== missing.length || ptLines.length !== missing.length) {
  console.error(
    `Translation count mismatch: missing=${missing.length} es=${esLines.length} pt=${ptLines.length}`,
  );
  process.exit(1);
}

for (let i = 0; i < missing.length; i++) {
  const en = missing[i];
  maps.es[en] = esLines[i];
  maps.pt[en] = ptLines[i];
}

writeFileSync(MAPS_PATH, JSON.stringify(maps, null, 2) + '\n');
console.log(`Added ${missing.length} translations to legal-body-maps.json`);
