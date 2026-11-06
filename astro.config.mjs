import { defineConfig } from 'astro/config';
import { markdownRoutes } from './src/lib/markdown-routes.mjs';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    // Keep first paint independent of a separate stylesheet request.
    build: { inlineStylesheets: 'always' },
    devToolbar: { enabled: false },
    site: 'https://simulacro.tech',
    integrations: [markdownRoutes()],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'pt', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
