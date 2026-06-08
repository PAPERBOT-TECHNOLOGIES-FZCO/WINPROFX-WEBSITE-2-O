/** Learn section article registry */

export const LEARN_LAST_UPDATED = '2026-06-02'
export const LEARN_AUTHOR = 'WINPROFX Education Team'
export const LEARN_REVIEWER = 'WINPROFX Compliance Team'

const ARTICLE_KEYS = [
  'whatIsForexTrading',
  'whatIsCfdTrading',
  'whatIsMt5',
  'whatIsLeverageInForex',
  'whatIsMarginCall',
  'whatIsSpreadInTrading',
  'howToManageRiskInCfdTrading',
  'demoVsLiveTradingAccount',
  'howToCheckIfAForexBrokerIsLegit',
  'offshoreVsRegulatedForexBrokers',
]

const ARTICLE_LINK_DEFS = {
  whatIsForexTrading: ['forex', 'platform', 'trustCenter'],
  whatIsCfdTrading: ['crypto', 'riskWarning'],
  whatIsMt5: ['platform', 'accounts'],
  whatIsLeverageInForex: ['marginCall', 'riskWarning'],
  whatIsMarginCall: ['leverage', 'accounts'],
  whatIsSpreadInTrading: ['forex', 'accounts'],
  howToManageRiskInCfdTrading: ['riskWarning', 'trustCenter'],
  demoVsLiveTradingAccount: ['accounts', 'verifyWinprofx'],
  howToCheckIfAForexBrokerIsLegit: ['isWinprofxLegit', 'trustCenter', 'officialDomains'],
  offshoreVsRegulatedForexBrokers: ['regulatoryInformation', 'licenseVerification', 'checkBrokerLegit'],
}

const SECTION_KEY_ORDER = {
  whatIsForexTrading: ['definition', 'howCurrencyPairsWork', 'forexAtWinprofx'],
  whatIsCfdTrading: ['definition', 'cfdsVsOwnership', 'risks'],
  whatIsMt5: ['overview', 'winprofxAndMt5'],
  whatIsLeverageInForex: ['definition', 'howLeverageAffectsRisk'],
  whatIsMarginCall: ['definition', 'prevention'],
  whatIsSpreadInTrading: ['definition', 'variableSpreads'],
  howToManageRiskInCfdTrading: ['positionSizing', 'stopLossAndTakeProfit', 'diversificationAndDiscipline'],
  demoVsLiveTradingAccount: ['demoAccounts', 'liveAccounts'],
  howToCheckIfAForexBrokerIsLegit: ['verifyOfficialDomains', 'reviewCompanyRegistration', 'understandRegulatoryScope'],
  offshoreVsRegulatedForexBrokers: ['offshoreIncorporation', 'financialServicesRegulation', 'dueDiligence'],
}

/** @param {(key: string, opts?: object) => string} t - learn namespace translator */
export function getLearnArticles(t) {
  return ARTICLE_KEYS.map((key) => ({
    slug: t(`articles.${key}.slug`),
    path: t(`articles.${key}.path`),
    title: t(`articles.${key}.title`),
    description: t(`articles.${key}.description`),
    h1: t(`articles.${key}.h1`),
    breadcrumb: t(`articles.${key}.breadcrumb`),
    key,
  }))
}

/** @param {(key: string, opts?: object) => string} t */
export function getLearnArticle(t, slug) {
  const articles = getLearnArticles(t)
  return articles.find((a) => a.slug === slug)
}

/** @param {(key: string, opts?: object) => string} t */
export function getLearnArticleContent(t, articleKey) {
  const sectionKeys = SECTION_KEY_ORDER[articleKey] ?? []
  const sections = sectionKeys.map((sectionKey) => ({
    title: t(`articles.${articleKey}.sections.${sectionKey}.title`),
    body: t(`articles.${articleKey}.sections.${sectionKey}.body`),
  }))

  const linkKeys = ARTICLE_LINK_DEFS[articleKey] ?? []
  const links = linkKeys.map((linkKey) => ({
    path: t(`articleLinks.${linkKey}`),
    label: t(`articles.${articleKey}.links.${linkKey}`),
  }))

  return { sections, links }
}

const SLUG_TO_KEY = {
  'what-is-forex-trading': 'whatIsForexTrading',
  'what-is-cfd-trading': 'whatIsCfdTrading',
  'what-is-mt5': 'whatIsMt5',
  'what-is-leverage-in-forex': 'whatIsLeverageInForex',
  'what-is-margin-call': 'whatIsMarginCall',
  'what-is-spread-in-trading': 'whatIsSpreadInTrading',
  'how-to-manage-risk-in-cfd-trading': 'howToManageRiskInCfdTrading',
  'demo-vs-live-trading-account': 'demoVsLiveTradingAccount',
  'how-to-check-if-a-forex-broker-is-legit': 'howToCheckIfAForexBrokerIsLegit',
  'offshore-vs-regulated-forex-brokers': 'offshoreVsRegulatedForexBrokers',
}

export function resolveLearnArticleKey(slug) {
  return SLUG_TO_KEY[slug]
}

/** @deprecated Use getLearnArticles(t) */
export const learnArticles = ARTICLE_KEYS.map((key) => ({ slug: key, path: '', title: key, description: key, h1: key, breadcrumb: key }))

/** @deprecated Use getLearnArticle(t, slug) */
export function getLearnArticleLegacy(slug) {
  return learnArticles.find((a) => a.slug === slug)
}

/** @deprecated Use getLearnArticleContent(t, key) */
export const learnArticleContent = {}
