import { spawn } from 'node:child_process'
import http from 'node:http'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import { PRERENDER_ROUTES } from './prerender-routes.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PREVIEW_HOST = '127.0.0.1'
const PREVIEW_PORT = 4173
const PREVIEW_URL = `http://${PREVIEW_HOST}:${PREVIEW_PORT}`

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

async function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      await httpGet(url)
      return
    } catch {
      await new Promise((r) => setTimeout(r, 400))
    }
  }
  throw new Error(`Preview server did not respond at ${url} within ${timeoutMs}ms`)
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.platform === 'win32' ? 'npx.cmd' : 'npx',
      [
        'vite',
        'preview',
        '--port',
        String(PREVIEW_PORT),
        '--strictPort',
        '--host',
        PREVIEW_HOST,
      ],
      {
        cwd: ROOT,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: process.env,
      },
    )

    let settled = false
    const finish = (err, proc) => {
      if (settled) return
      settled = true
      clearTimeout(startupTimer)
      if (err) reject(err)
      else resolve(proc)
    }

    const startupTimer = setTimeout(() => {
      finish(new Error('Preview process did not log ready within 90s'))
    }, 90000)

    const onOutput = (chunk) => {
      const text = chunk.toString()
      process.stdout.write(text)
      if (/Local:\s+http/i.test(text) || new RegExp(`${PREVIEW_HOST}:${PREVIEW_PORT}`).test(text)) {
        finish(null, child)
      }
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
    { timeout: 45000 },
  )

  if (route.path !== '/') {
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
      { timeout: 45000 },
    )
  } else {
    await page.waitForSelector('h1', { timeout: 45000 })
  }

  await page.waitForFunction(
    () => document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    undefined,
    { timeout: 15000 },
  )

  // Allow react-helmet-async to flush head tags.
  await new Promise((r) => setTimeout(r, 300))
}

function outputPathForRoute(routePath) {
  if (routePath === '/') return path.join(DIST, 'index.html')
  const dir = path.join(DIST, routePath.replace(/^\//, ''))
  return path.join(dir, 'index.html')
}

async function main() {
  const preview = await startPreview()

  try {
    await waitForServer(`${PREVIEW_URL}/`)
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
