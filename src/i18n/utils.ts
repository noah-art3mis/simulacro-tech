import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

const localeCodes = Object.keys(languages) as Lang[];

export function getLangFromUrl(url: URL): Lang {
	const [, segment] = url.pathname.split('/');
	if ((localeCodes as string[]).includes(segment)) return segment as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function stripLocale(pathname: string): string {
	const [, segment, ...rest] = pathname.split('/');
	if ((localeCodes as string[]).includes(segment)) {
		return '/' + rest.join('/');
	}
	return pathname;
}

export function getLocalizedPath(path: string, lang: Lang): string {
	const clean = stripLocale(path) || '/';
	if (lang === defaultLang) return clean;
	const trimmed = clean === '/' ? '' : clean;
	return `/${lang}${trimmed}` || `/${lang}/`;
}

export type AlternateLink = { hreflang: string; href: string };

export function getAlternates(currentPath: string, siteOrigin: string): AlternateLink[] {
	const basePath = stripLocale(currentPath) || '/';
	const alternates: AlternateLink[] = localeCodes.map((lang) => ({
		hreflang: lang,
		href: siteOrigin + getLocalizedPath(basePath, lang),
	}));
	alternates.push({
		hreflang: 'x-default',
		href: siteOrigin + getLocalizedPath(basePath, defaultLang),
	});
	return alternates;
}
