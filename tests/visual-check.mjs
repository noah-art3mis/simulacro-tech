import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const origin = process.env.SITE_URL || 'http://127.0.0.1:4175';
const output = 'docs/screenshots';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const issues = [];
const routes = ['/', '/projects', '/about', '/pt', '/pt/projects', '/pt/about', '/es', '/es/projects', '/es/about'];
try {
  for (const width of [1440, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, colorScheme: 'dark', reducedMotion: 'reduce' });
    page.on('pageerror', error => issues.push({ width, error: error.message }));
    for (const route of routes) {
      const response = await page.goto(origin + route);
      await page.evaluate(() => document.fonts.ready);
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src),
        headings: document.querySelectorAll('h1').length,
        clipped: [...document.querySelectorAll('main *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => el.tagName + '.' + el.className).slice(0, 5),
      }));
      if (response.status() !== 200 || result.overflow || result.brokenImages.length || result.headings !== 1 || result.clipped.length) issues.push({ width, route, status: response.status(), ...result });
      if (width !== 320 && ['/', '/projects', '/about', '/pt', '/es'].includes(route)) {
        const name = route === '/' ? 'home' : route.slice(1).replaceAll('/', '-');
        await page.screenshot({ path: output + '/' + name + '-' + width + '-dark.png', fullPage: true });
        if (route === '/') await page.screenshot({ path: output + '/home-' + width + '-viewport.png' });
      }
    }
    if (width === 390) {
      await page.goto(origin);
      await page.locator('.mobile-navigation summary').click();
      await page.screenshot({ path: output + '/mobile-menu.png' });
      await page.locator('.mobile-navigation a[href="/projects"]').click();
      await page.waitForURL('**/projects');
    }
    if (width === 1440) {
      await page.emulateMedia({ colorScheme: 'light' });
      await page.goto(origin);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: output + '/home-light.png', fullPage: true });
    }
    await page.close();
  }
  console.log(JSON.stringify({ viewports: [1440, 390, 320], routes: routes.length, issues }, null, 2));
  if (issues.length) process.exitCode = 1;
} finally { await browser.close(); }
