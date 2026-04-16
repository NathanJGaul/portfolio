import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), cloudflare()],
	server: {
		allowedHosts: ['laptop.alewife-deneb.ts.net']
	}
});
