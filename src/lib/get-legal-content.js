/**
 * Load legal page section content from i18n (legal.{pageKey}.content).
 * @param {import('i18next').TFunction} t
 * @param {string} pageKey
 */
export function getLegalContent(t, pageKey) {
  const content = t(`legal:${pageKey}.content`, { returnObjects: true, defaultValue: [] })
  return Array.isArray(content) ? content : []
}
