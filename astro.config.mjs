import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    devToolbar: { enabled: false },
    site: 'https://simulacro.tech',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'pt', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
