/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic Colors (The "Shapeshifter" System)
                primary: 'rgba(var(--color-primary) / <alpha-value>)',
                secondary: 'rgba(var(--color-secondary) / <alpha-value>)',
                bg: 'rgba(var(--color-bg) / <alpha-value>)',
                surface: 'rgba(var(--color-surface) / <alpha-value>)',
                accent: 'rgba(var(--color-accent) / <alpha-value>)',

                // Keep direct access if needed for specific overrides
                dark: '#050505',
                light: '#f0f0f0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
