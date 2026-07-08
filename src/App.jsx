import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import WebsiteIndex from './layout/website/index'
import AuthIndex from './layout/auth/index'
import Error from './pages/error'
import { NON_DEFAULT_LOCALES } from '@/lib/locale-config'
import {
  buildWebsiteRouteChildren,
  buildWebsiteRouteEntries,
} from '@/routes/website-routes'

import Login from './pages/auth/login'
import Registration from './pages/auth/registration'
import Forget from './pages/auth/forget'
import Verify from './pages/auth/verify'
import ResetPassword from './pages/auth/reset-password'

export default function App() {
  const localizedWebsiteRoutes = NON_DEFAULT_LOCALES.map((locale) => ({
    path: `/${locale}`,
    element: <WebsiteIndex />,
    errorElement: <Error />,
    children: buildWebsiteRouteChildren(),
  }))

  const router = createBrowserRouter([
    {
      path: '',
      element: <WebsiteIndex />,
      errorElement: <Error />,
      children: buildWebsiteRouteEntries(),
    },
    ...localizedWebsiteRoutes,
    {
      path: '',
      element: <AuthIndex />,
      errorElement: <Error />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Registration /> },
        { path: '/forget', element: <Forget /> },
        { path: '/verify', element: <Verify /> },
        { path: '/reset-password', element: <ResetPassword /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
