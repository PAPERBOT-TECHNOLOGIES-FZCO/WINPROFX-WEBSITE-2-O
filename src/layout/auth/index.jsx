import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SeoHead from '@/components/seo-head'

const authTitles = {
  '/login': 'Login',
  '/register': 'Register',
  '/forget': 'Forgot Password',
  '/verify': 'Verify Account',
  '/reset-password': 'Reset Password',
}

export default function AuthLayout() {
  const { pathname } = useLocation()
  const title = authTitles[pathname] ?? 'Account'

  return (
    <div className='min-h-screen min-w-full flex flex-col'>
      <SeoHead
        title={`${title} | WINPROFX`}
        canonicalPath={pathname}
        robots="noindex, nofollow"
      />
      <div className="max-w-150 w-full rounded-xl bg-white/2 border border-solid border-white/10 p-4 m-auto">
        <Outlet />
      </div>
    </div>
  )
}
