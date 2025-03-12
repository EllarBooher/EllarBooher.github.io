import { PluginOption, TransformResult } from "vite";

/**
 * A Vite plugin that adds a transform step to files with the specified
 * extensions, transforming a static asset (such as a text file) into an ESM
 * module whose default export is the file as a string.
 * @param extensions - The file extensions to include in this transformation.
 * @returns The plugin to be included in `defineConfig`
 */
export default function staticAssetPlugin({
	extensions,
}: {
	extensions: string[];
}): PluginOption {
	return {
		name: "static-asset",
		transform: (src: string, id: string): TransformResult | undefined => {
			if (extensions.some((value) => id.endsWith(value))) {
				return {
					code: `
		  export default \`${src}\`;
		`,
					map: { mappings: "" },
				} satisfies TransformResult;
			}
		},
	};
}
