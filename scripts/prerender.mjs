import { spawn } from 'node:child_process'
import http from 'node:http'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { PRERENDER_ROUTES } from './prerender-routes.mjs'
import {
  printPrerenderReport,
  validatePrerenderRoutes,
  validatePrerenderedHtmlSamples,
} from './validate-prerender-routes.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PREVIEW_HOST = '127.0.0.1'
const PREVIEW_PORT = 4173
const PREVIEW_URL = `http://${PREVIEW_HOST}:${PREVIEW_PORT}`

const VITE_BIN = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js')

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      res.resume()
      if (res.statusCode >= 200 && res.statusCode < 500) {
        resolve(res.statusCode)
      } else {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`))
      }
    })
    req.on('error', reject)
    req.setTimeout(5000, () => {
      req.destroy(new Error(`Timeout requesting ${url}`))
    })
  })
}

async function waitForServer(url, timeoutMs = 120000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      await httpGet(url)
      return
    } catch {
      await new Promise((r) => setTimeout(r, 250))
    }
  }
  throw new Error(`Preview server did not respond at ${url} within ${timeoutMs}ms`)
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [
      VITE_BIN,
      'preview',
      '--port',
      String(PREVIEW_PORT),
      '--strictPort',
      '--host',
      PREVIEW_HOST,
    ], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, FORCE_COLOR: '0' },
    })

    let settled = false
    const finish = (err, proc) => {
      if (settled) return
      settled = true
      clearTimeout(startupTimer)
      if (err) reject(err)
      else resolve(proc)
    }

    const startupTimer = setTimeout(() => {
      finish(new Error(`Preview server did not respond at ${PREVIEW_URL} within 120s`))
    }, 120000)

    let outputBuffer = ''
    const onOutput = (chunk) => {
      const text = chunk.toString()
      process.stdout.write(text)
      outputBuffer += text
    }

    child.stdout?.on('data', onOutput)
    child.stderr?.on('data', (chunk) => {
      process.stderr.write(chunk)
      onOutput(chunk)
    })

    child.on('error', (err) => finish(err))
    child.on('exit', (code) => {
      if (!settled && code !== 0 && code !== null) {
        finish(new Error(`Preview process exited with code ${code}`))
      }
    })

    waitForServer(`${PREVIEW_URL}/`, 120000)
      .then(() => finish(null, child))
      .catch((err) => finish(err))
  })
}

async function waitForRoute(page, route) {
  await page.goto(`${PREVIEW_URL}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 90000 })

  await page.waitForFunction(
    (expectedTitle) => {
      const title = document.title || ''
      return expectedTitle ? title.includes(expectedTitle) : title.length > 0
    },
    route.expectedTitle,
    { timeout: 60000 },
  )

  if (route.path !== '/' && !route.path.match(/^\/(hi|id|vi|bn|ms)\/?$/)) {
    await page.waitForFunction(() => !document.getElementById('static-home-seo'), undefined, {
      timeout: 15000,
    })
  }

  if (route.expectedH1) {
    await page.waitForFunction(
      (expectedH1) => {
        const h1 = document.querySelector('h1')
        return h1 && h1.textContent.includes(expectedH1)
      },
      route.expectedH1,
      { timeout: 60000 },
    )
  } else {
    await page.waitForSelector('h1', { timeout: 60000 })
  }

  await page.waitForFunction(
    () => document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    undefined,
    { timeout: 15000 },
  )

  await new Promise((r) => setTimeout(r, 300))
}

function outputPathForRoute(routePath) {
  if (routePath === '/') return path.join(DIST, 'index.html')
  const dir = path.join(DIST, routePath.replace(/^\//, ''))
  return path.join(dir, 'index.html')
}

async function main() {
  const routeErrors = validatePrerenderRoutes()
  if (routeErrors.length > 0) {
    console.error('\nPrerender route validation failed:\n')
    for (const error of routeErrors) {
      console.error(`  - ${error}`)
    }
    process.exit(1)
  }

  printPrerenderReport()

  const preview = await startPreview()

  try {
    const browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    })

    for (const route of PRERENDER_ROUTES) {
      process.stdout.write(`Prerendering ${route.path} [${route.locale}]...\n`)
      const page = await browser.newPage()

      // Block external network requests during prerender so third-party
      // scripts (analytics, fonts, widgets) never cause a CI timeout.
      await page.route('**/*', (r) => {
        const url = r.request().url()
        if (url.startsWith(PREVIEW_URL)) return r.continue()
        return r.abort()
      })

      await waitForRoute(page, route)
      const html = await page.content()
      await page.close()
      const outFile = outputPathForRoute(route.path)
      await mkdir(path.dirname(outFile), { recursive: true })
      await writeFile(outFile, html, 'utf8')
      process.stdout.write(`  → ${path.relative(ROOT, outFile)}\n`)
    }

    await browser.close()

    const htmlErrors = validatePrerenderedHtmlSamples(DIST)
    if (htmlErrors.length > 0) {
      console.error('\nPrerender HTML validation failed:\n')
      for (const error of htmlErrors) {
        console.error(`  - ${error}`)
      }
      process.exit(1)
    }

    console.log('\nPrerender HTML validation passed for sample English pages.')
    process.stdout.write(`Prerendered ${PRERENDER_ROUTES.length} routes.\n`)
    printPrerenderReport()
  } finally {
    preview.kill('SIGTERM')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
