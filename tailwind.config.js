/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans'],
                cursive: ['Slackey', 'cursive'],
            },
            colors: {
                'midnight-black': '#0c0c0d',
                'slate-gray': '#626161',
                'steel-gray': '#85878f',
                'deep-navy': '#243846',
                'ocean-blue': '#2b566b',
                'cool-teal': '#3e6d81',
                'golden-rod': '#d3ab22',
            },
        },
    },
    plugins: [],
};
