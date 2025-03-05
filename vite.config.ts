import { defineConfig } from "vite";
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

// https://vite.dev/config/
export default defineConfig({
	plugins: [wgslPlugin(), react(), eslint()],
});
