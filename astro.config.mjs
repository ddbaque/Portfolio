// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ddbaque.dev',
	integrations: [mdx(), sitemap()],
	i18n: {
		locales: ['es', 'en', 'ca'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
