import { memo, useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Children } from "react";
import "./EmbeddedReadme.css";

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
				components={{
					a(props) {
						// eslint-disable-next-line react/prop-types
						const { href, children, ...rest } = props;
						// eslint-disable-next-line react/prop-types
						if (href?.startsWith("#") === true) {
							return <>{children}</>;
						}
						return (
							<a href={href} {...rest}>
								{children}
							</a>
						);
					},
					p(props) {
						// TODO: How to add prop type validation to this?
						// eslint-disable-next-line react/prop-types
						const { children, ...rest } = props;

						const arrayChildren = Children.toArray(children);
						if (arrayChildren.length < 3) {
							return <p {...rest}>{children}</p>;
						}

						/*
						 * Detect the shape "<a ...>","...","</a>", which is the inline HTML
						 * safely escaped by Markdown. This is only used as an anchor for
						 * citations.
						 */
						const first =
							typeof arrayChildren[0] === "string" &&
							arrayChildren[0].startsWith("<a");
						const second = typeof arrayChildren[1] === "string";
						const third =
							typeof arrayChildren[2] === "string" &&
							arrayChildren[2] === "</a>";

						if (!first || !second || !third) {
							return <p {...rest}>{children}</p>;
						}

						return (
							<div className="citation">
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
