import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/build';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html',
      static: {
        directory: 'build'
      }
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? base : ''
    }
  }
};

export default config;
