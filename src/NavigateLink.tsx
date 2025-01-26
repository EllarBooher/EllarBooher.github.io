import { useLocation, useSearchParams, Link } from "react-router";
import "./NavigateLink.css";
import { memo, Fragment } from "react";
import { defaultSample, samplesByQueryParam } from "./webgpu/Samples";

const pathSegmentToTitles = new Map<string, string>([
	["", "Estelle Booher"],
	["webgpu-samples", "WebGPU Samples"],
]);

export const NavigationHeader = memo(function NavigationHeader() {
	const location = useLocation();
	const [searchParams, _setSearchParams] = useSearchParams();

	const navSteps = [
		<Link key={"root"} to={"/"}>
			{pathSegmentToTitles.get("")!}
		</Link>,
	];

	if (location.pathname != "/") {
		const pathSegments = location.pathname.substring(1).split("/");
		let accumulatedLink = "/";
		navSteps.push(
			...pathSegments.map((segment: string, index: number) => {
				const prettySegment = pathSegmentToTitles.get(segment);
				const separator = index > 0 ? "/" : "";
				accumulatedLink = accumulatedLink.concat(`${separator}${segment}`);
				return (
					<Fragment key={accumulatedLink}>
						{" > "}
						<Link to={accumulatedLink}>
							{prettySegment ? prettySegment : segment}
						</Link>
					</Fragment>
				);
			})
		);
	}

	const sampleQueryParam = searchParams.get("sample");
	if (sampleQueryParam && location.pathname == "/webgpu-samples") {
		navSteps.push(
			<Fragment key="sample-caboose">
				{" > "}
				<Link to={location.pathname + location.search}>
					{samplesByQueryParam.get(sampleQueryParam)?.name ??
						defaultSample.name}
				</Link>
			</Fragment>
		);
	}

	return (
		<nav className="main-nav" aria-label="Main">
			{navSteps}
		</nav>
	);
});
