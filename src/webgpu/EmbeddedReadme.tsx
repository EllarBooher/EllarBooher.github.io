import { memo, ReactElement, ReactNode, useEffect, useState } from "react";
import "./EmbeddedReadme.css";
import "prism-themes/themes/prism-one-dark.min.css";

import parseToHTML from "html-react-parser";
import { HashLink } from "react-router-hash-link";

const repoRoot =
	"https://github.com/EllarBooher/EllarBooher.github.io/tree/main/src/webgpu";

/**
 * Formatting of the markdown READMEs in a style specific to this project.
 * This means handling a subset of embedded html, formatting citations that
 * appear in a certain style, etc.
 *
 * TODO: Investigate other options for markup that work well for embedding on
 * the page but also viewing in the repo
 */
export default memo(function EmbeddedReadme({
	projectFolder,
}: {
	projectFolder?: string;
}) {
	const [readmeText, setReadmeText] = useState<string>();

	useEffect(() => {
		if (projectFolder === undefined) {
			setReadmeText(undefined);
			return;
		}
		import(`./${projectFolder}/README.md`)
			.then((value) => {
				const markdownModule = value as typeof import("*.md");
				if (typeof markdownModule.default !== "string") {
					throw new Error(
						`Invalid readme markdown import, path is ${projectFolder}`
					);
				}
				setReadmeText(markdownModule.default);
			})
			.catch((err) => {
				if (err instanceof Error) {
					console.error(err);
				}
			});
	}, [projectFolder, setReadmeText]);

	if (readmeText === undefined) {
		return undefined;
	}

	return (
		<div className="readme-body">
			{parseToHTML(readmeText, {
				transform(reactNode, _domNode, _index) {
					const element = reactNode as ReactElement;
					if (element.props === undefined || element.type !== "a") {
						return <>{reactNode}</>;
					}

					const { href, children } = element.props as {
						href: string;
						children?: ReactNode[];
						id?: string;
					};

					// Anchor Link
					if (href.startsWith("#") === true) {
						return <HashLink to={href}>{children}</HashLink>;
					}

					const projectRoot = `${repoRoot}/${projectFolder}/`;

					let hrefParsed: undefined | string = undefined;
					if (URL.canParse(href)) {
						hrefParsed = href;
					} else if (URL.canParse(href, projectRoot)) {
						hrefParsed = URL.parse(href, projectRoot)!.href;
					}

					return (
						<a target="_blank" rel="noopener noreferrer" href={hrefParsed}>
							{children}
						</a>
					);
				},
			})}
		</div>
	);
});
