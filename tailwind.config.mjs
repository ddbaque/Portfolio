/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        custom: {
          pink: '#f72585',
          purple: '#7209b7',
          indigo: '#3a0ca3',
          blue: '#4361ee',
          teal: '#4cc9f0',
          black: '#171214',
          gray: '#211c26',
          darkGray: '#382930',
          lightGray: '#b9c9c8',
          lightPink: '#ba9ca8',
          lightViolet: '#ad9cba',
          violet: '#4A3B54',
        },
      },
    },
  },
  plugins: [],
}
