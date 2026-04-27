import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://simulacro.tech',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'pt', 'es'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
