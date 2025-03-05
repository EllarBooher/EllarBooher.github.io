import fs from "fs";
import path from "path";

const shaderRoot = "src/shaders/";

// TODO: Load includes upon every shader compile, but cache them and check if the version on disk is newer. This is needed for hot reloading
const includeFilenames = [
	"sky-sea/types.inc.wgsl",
	"sky-sea/atmosphere_common.inc.wgsl",
	"sky-sea/atmosphere_raymarch.inc.wgsl",
	"sky-sea/tonemap.inc.wgsl",
	"sky-sea/pbr.inc.wgsl",
	"sky-sea/raycast.inc.wgsl",
];

interface ShaderInclude {
	code: string;
	flags: string[];
}

const FLAGS_PREFIX = "#flags ";
function gatherFlags(filename: string, source: string): string[] {
	let flags: string[] = [];
	let foundPrefix = false;
	source.split("\n").forEach((line, index) => {
		if (line.startsWith(FLAGS_PREFIX)) {
			if (foundPrefix) {
				console.error(`Duplicate ${FLAGS_PREFIX.trim()} prefix found:
                    Original line:
                    (${filename}:${index})
                    ${line}`);
			} else {
				foundPrefix = true;
				flags = line
					.trim()
					.substring(FLAGS_PREFIX.length)
					.split(" ")
					.map((value) => {
						return value.trim();
					})
					.filter((value) => {
						return value.length > 0;
					});
			}
		}
	});
	return flags;
}

const includeMappings = new Map<string, ShaderInclude>();
includeFilenames.forEach((filename) => {
	const path = fs.realpathSync(shaderRoot + filename);
	const code = fs.readFileSync(path).toString();
	includeMappings.set(path, {
		code: code,
		flags: gatherFlags(filename, code),
	});
});

/*
A conditional block looks like the following:

#ifdef [FLAG]

#else

#endif

FLAG is a string, taken to be all remaining characters excluding the single space after IF
FLAG is not any sort of expression like "TEXTURE_MODE == 2", it should look more like "ENABLE_TEXTURE_MODE_TWO"
FLAG is a boolean flag set outside of the include file, enabled/disabled before parsing the include

If FLAG is enabled, only the lines between IFDEF and ELSE are kept, the others are discarded.
If FLAG is not enabled, only the lines between ELSE and ENDIF are kept, the others are discard.

IFDEF and ENDIF may not be omitted.
ELSE may be omitted.

At this point, nesting is not supported.
*/

function replaceConditionalBlocks(
	filename: string,
	source: ShaderInclude,
	enabledConditions: string[] = []
) {
	const IF_PREFIX = "#ifdef ";
	const ELSE_PREFIX = "#else";
	const ENDIF_PREFIX = "#endif";

	const enabledFlags = new Set<string>(enabledConditions);

	console.log(
		`Including '${filename}' with ${
			enabledConditions.length
		} flag(s) '${enabledConditions.join(",")}'`
	);
	console.log(`Possible flag(s) are '${source.flags.join(",")}'`);
	const invalidFlags = enabledConditions.filter((flag) => {
		return !source.flags.includes(flag);
	});
	if (invalidFlags.length > 0) {
		console.error(
			`Found invalid flag(s) '${invalidFlags.join(
				","
			)}', these will not be used`
		);
	}

	enum ConditionalState {
		Outside,
		IF,
		ELSE,
	}
	enum LinePrefix {
		None,
		IF,
		ELSE,
		ENDIF,
	}
	const getPrefix = (line: string) => {
		let prefix = LinePrefix.None;
		let prefixLength = 0;
		if (line.startsWith(IF_PREFIX)) {
			prefix = LinePrefix.IF;
			prefixLength = IF_PREFIX.length;
		} else if (line.startsWith(ELSE_PREFIX)) {
			prefix = LinePrefix.ELSE;
			prefixLength = ELSE_PREFIX.length;
		} else if (line.startsWith(ENDIF_PREFIX)) {
			prefix = LinePrefix.ENDIF;
			prefixLength = ENDIF_PREFIX.length;
		}

		return {
			prefix: prefix,
			remainder: line.substring(prefixLength).trim(),
		};
	};

	let step = ConditionalState.Outside;
	let currentFlag = "";
	let keepLines = true;

	const sourceOut = source.code
		.split("\n")
		.filter((line) => {
			return !line.startsWith(FLAGS_PREFIX);
		})
		.filter((line, index) => {
			const { prefix, remainder } = getPrefix(line);

			if (step == ConditionalState.Outside) {
				if (prefix == LinePrefix.IF) {
					if (source.flags.includes(remainder)) {
						step = ConditionalState.IF;
						currentFlag = remainder;
						keepLines = enabledFlags.has(currentFlag);
					} else {
						console.error(
							`Invalid conditional syntax: invalid flag.
                        Original line:
                        (${filename}:${index})
                        ${line}`
						);
					}
				} else if (prefix != LinePrefix.None) {
					console.error(
						`Invalid conditional syntax: invalid conditional statement outside of conditional block.
                    Original line:
                    (${filename}:${index})
                    ${line}`
					);
				}
			} else if (step == ConditionalState.IF) {
				if (prefix == LinePrefix.ELSE) {
					step = ConditionalState.ELSE;
					keepLines = !enabledFlags.has(currentFlag);
				} else if (prefix == LinePrefix.ENDIF) {
					step = ConditionalState.Outside;
					currentFlag = "";
					keepLines = true;
				} else if (prefix != LinePrefix.None) {
					console.error(
						`(${filename}:${index}) Invalid conditional syntax in IF branch.
                    Original line:
                    (${filename}:${index})
                    ${line}`
					);
				}
			} else if (step == ConditionalState.ELSE) {
				if (prefix == LinePrefix.ENDIF) {
					step = ConditionalState.Outside;
					currentFlag = "";
					keepLines = true;
				} else if (prefix != LinePrefix.None) {
					console.error(
						`(${filename}:${index}) Invalid conditional syntax in ELSE branch.
                    Original line:
                    (${filename}:${index})
                    ${line}`
					);
				}
			}

			return keepLines && prefix == LinePrefix.None;
		})
		.join("\n");

	if (step != ConditionalState.Outside) {
		console.error(
			`While processing shader include conditionals, encountered end of lines without exiting a conditional.`
		);
	}

	return sourceOut;
}

// This is utilized as a plugin in vite.config.ts, to preprocess each shader as a part of typescript compilation
export function packShaders(id: string, source: string): string {
	const INCLUDE_PREFIX = "#include ";

	console.log(`Preprocessing shader ${id}`);

	const includeWorkingPrefix = path.parse(id).dir;

	let logIncludes = false;

	const sourceOut = source
		.split("\n")
		.map((line) => {
			if (line.startsWith(INCLUDE_PREFIX)) {
				const fragments = line
					.trim()
					.substring(INCLUDE_PREFIX.length)
					.split(" ")
					.map((value) => {
						return value.trim();
					})
					.filter((value) => {
						return value.length > 0;
					});
				if (fragments.length == 0) {
					return "";
				}

				const includeFilename = fragments.shift()!;
				const resolvedPath = path.resolve(
					includeWorkingPrefix,
					includeFilename
				);

				const includeSource = includeMappings.get(resolvedPath);
				if (includeSource === undefined) {
					console.error(
						`Unrecognized WGSL include: ${resolvedPath} \n     Resolved as: ${resolvedPath}`
					);
					logIncludes = true;
					return "";
				}

				return replaceConditionalBlocks(
					includeFilename,
					includeSource,
					fragments
				);
			}

			return line;
		})
		.join("\n");

	if (logIncludes) {
		console.error(`Absolute paths of known include(s) are:`);
		includeMappings.forEach((value, key) => {
			console.error(`    ${key}`);
		});
	}

	return sourceOut;
}
