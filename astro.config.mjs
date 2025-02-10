import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  site: 'https://ddbaque.github.io/Portfolio',
  base: 'Portfolio',
})
