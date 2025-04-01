import { NavigationHeader } from "./NavigateLink";
import { NavCard } from "./NavCard";

import { useEffect, useState, memo, ReactElement } from "react";
import { Link } from "react-router";
import {
	AppLoader,
	EmbeddedReadme,
	SampleDisplayDescriptorByID,
	SampleID,
} from "webgpu-samples";
import "webgpu-samples/webgpu-samples.css";
import "./WebGPU.css";

interface WindowDimensions {
	width: number;
	height: number;
}

function getWindowDimensions(): WindowDimensions {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
}

function useWindowDimensions(): WindowDimensions {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize(): void {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return (): void => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

/**
 * A vertical sidebar that lists links to all possible samples.
 *
 * This uses relative urls that take the form '../foo', and this component
 * expects to render on a page with a url path that ends in './webgpu/bar' so
 * they resolve to './webgpu/foo'.
 */
const SampleNavSidebar = memo(function SampleNavSidebar(): JSX.Element {
	const sampleSidebarLinks: ReactElement[] = [];

	SampleDisplayDescriptorByID.forEach((value, key) => {
		sampleSidebarLinks.push(
			<li key={key}>
				<Link to={`../${key}`} key={key}>
					{value.name}
				</Link>
			</li>
		);
	});

	return (
		<nav aria-label="WebGPU Samples" className="sample-sidebar">
			<h2>Samples</h2>
			<hr />
			<ul>{sampleSidebarLinks}</ul>
		</nav>
	);
});

/**
 * The body that contains the rendering area and readme for a specific WebGPU
 * sample, with a sidebar of links to all samples.
 * @param sampleID - The identifier for fetching the sample.
 * @see {@link samplesByID} for the identifiers.
 */
export const WebGPUSamplePage = memo(function WebGPUSamplePage({
	sampleID,
}: {
	sampleID: SampleID;
}): JSX.Element {
	const { width } = useWindowDimensions();

	const app = (
		<div className="sample-app-container">
			<h1 className="visuallyhidden">WebGPU Animated Sample</h1>
			<AppLoader sampleID={sampleID} />
		</div>
	);

	const SIDEBAR_BREAKPOINT = 768;

	return (
		<>
			<NavigationHeader />
			<main className="sample-main">
				{width > SIDEBAR_BREAKPOINT ? <SampleNavSidebar /> : undefined}
				<div className="sample-body">
					{app}
					<EmbeddedReadme sampleID={sampleID} />
				</div>
			</main>
		</>
	);
});

/**
 * A directory containing a grid of navigable cards for all samples. Each card
 * has a name and description, and links to the page that renders the sample.
 */
export const WebGPUSampleDirectory = memo(
	function WebGPUSampleDirectory(): JSX.Element {
		const sampleNavCards: ReactElement[] = [];

		SampleDisplayDescriptorByID.forEach((value, key) => {
			sampleNavCards.push(
				<NavCard
					key={key}
					href={key}
					title={value.name}
					description={value.description}
				/>
			);
		});

		return (
			<>
				<NavigationHeader />
				<main>
					<div className="sample-directory">
						<h1>WebGPU Samples</h1>
						<nav aria-label="WebGPU Samples" className="nav-card-container">
							{sampleNavCards}
						</nav>
					</div>
				</main>
			</>
		);
	}
);
