import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		outDir: 'build'
	},
	base: '/Imom111.github.io/'
};

export default config;
