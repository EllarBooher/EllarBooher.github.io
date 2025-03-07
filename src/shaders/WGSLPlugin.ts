import { PluginOption, TransformResult, ViteDevServer } from "vite";
import { packShaders } from "./Shaders";

const modulesByInclude = new Map<string, Set<string>>();

// Allow import of wgsl shaders, with pre-processing
export const wgslPlugin: () => PluginOption = () => ({
	name: "wgsl-plugin",
	transform: (src: string, id: string) => {
		if (!id.endsWith(".inc.wgsl") && id.endsWith(".wgsl")) {
			const packed = packShaders(id, src);
			packed.includes.forEach((includeFullPath) => {
				if (!modulesByInclude.has(includeFullPath)) {
					modulesByInclude.set(includeFullPath, new Set());
				}

				modulesByInclude.get(includeFullPath)?.add(id);
			});
			return {
				code: `
          export default \`${packed.source}\`;
        `,
				map: { mappings: "" },
			} satisfies TransformResult;
		}
	},
	configureServer: (server: ViteDevServer) => {
		/*
		 * Our .wgsl shader preprocessing directly loads .inc.wgsl, side-stepping import
		 * detection for hot reloading and resulting in changes to .inc.wgsl not causing
		 * reloads. To fix this, we attach a custom watcher to the dev server that
		 * causes a reload any time a changed file is a .inc.wgsl.
		 */

		const SUFFIX = ".inc.wgsl";

		server.watcher.add("**/*" + SUFFIX);
		function onWatchChange(_: string) {
			server.hot.send({ type: "full-reload" });
		}

		const filterPath = (path: string) => {
			if (!path.endsWith(SUFFIX)) {
				return;
			}
			modulesByInclude.get(path)?.forEach((id) => {
				const module = server.moduleGraph.getModuleById(id);
				if (module === undefined) {
					return;
				}
				server.reloadModule(module).catch((e) => {
					console.error(
						`Error while hot reloading .wgsl module ${id}: ${
							e instanceof Error ? e.message : "Unknown"
						}`
					);
				});
			});
			onWatchChange(path);
		};

		server.watcher.on("add", filterPath);
		server.watcher.on("unlink", filterPath);
		server.watcher.on("change", filterPath);
	},
});
