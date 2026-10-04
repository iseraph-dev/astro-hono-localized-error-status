import { bindings, defineConfig } from 'cf/config';

export default defineConfig({
	worker: {
		name: 'repro-localized-error-status',
		compatibilityDate: '2026-01-28',
		entrypoint: './src/worker.ts',
		assets: { runWorkerFirst: true },
		env: {
			ASSETS: bindings.assets(),
		},
	},
});
