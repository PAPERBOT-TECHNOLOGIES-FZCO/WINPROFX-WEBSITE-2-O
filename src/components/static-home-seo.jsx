import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function StaticHomeSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/') return
    document.getElementById('static-home-seo')?.remove()
  }, [pathname])

  return null
}
