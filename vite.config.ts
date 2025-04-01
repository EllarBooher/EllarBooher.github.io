import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";
import checker from "vite-plugin-checker";
import basicSSL from "@vitejs/plugin-basic-ssl";

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			react(),
			eslint({
				eslintOptions: {
					cacheLocation: "./node_modules/@eslint/.eslintcache",
				},
			}),
			checker({
				typescript: {
					tsconfigPath: "./tsconfig.app.json",
				},
			}),
			...(mode === "development" ? [basicSSL()] : []),
		],
	};
});
