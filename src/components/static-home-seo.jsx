import { useLayoutEffect } from 'react'

export default function StaticHomeSeo() {
  useLayoutEffect(() => {
    document.getElementById('static-home-seo')?.remove()
  }, [])

  return null
}
