import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit(), svg({ includePaths: ['./src/lib/icons/'] })]
};

export default config;
