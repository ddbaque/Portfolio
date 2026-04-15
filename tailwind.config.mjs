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
          black: '#08090b',
          gray: '#0f1012',
          darkGray: '#181a1e',
          surface: '#1e2024',
          lightGray: '#9ca3b0',
          lightPink: '#c0b0b8',
          lightViolet: '#b0a6ba',
          violet: '#4A3B54',
          muted: '#6b7280',
        },
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.06)',
        medium: 'rgba(255,255,255,0.10)',
      },
      backgroundColor: {
        'glass-1': 'rgba(255,255,255,0.02)',
        'glass-2': 'rgba(255,255,255,0.04)',
        'glass-3': 'rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}
