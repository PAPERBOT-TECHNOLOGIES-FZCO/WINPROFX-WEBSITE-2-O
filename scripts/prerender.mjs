import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { PRERENDER_ROUTES } from './prerender-routes.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PREVIEW_PORT = 4173
const PREVIEW_URL = `http://127.0.0.1:${PREVIEW_PORT}`

function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) return resolve()
      } catch {
        // retry
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Preview server did not start within ${timeoutMs}ms`))
        return
      }
      setTimeout(tick, 500)
    }
    tick()
  })
}

function startPreview() {
  return spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT), '--strictPort'], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  })
}

async function waitForRoute(page, route) {
  await page.goto(`${PREVIEW_URL}${route.path}`, { waitUntil: 'networkidle', timeout: 60000 })

  await page.waitForFunction(
    (expectedTitle) => {
      const title = document.title || ''
      return expectedTitle ? title.includes(expectedTitle) : title.length > 0
    },
    route.expectedTitle,
    { timeout: 30000 },
  )

  if (route.path !== '/') {
    await page.waitForFunction(
      () => !document.getElementById('static-home-seo'),
      undefined,
      { timeout: 10000 },
    )
  }

  if (route.expectedH1) {
    await page.waitForFunction(
      (expectedH1) => {
        const h1 = document.querySelector('h1')
        return h1 && h1.textContent.includes(expectedH1)
      },
      route.expectedH1,
      { timeout: 30000 },
    )
  } else {
    await page.waitForSelector('h1', { timeout: 30000 })
  }

  await page.waitForFunction(
    () => document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    undefined,
    { timeout: 10000 },
  )
}

function outputPathForRoute(routePath) {
  if (routePath === '/') return path.join(DIST, 'index.html')
  const dir = path.join(DIST, routePath.replace(/^\//, ''))
  return path.join(dir, 'index.html')
}

async function main() {
  const preview = startPreview()
  preview.stdout?.on('data', (d) => process.stdout.write(d))
  preview.stderr?.on('data', (d) => process.stderr.write(d))

  try {
    await waitForServer(PREVIEW_URL)
    const browser = await chromium.launch({ headless: true })

    for (const route of PRERENDER_ROUTES) {
      process.stdout.write(`Prerendering ${route.path}...\n`)
      const page = await browser.newPage()
      await waitForRoute(page, route)
      const html = await page.content()
      await page.close()
      const outFile = outputPathForRoute(route.path)
      await mkdir(path.dirname(outFile), { recursive: true })
      await writeFile(outFile, html, 'utf8')
      process.stdout.write(`  → ${path.relative(ROOT, outFile)}\n`)
    }

    await browser.close()
    process.stdout.write(`Prerendered ${PRERENDER_ROUTES.length} routes.\n`)
  } finally {
    preview.kill('SIGTERM')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
