import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function StaticHomeSeo() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (pathname !== '/') {
      document.getElementById('static-home-seo')?.remove()
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') {
      document.getElementById('static-home-seo')?.remove()
    }
  }, [pathname])

  return null
}
