import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { base } from './svelte.config';

const config: UserConfig = {
	base: base + '/',
	plugins: [sveltekit()]
};

export default config;
