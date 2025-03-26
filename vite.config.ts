import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { wgslPlugin } from "./src/shaders/WGSLPlugin";
import eslint from "@nabla/vite-plugin-eslint";
import checker from "vite-plugin-checker";
import basicSSL from "@vitejs/plugin-basic-ssl";
import sampleReadme from "./src/webgpu/ReadmePlugin";

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			sampleReadme(),
			wgslPlugin(),
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
