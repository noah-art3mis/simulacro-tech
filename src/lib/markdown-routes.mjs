import { mkdir, readFile, writeFile } from 'node:fs/promises';
import TurndownService from 'turndown';

/** The Markdown route of a page: /about/ -> /about.md, / -> /index.md. */
export function markdownPath(pathname) {
	return `${pathname.replace(/\/$/, '') || '/index'}.md`;
}

const turndown = new TurndownService({
	headingStyle: 'atx',
	bulletListMarker: '-',
	codeBlockStyle: 'fenced',
});
turndown.remove(['svg', 'canvas', 'script', 'style', 'form']);
// Decorative art, and the contact form's status messages.
turndown.remove((node) => node.getAttribute('aria-hidden') === 'true' || ['status', 'alert'].includes(node.getAttribute('role')));
// Project cards are links wrapping a heading and text. Markdown links can't
// hold blocks, so the link moves onto the heading and the text follows it.
turndown.addRule('blockLink', {
	filter: (node) => node.nodeName === 'A' && node.querySelector('h1, h2, h3, h4, h5, h6, p, div') !== null,
	replacement: (content, node) => {
		const href = node.getAttribute('href');
		const [first, ...rest] = content.trim().split(/\n+/);
		const [, hashes, title] = first.match(/^(#{1,6} )?(.*)$/);
		return `\n\n${hashes ?? ''}[${title}](${href})\n\n${rest.join('\n\n')}\n\n`;
	},
});

function toMarkdown(html, pathnames) {
	const main = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
	const markdown = turndown
		.turndown(main)
		// Removed icons leave whitespace-only lines behind.
		.replace(/\n\s*\n\s*\n/g, '\n\n')
		// Keep readers on the Markdown routes, since GitHub Pages can't negotiate.
		.replace(/\]\((\/[^)#\s]*)(#[^)\s]*)?\)/g, (link, path) =>
			pathnames.has(path.replace(/\/$/, '')) ? `](${markdownPath(path)})` : link,
		);
	return `${markdown}\n`;
}

/** Writes a Markdown copy of every built page, generated from its HTML. */
export function markdownRoutes() {
	return {
		name: 'markdown-routes',
		hooks: {
			'astro:build:done': async ({ dir, pages }) => {
				const pathnames = new Set(pages.map(({ pathname }) => `/${pathname.replace(/\/$/, '')}`));
				for (const { pathname } of pages) {
					const html = await readFile(new URL(`${pathname}index.html`, dir), 'utf8');
					const file = new URL(`.${markdownPath(`/${pathname}`)}`, dir);
					await mkdir(new URL('.', file), { recursive: true });
					await writeFile(file, toMarkdown(html, pathnames));
				}
			},
		},
	};
}
