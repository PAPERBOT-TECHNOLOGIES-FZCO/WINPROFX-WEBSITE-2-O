import React from 'react'
import Home from '@/pages/website/home'
import Forex from '@/pages/website/forex'
import Indices from '@/pages/website/indices'
import Crypto from '@/pages/website/crypto'
import Metals from '@/pages/website/trading/metals'
import Commodities from '@/pages/website/trading/commodities'
import Oil from '@/pages/website/trading/oil'
import WinPromotion from '@/pages/website/trading/win-promotion'
import TradeToWin from '@/pages/website/trading/trade-to-win'
import IntroducingBroker from '@/pages/website/trading/introducing-broker'
import Mt5Platform from '@/pages/website/mt5-platform'
import Accounts from '@/pages/website/accounts'
import AboutUs from '@/pages/website/about-us'
import Blog from '@/pages/website/blog/index'
import BlogDetails from '@/pages/website/blog/blog-details'
import Analytics from '@/pages/website/analytics'
import EconomicCalendar from '@/pages/website/economic-calendar'
import CurrencyCalculator from '@/pages/website/currency-calculator'
import CurrencyConverter from '@/pages/website/currency-converter'
import Policy from '@/pages/website/policy'
import Terms from '@/pages/website/terms'
import AmlPolicy from '@/pages/website/aml-policy'
import DepositWithdraw from '@/pages/website/deposit-withdraw'
import RestrictedCountries from '@/pages/website/restricted-countries'
import RiskDisclosure from '@/pages/website/risk-disclosure'
import Contact from '@/pages/website/contact'
// import CompanyProfile from '@/pages/website/company-profile'
// import OfficialDomains from '@/pages/website/official-domains'
import About from '@/pages/website/about'
import RiskWarning from '@/pages/website/risk-warning'
// import LegalDocuments from '@/pages/website/legal-documents'
import VerifyWINPROFX from '@/pages/website/verify-winprofx'
// import CompanyRegistration from '@/pages/website/company-registration'
// import LegalEntityInformation from '@/pages/website/legal-entity-information'
// import RegulatoryInformation from '@/pages/website/regulatory-information'
// import DubaiProfessionalLicense from '@/pages/website/dubai-professional-license'
// import UaeRepresentativeOffice from '@/pages/website/uae-representative-office'
import WithdrawalTransparency from '@/pages/website/withdrawal-transparency'
import ComplaintsAndDisputeResolution from '@/pages/website/complaints-and-dispute-resolution'
import ClientFundSecurity from '@/pages/website/client-fund-security'
import SupportAndEscalation from '@/pages/website/support-and-escalation'
// import CompanyStatistics from '@/pages/website/company-statistics'
// import TrustCenter from '@/pages/website/trust-center'
import IsWinprofxLegit from '@/pages/website/brand/is-winprofx-legit'
import WinprofxReview from '@/pages/website/brand/winprofx-review'
import WinprofxWithdrawalProcess from '@/pages/website/brand/winprofx-withdrawal-process'
import WinprofxLicenseVerification from '@/pages/website/brand/winprofx-license-verification'
import WinprofxComplaints from '@/pages/website/brand/winprofx-complaints'
import WinprofxFakeWebsiteWarning from '@/pages/website/brand/winprofx-fake-website-warning'
import WinprofxOfficialLogin from '@/pages/website/brand/winprofx-official-login'
import WinprofxDepositWithdrawalMethods from '@/pages/website/brand/winprofx-deposit-and-withdrawal-methods'
import LearnIndex from '@/pages/website/learn/index'
import LearnWhatIsForex from '@/pages/website/learn/what-is-forex-trading'
import LearnWhatIsCfd from '@/pages/website/learn/what-is-cfd-trading'
import LearnWhatIsMt5 from '@/pages/website/learn/what-is-mt5'
import LearnLeverage from '@/pages/website/learn/what-is-leverage-in-forex'
import LearnMarginCall from '@/pages/website/learn/what-is-margin-call'
import LearnSpread from '@/pages/website/learn/what-is-spread-in-trading'
import LearnRiskManagement from '@/pages/website/learn/how-to-manage-risk-in-cfd-trading'
import LearnDemoVsLive from '@/pages/website/learn/demo-vs-live-trading-account'
import LearnBrokerLegit from '@/pages/website/learn/how-to-check-if-a-forex-broker-is-legit'
import LearnOffshoreVsRegulated from '@/pages/website/learn/offshore-vs-regulated-forex-brokers'

/** Canonical website routes — English paths without locale prefix. */
export const WEBSITE_ROUTE_DEFINITIONS = [
  { path: '/', Component: Home },
  { path: '/forex', Component: Forex },
  { path: '/indices', Component: Indices },
  { path: '/crypto', Component: Crypto },
  { path: '/trading/metals', Component: Metals },
  { path: '/trading/commodities', Component: Commodities },
  { path: '/trading/oil', Component: Oil },
  { path: '/trading/win-promotion', Component: WinPromotion },
  { path: '/trading/trade-to-win', Component: TradeToWin },
  { path: '/introducing-broker', Component: IntroducingBroker },
  { path: '/platform', Component: Mt5Platform },
  { path: '/accounts', Component: Accounts },
  { path: '/about-us', Component: AboutUs },
  { path: '/about', Component: About },
  { path: '/blog', Component: Blog },
  { path: '/blog/:id', Component: BlogDetails },
  { path: '/analytics', Component: Analytics },
  { path: '/economic-calendar', Component: EconomicCalendar },
  { path: '/currency-calculator', Component: CurrencyCalculator },
  { path: '/currency-converter', Component: CurrencyConverter },
  { path: '/policy', Component: Policy },
  { path: '/terms', Component: Terms },
  { path: '/aml-policy', Component: AmlPolicy },
  { path: '/deposit-withdraw', Component: DepositWithdraw },
  { path: '/restricted-countries', Component: RestrictedCountries },
  { path: '/risk-disclosure', Component: RiskDisclosure },
  { path: '/risk-warning', Component: RiskWarning },
  { path: '/contact', Component: Contact },
  // { path: '/company-profile', Component: CompanyProfile },
  // { path: '/company-registration', Component: CompanyRegistration },
  // { path: '/legal-entity-information', Component: LegalEntityInformation },
  // { path: '/regulatory-information', Component: RegulatoryInformation },
  // { path: '/dubai-professional-license', Component: DubaiProfessionalLicense },
  // { path: '/uae-representative-office', Component: UaeRepresentativeOffice },
  { path: '/withdrawal-transparency', Component: WithdrawalTransparency },
  { path: '/complaints-and-dispute-resolution', Component: ComplaintsAndDisputeResolution },
  { path: '/client-fund-security', Component: ClientFundSecurity },
  { path: '/support-and-escalation', Component: SupportAndEscalation },
  // { path: '/company-statistics', Component: CompanyStatistics },
  // { path: '/official-domains', Component: OfficialDomains },
  // { path: '/legal-documents', Component: LegalDocuments },
  { path: '/verify-winprofx', Component: VerifyWINPROFX },
  // { path: '/trust-center', Component: TrustCenter },
  { path: '/is-winprofx-legit', Component: IsWinprofxLegit },
  { path: '/winprofx-review', Component: WinprofxReview },
  { path: '/winprofx-withdrawal-process', Component: WinprofxWithdrawalProcess },
  { path: '/winprofx-license-verification', Component: WinprofxLicenseVerification },
  { path: '/winprofx-complaints', Component: WinprofxComplaints },
  { path: '/winprofx-fake-website-warning', Component: WinprofxFakeWebsiteWarning },
  { path: '/winprofx-official-login', Component: WinprofxOfficialLogin },
  { path: '/winprofx-deposit-and-withdrawal-methods', Component: WinprofxDepositWithdrawalMethods },
  { path: '/learn', Component: LearnIndex },
  { path: '/learn/what-is-forex-trading', Component: LearnWhatIsForex },
  { path: '/learn/what-is-cfd-trading', Component: LearnWhatIsCfd },
  { path: '/learn/what-is-mt5', Component: LearnWhatIsMt5 },
  { path: '/learn/what-is-leverage-in-forex', Component: LearnLeverage },
  { path: '/learn/what-is-margin-call', Component: LearnMarginCall },
  { path: '/learn/what-is-spread-in-trading', Component: LearnSpread },
  { path: '/learn/how-to-manage-risk-in-cfd-trading', Component: LearnRiskManagement },
  { path: '/learn/demo-vs-live-trading-account', Component: LearnDemoVsLive },
  { path: '/learn/how-to-check-if-a-forex-broker-is-legit', Component: LearnBrokerLegit },
  { path: '/learn/offshore-vs-regulated-forex-brokers', Component: LearnOffshoreVsRegulated },
]

/** Convert absolute path to nested child path under /:locale */
export function toNestedRoutePath(absolutePath) {
  if (!absolutePath || absolutePath === '/') return ''
  return absolutePath.replace(/^\//, '')
}

export function buildWebsiteRouteChildren(definitions = WEBSITE_ROUTE_DEFINITIONS) {
  return definitions.map(({ path, Component: PageComponent }) => {
    if (path === '/') {
      return { index: true, element: <PageComponent /> }
    }
    return { path: toNestedRoutePath(path), element: <PageComponent /> }
  })
}

export function buildWebsiteRouteEntries(definitions = WEBSITE_ROUTE_DEFINITIONS) {
  return definitions.map(({ path, Component: PageComponent }) => ({
    path,
    element: <PageComponent />,
  }))
}
