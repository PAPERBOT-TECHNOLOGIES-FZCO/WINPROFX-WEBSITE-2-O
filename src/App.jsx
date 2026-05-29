import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import WebsiteIndex from './layout/website/index'
import AuthIndex from './layout/auth/index'
import Error from './pages/error'

// auth
import Login from './pages/auth/login'
import Registration from './pages/auth/registration'
import Forget from './pages/auth/forget'
import Verify from './pages/auth/verify'
import ResetPassword from './pages/auth/reset-password'

// websites pages
import Home from './pages/website/home'
import Forex from './pages/website/forex'
import Indices from './pages/website/indices'
import Crypto from './pages/website/crypto'
import Metals from './pages/website/trading/metals'
import Commodities from './pages/website/trading/commodities'
import Oil from './pages/website/trading/oil'
import WinPromotion from './pages/website/trading/win-promotion'
import TradeToWin from './pages/website/trading/trade-to-win'
import IntroducingBroker from './pages/website/trading/introducing-broker'
import Mt5Platform from './pages/website/mt5-platform'
import Accounts from './pages/website/accounts'
import AboutUs from './pages/website/about-us'
import Blog from './pages/website/blog/index'
import BlogDetails from './pages/website/blog/blog-details'
import Analytics from './pages/website/analytics'
import EconomicCalendar from './pages/website/economic-calendar'
import CurrencyCalculator from './pages/website/currency-calculator'
import CurrencyConverter from './pages/website/currency-converter'
import Policy from './pages/website/policy'
import Terms from './pages/website/terms'
import AmlPolicy from './pages/website/aml-policy'
import DepositWithdraw from './pages/website/deposit-withdraw'
import RestrictedCountries from './pages/website/restricted-countries'
import RiskDisclosure from './pages/website/risk-disclosure'
import Contact from './pages/website/contact'
import CompanyProfile from './pages/website/company-profile'
import OfficialDomains from './pages/website/official-domains'
import About from './pages/website/about'
import RiskWarning from './pages/website/risk-warning'
import LegalDocuments from './pages/website/legal-documents'
import VerifyWINPROFX from './pages/website/verify-winprofx'
import CompanyRegistration from './pages/website/company-registration'
import LegalEntityInformation from './pages/website/legal-entity-information'
import RegulatoryInformation from './pages/website/regulatory-information'


export default function App() {
  const router = createBrowserRouter([
    // website pages
    {
      path: '',
      element: <WebsiteIndex />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/forex',
          element: <Forex />
        },
        {
          path: '/indices',
          element: <Indices />
        },
        {
          path: '/crypto',
          element: <Crypto />
        },
        {
          path: '/trading/metals',
          element: <Metals />
        },
        {
          path: '/trading/commodities',
          element: <Commodities />
        },
        {
          path: '/trading/oil',
          element: <Oil />
        },
        {
          path: '/trading/win-promotion',
          element: <WinPromotion />
        },
        {
          path: '/trading/trade-to-win',
          element: <TradeToWin />
        },
        {
          path: '/introducing-broker',
          element: <IntroducingBroker />
        },
        {
          path: '/platform',
          element: <Mt5Platform />
        },
        {
          path: '/accounts',
          element: <Accounts />
        },
        {
          path: '/about-us',
          element: <AboutUs />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/blog/:id',
          element: <BlogDetails />
        },
        {
          path: '/analytics',
          element: <Analytics />
        },
        {
          path: '/economic-calendar',
          element: <EconomicCalendar />
        },
        {
          path: '/currency-calculator',
          element: <CurrencyCalculator />
        },
        {
          path: '/currency-converter',
          element: <CurrencyConverter />
        },
        {
          path: '/policy',
          element: <Policy />
        },
        {
          path: '/terms',
          element: <Terms />
        },
        {
          path: '/aml-policy',
          element: <AmlPolicy />
        },
        {
          path: '/deposit-withdraw',
          element: <DepositWithdraw />
        },
        {
          path: '/restricted-countries',
          element: <RestrictedCountries />
        },
        {
          path: '/risk-disclosure',
          element: <RiskDisclosure />
        },
        {
          path: '/risk-warning',
          element: <RiskWarning />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/company-profile',
          element: <CompanyProfile />
        },
        {
          path: '/company-registration',
          element: <CompanyRegistration />
        },
        {
          path: '/legal-entity-information',
          element: <LegalEntityInformation />
        },
        {
          path: '/regulatory-information',
          element: <RegulatoryInformation />
        },
        {
          path: '/official-domains',
          element: <OfficialDomains />
        },
        {
          path: '/legal-documents',
          element: <LegalDocuments />
        },
        {
          path: '/verify-winprofx',
          element: <VerifyWINPROFX />
        },
      ]
    },

    // auth pages
    {
      path: '',
      element: <AuthIndex />,
      errorElement: <Error />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Registration />
        },
        {
          path: '/forget',
          element: <Forget />
        },
        {
          path: '/verify',
          element: <Verify />
        },
        {
          path: '/reset-password',
          element: <ResetPassword />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
