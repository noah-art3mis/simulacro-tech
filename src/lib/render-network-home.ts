import { ui, type Lang, type UIKey } from '../i18n/ui';

/** Render the one English visual owner with repository-owned translated copy. */
export function renderNetworkHome(source: string, lang: Lang): string {
  const t = (key: string) => ui[lang][key as UIKey];
  const attr = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
  let html = source
    .replaceAll('../../assets/', '/worlds/assets/')
    .replaceAll('href="../../index.html', 'href="/worlds/index.html')
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${t('meta.home.title')}</title>`)
    .replace(/<([a-z][\w-]*)([^>]*data-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
      (_match, tag, attributes, key) => `<${tag}${attributes}>${t(key)}</${tag}>`);
  for (const name of ['pause', 'resume', 'reduced', 'overview', 'network', 'interactive']) {
    html = html.replace(new RegExp(`data-${name}="[^"]*"`), `data-${name}="${attr(t(`network.${name}`))}"`);
  }
  for (const [name, english, key] of [
    ['aria-label', 'Animated three-dimensional network', 'network.canvasLabel'],
    ['aria-label', 'Network overview', 'network.overviewLabel'],
    ['aria-label', 'Language', 'network.language'],
    ['alt', "Simulacro's abstract mirrored artwork", 'network.artAlt'],
  ]) html = html.replace(`${name}="${english}"`, `${name}="${attr(t(key))}"`);
  const prefix = lang === 'en' ? '' : `/${lang}`;
  html = html.replace(/href="\/(about|projects)(\/[^\"]*)?"/g,
    (_match, route, suffix = '') => `href="${prefix}/${route}${suffix}"`);
  html = html.replace(/(<a href="[^\"]*" lang="([a-z]+)" hreflang="[a-z]+")([^>]*)>/g,
    (_match, link, locale) => `${link}${locale === lang ? ' aria-current="page"' : ''}>`);
  const alternates = (['en', 'pt', 'es'] as const).map(locale =>
    `<link rel="alternate" hreflang="${locale}" href="https://simulacro.tech/${locale === 'en' ? '' : `${locale}/`}">`).join('');
  return html.replace('</head>', `<meta name="description" content="${attr(t('meta.home.description'))}">${alternates}</head>`);
}
