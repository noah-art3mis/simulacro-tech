// Checks what AI readers get from the built site. Run with: npm test
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFileSync(new URL(path, dist), 'utf8');

const pages = [
	{ html: 'index.html', md: '/index.md', heading: '## What We Build' },
	{ html: 'about/index.html', md: '/about.md', heading: '# Gustavo Costa' },
	{ html: 'projects/index.html', md: '/projects.md', heading: '### LexGPT' },
	{ html: 'pt/index.html', md: '/pt.md', heading: '## O que construímos' },
	{ html: 'pt/about/index.html', md: '/pt/about.md', heading: '# Gustavo Costa' },
	{ html: 'pt/projects/index.html', md: '/pt/projects.md', heading: '### LexGPT' },
	{ html: 'es/index.html', md: '/es.md', heading: '## Lo que construimos' },
	{ html: 'es/about/index.html', md: '/es/about.md', heading: '# Gustavo Costa' },
	{ html: 'es/projects/index.html', md: '/es/projects.md', heading: '### LexGPT' },
];

for (const { html, md, heading } of pages) {
	test(`${md} is clean Markdown of the page's content`, () => {
		const markdown = read(`.${md}`);
		assert.match(markdown, /^# \S/, 'starts with the page title');
		assert.equal(markdown.match(/^# /gm).length, 1, 'has one h1');
		assert.ok(markdown.split('\n').includes(heading), `has heading ${heading}`);
		assert.doesNotMatch(markdown, /<\/?[a-z][^>]*>/i, 'has no leftover HTML');
		assert.doesNotMatch(markdown, /\[\s*\n/, 'has no link spanning several lines');
		assert.doesNotMatch(markdown, /\n\s*\n\s*\n/, 'has no runs of blank lines');
		const levels = [...markdown.matchAll(/^(#{1,6}) /gm)].map((match) => match[1].length);
		levels.forEach((level, i) => assert.ok(i === 0 || level <= levels[i - 1] + 1, 'skips no heading level'));
		const pageUrls = pages.map((page) => `/${page.html.replace(/index\.html$/, '')}`.replace(/(.)\/$/, '$1'));
		for (const [, path] of markdown.matchAll(/\]\((\/[^)#\s]*)(?:#[^)\s]*)?\)/g)) {
			assert.ok(!pageUrls.includes(path.replace(/(.)\/$/, '$1')), `links to the Markdown route instead of ${path}`);
		}
	});

	test(`${html} advertises ${md}`, () => {
		assert.ok(read(html).includes(`<link rel="alternate" type="text/markdown" href="${md}">`));
	});
}

test('Markdown leaves out the contact form, which agents cannot use', () => {
	const home = read('index.md');
	assert.ok(home.includes('[contact@simulacro.tech](mailto:contact@simulacro.tech)'));
	assert.doesNotMatch(home, /Another session|Heard\.|Name Email/);
});

test('robots.txt signals search, live AI use and training in the wildcard group', () => {
	const robots = read('robots.txt');
	assert.match(robots, /^User-agent: \*\nContent-Signal: search=yes, ai-input=yes, ai-train=yes\n/m);
	assert.doesNotMatch(robots, /^Disallow: \S/m, 'blocks nothing');
});

test('llms.txt is well-formed, reachable from every page, and its links resolve', () => {
	const llms = read('llms.txt');
	assert.match(llms, /^# Simulacro Tech\n\n> \S/);
	const links = [...llms.matchAll(/\]\((\/[^)]+)\)/g)].map((match) => match[1]);
	for (const { md } of pages) assert.ok(links.includes(md), `lists ${md}`);
	for (const link of links) assert.ok(existsSync(new URL(`.${link}`, dist)), `${link} exists`);
	for (const { html } of pages) assert.ok(read(html).includes('href="/llms.txt"'), `${html} links to it`);
});
