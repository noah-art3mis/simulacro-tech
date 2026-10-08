// Run against an Astro preview, using an existing Playwright installation.
// PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs PREVIEW_URL=http://localhost:4383/ node tests/logo-first-paint.mjs
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:390,height:844}});
await page.route('**/*',route=>route.request().resourceType()==='stylesheet'?route.abort():route.continue());
await page.goto(process.env.PREVIEW_URL||'http://localhost:4321/');
const sizes=await page.locator('nav img, footer img').evaluateAll(imgs=>imgs.map(img=>({naturalWidth:img.naturalWidth,width:img.width,height:img.height})));
console.log(sizes);await browser.close();assert.equal(sizes.length,2,'Check both navbar and footer logos');assert(sizes.every(img=>img.width<=64 && img.height<=64),'Brand logos must stay icon-sized when CSS is unavailable');
