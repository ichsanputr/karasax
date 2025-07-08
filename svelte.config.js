import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // enables SPA routing support (optional)
			precompress: false
		}),
		paths: {
			base: '', // or set to `/your-subfolder` if needed
		},
		prerender: {
			entries: ['*'] // this replaces `default: true`
		}
	}
};

export default config;
