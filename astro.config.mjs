import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

export default defineConfig({
	adapter: cloudflare(),
	output: 'server',
	session: false,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pt'],
		routing: 'manual',
	},
});
