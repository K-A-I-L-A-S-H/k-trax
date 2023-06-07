/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: 'jsdom',
		include: ['**/*.spec.tsx'],
		setupFiles: ['./tests/setup.ts'],
		globals: true,
	},
});