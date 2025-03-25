import { memo, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Children } from "react";
import "./EmbeddedReadme.css";
import { HashLink } from "react-router-hash-link";

// Prism for builtin support of WGSL
import rehypePrismPlus from "rehype-prism-plus";
import "prism-themes/themes/prism-one-dark.min.css";

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
			<Markdown
				rehypePlugins={[rehypePrismPlus]}
				components={{
					a(props) {
						// eslint-disable-next-line react/prop-types
						const { href, children, ...rest } = props;
						if (href === undefined) {
							return <a {...rest}>{children}</a>;
						}

						// Anchor Link
						// eslint-disable-next-line react/prop-types
						if (href.startsWith("#") === true) {
							return (
								<HashLink to={href} {...rest}>
									{children}
								</HashLink>
							);
						}

						// External Link
						if (URL.canParse(href)) {
							return (
								<a href={href} {...rest}>
									{children}
								</a>
							);
						}

						// Link to source (hosted on github)
						const projectRoot = `${repoRoot}/${projectFolder}/`;
						if (URL.canParse(href, projectRoot)) {
							return (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={URL.parse(href, projectRoot)?.href}
									{...rest}
								>
									{children}
								</a>
							);
						}

						return <>{children}</>;
					},
					p(props) {
						// TODO: How to add prop type validation to this?
						// eslint-disable-next-line react/prop-types
						const { children, ...rest } = props;

						const arrayChildren = Children.toArray(children);
						if (
							arrayChildren.length < 3 ||
							arrayChildren.slice(0, 3).some((value) => {
								return typeof value !== "string";
							})
						) {
							return <p {...rest}>{children}</p>;
						}

						/**
						 * must match:
						 *  - <a> opening tag while capturing id
						 *  - numbered citation format, e.g. [0] or [15]
						 *  - </a> closing tag.
						 */
						const patterns = [/<a.*id="(.*)".*>/g, /\[([0-9]*)\]/g, /<\/a>/g];

						const parsed = arrayChildren.slice(0, 3).map((value, index) => {
							return patterns[index].exec(value as string);
						});

						if (parsed.some((value) => value === null)) {
							return <p {...rest}>{children}</p>;
						}

						const id = parsed[0]![1];
						// Citation anchor + text
						return (
							<div id={id} className="citation">
								{arrayChildren[1]}
								<p {...rest}>{arrayChildren.slice(3)}</p>
							</div>
						);
					},
				}}
			>
				{readmeText}
			</Markdown>
		</div>
	);
});
