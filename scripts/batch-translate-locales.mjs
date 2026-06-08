import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LOCALES = {
  hi: 'hi',
  id: 'id',
  vi: 'vi',
  bn: 'bn',
  ms: 'ms',
};

const FILES = [
  'common',
  'navigation',
  'footer',
  'seo',
  'company',
  'homepage',
  'markets',
  'trading',
  'tools',
  'trust',
  'legal',
  'brand',
  'learn',
];
const PRESERVE_REGEXES = [
  /WINPROFX/gi,
  /Winprofx/gi,
  /MetaTrader 5/gi,
  /\bMT5\b/g,
  /\bForex\b/g,
  /\bCFDs?\b/g,
  /\bIB\b/g,
  /\bPAMM\b/g,
  /\bECN\b/g,
  /\bSpread\b/g,
  /\bLeverage\b/g,
  /\bUSDT\b/g,
  /TradingView/gi,
  /App Store/gi,
  /Google Play/gi,
  /Trading Central/gi,
  /FXStreet/gi,
  /support@winprofx\.com/gi,
  /winprofx\.org/gi,
  /my\.winprofx\.org/gi,
  /partner\.winprofx\.org/gi,
  /winprofx\.com/gi,
  /winprofx\.ae/gi,
  /\{\{[^}]+\}\}/g,
  /<[^>]+>/g,
  /https?:\/\/[^\s"']+/g,
];

const cache = new Map();
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

function protect(text) {
  const tokens = [];
  let protectedText = text;
  for (const pattern of PRESERVE_REGEXES) {
    protectedText = protectedText.replace(pattern, (match) => {
      const token = `\uE000${tokens.length}\uE001`;
      tokens.push(match);
      return token;
    });
  }
  return { protectedText, tokens };
}

function restore(text, tokens) {
  let result = text;
  tokens.forEach((token, i) => {
    const marker = `\uE000${i}\uE001`;
    result = result.split(marker).join(token);
    // fallback if API stripped private-use chars
    result = result.split(`E000${i}E001`).join(token);
  });
  return result;
}

async function translateText(text, targetLang) {
  if (!text || !text.trim()) return text;
  const key = `${targetLang}::${text}`;
  if (cache.has(key)) return cache.get(key);

  const { protectedText, tokens } = protect(text);
  const translatable = protectedText.replace(/\uE000\d+\uE001/g, '').trim();
  if (!translatable) {
    cache.set(key, text);
    return text;
  }

  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', protectedText.slice(0, 450));
  url.searchParams.set('langpair', `en|${targetLang}`);

  let translated = protectedText;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      translated = data.responseData.translatedText;
      if (/MYMEMORY WARNING|YOU USED ALL AVAILABLE FREE TRANSLATIONS/i.test(translated)) {
        throw new Error(`MyMemory quota exhausted for ${targetLang}. Use scripts/apply-*-translations.mjs or retry later.`);
      }
    }
  } catch (err) {
    if (err instanceof Error && err.message.includes('quota exhausted')) throw err;
    translated = protectedText;
  }

  const result = restore(translated, tokens);
  cache.set(key, result);
  await delay(350);
  return result;
}

async function translateValue(value, targetLang) {
  if (typeof value === 'string') return translateText(value, targetLang);
  if (Array.isArray(value)) {
    const out = [];
    for (const item of value) out.push(await translateValue(item, targetLang));
    return out;
  }
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = await translateValue(v, targetLang);
    }
    return out;
  }
  return value;
}

async function main() {
  const onlyLocale = process.argv[2];
  const onlyFile = process.argv[3];
  const locales = onlyLocale ? { [onlyLocale]: LOCALES[onlyLocale] } : LOCALES;
  const files = onlyFile ? [onlyFile] : FILES;

  for (const [locale, langCode] of Object.entries(locales)) {
    for (const file of files) {
      const enPath = join('src/locales/en', `${file}.json`);
      const outPath = join('src/locales', locale, `${file}.json`);
      const enData = JSON.parse(readFileSync(enPath, 'utf8'));
      console.log(`Translating ${locale}/${file}.json ...`);
      const translated = await translateValue(enData, langCode);
      writeFileSync(outPath, `${JSON.stringify(translated, null, 2)}\n`);
      console.log(`Wrote ${outPath}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
