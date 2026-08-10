/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // Minimal black and white theme
                black: '#000000',
                white: '#ffffff',
                gray: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
            },
            fontFamily: {
                // Keep in sync with the body font-family in src/styles/global.css —
                // `font-sans` must mean the site's actual sans, not a generic stack.
                sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
