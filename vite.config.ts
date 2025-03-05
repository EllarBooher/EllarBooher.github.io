import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import { TransformResult } from "rollup";
import { packShaders } from "./src/shaders/Shaders";
import eslint from "@nabla/vite-plugin-eslint";

// Allow direct embedding of wgsl shaders, with a pre-processing step
const wgslPlugin = () => ({
	name: "wgsl-plugin",
	transform: (src: string, id: string) => {
		if (!id.endsWith(".inc.wgsl") && id.endsWith(".wgsl")) {
			return {
				code: `
          export default \`${packShaders(id, src)}\`;
        `,
				map: { mappings: "" },
			} satisfies TransformResult;
		}
	},
});

const wgslIncludeWatcher = () => {
	return {
		name: "custom-watcher",
		configureServer: (server: ViteDevServer) => {
			const SUFFIX = ".inc.wgsl";

			server.watcher.add("**/*" + SUFFIX);
			function onWatchChange(_: string) {
				server.hot.send({ type: "full-reload" });
			}

			const filterPath = (path: string) => {
				if (!path.endsWith(SUFFIX)) {
					return;
				}
				onWatchChange(path);
			};

			server.watcher.on("add", filterPath);
			server.watcher.on("unlink", filterPath);
			server.watcher.on("change", filterPath);
		},
	};
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		wgslPlugin(),
		react(),
		eslint({
			eslintOptions: {
				cacheLocation: "./node_modules/@eslint/.eslintcache",
			},
		}),
		wgslIncludeWatcher(),
	],
});
