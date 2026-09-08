import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const origin = process.env.SITE_URL || 'http://127.0.0.1:4175';
let browser;
before(async () => {
  browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
});
after(async () => { await browser?.close(); });

test('featured project links take visitors to the named project', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(origin);
    const links = await page.locator('main a[href*="/projects#"]').evaluateAll(items => items.map(a => a.href));
    assert(links.length > 0, 'Home should link to its featured work');
    for (const href of links) {
      await page.goto(href);
      assert.equal(await page.locator(new URL(href).hash).count(), 1, `${href} needs a matching project section`);
    }
  } finally { await page.close(); }
});

test('keyboard visitors can skip the navigation', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(origin);
    await page.keyboard.press('Tab');
    const focus = page.locator(':focus');
    assert.equal(await focus.getAttribute('href'), '#main-content');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');
  } finally { await page.close(); }
});

test('language switching keeps the project route', async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(`${origin}/projects`);
    await page.locator('a[data-lang="pt"]:visible').click();
    await page.waitForURL(/\/pt\/projects\/?$/);
    assert.equal(await page.locator('html').getAttribute('lang'), 'pt');
    await page.locator('a[data-lang="es"]:visible').click();
    await page.waitForURL(/\/es\/projects\/?$/);
    assert.equal(await page.locator('html').getAttribute('lang'), 'es');
  } finally { await page.close(); }
});

test('language suggestion is a named landmark and remembers dismissal', async () => {
  const page = await browser.newPage({ locale: 'en-US' });
  try {
    await page.goto(`${origin}/pt/projects`);
    await page.locator('#lang-banner').waitFor({ state: 'visible' });
    const suggestion = await page.locator('#lang-banner-link').textContent();
    assert.equal(await page.getByRole('complementary', { name: suggestion }).count(), 1, 'Expose the suggestion through landmark navigation');
    assert.equal(new URL(await page.locator('#lang-banner-link').getAttribute('href'), origin).pathname.replace(/\/$/, ''), '/projects');
    await page.locator('#lang-banner-close').click();
    assert.equal(await page.locator('#lang-banner').isHidden(), true);
    await page.reload();
    assert.equal(await page.locator('#lang-banner').isHidden(), true);
  } finally { await page.close(); }
});

test('contact form exposes pending state, success, reset, and a server error', async () => {
  const page = await browser.newPage();
  let release;
  let requested;
  const requestStarted = new Promise(resolve => { requested = resolve; });
  const responseReady = new Promise(resolve => { release = resolve; });
  await page.route('https://formspree.io/**', async route => {
    requested();
    await responseReady;
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });
  try {
    await page.goto(`${origin}/#contact`);
    await page.locator('#name').fill('Local preview test');
    await page.locator('#email').fill('preview@example.test');
    await page.locator('#message').fill('This request is intercepted locally and never sent.');
    await page.locator('button[type="submit"]').click();
    await requestStarted;
    assert.equal(await page.locator('button[type="submit"]').isDisabled(), true, 'Prevent repeat submission while waiting');
    release();
    await page.locator('#success').waitFor({ state: 'visible' });
    await page.locator('#send-another').click();
    assert.equal(await page.locator('#name').inputValue(), '');
    await page.unroute('https://formspree.io/**');
    await page.route('https://formspree.io/**', route => route.fulfill({ status: 422, contentType: 'application/json', body: '{"error":"Please try again."}' }));
    await page.locator('#name').fill('Local preview test');
    await page.locator('#email').fill('preview@example.test');
    await page.locator('#message').fill('Another intercepted local test.');
    await page.locator('button[type="submit"]').click();
    await page.locator('#error').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#error').textContent(), 'Please try again.');
    assert.equal(await page.locator('button[type="submit"]').isEnabled(), true);
  } finally { release(); await page.close(); }
});
