import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { wgslPlugin } from "./src/shaders/WGSLPlugin";
import eslint from "@nabla/vite-plugin-eslint";

export default defineConfig({
	plugins: [
		wgslPlugin(),
		react(),
		eslint({
			eslintOptions: {
				cacheLocation: "./node_modules/@eslint/.eslintcache",
			},
		}),
	],
});
