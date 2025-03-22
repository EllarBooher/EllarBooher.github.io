import { memo, ReactElement } from "react";
import "./LandingPage.css";
import { NavCard } from "./NavCard";
import { samplesBySearchParam } from "./webgpu/Samples";
import { NavigationHeader } from "./NavigateLink";

const emailLink = (
	<a target="_blank" rel="noreferrer" href="mailto:estelle.booher@gmail.com">
		estelle.booher@gmail.com
	</a>
);
const githubLink = (
	<a target="_blank" rel="noreferrer" href="https://github.com/EllarBooher">
		https://github.com/EllarBooher
	</a>
);

export default memo(function LandingPage(): JSX.Element {
	const webGPUCards: ReactElement[] = [];
	samplesBySearchParam.forEach((value, key) => {
		webGPUCards.push(
			<NavCard
				key={key}
				href={`/webgpu/${key}`}
				thumbnails={[]}
				title={value.name}
				description={value.description}
			/>
		);
	});

	const offlineCards = [
		<NavCard
			key="Syzygy"
			href={`https://github.com/EllarBooher/Syzygy`}
			external
			thumbnails={[
				{
					url: new URL("./assets/syzygy1.png", import.meta.url),
					alt: "A computer rendered sun rises over chess pieces. Application interface elements appear to the left and bottom.",
				},
			]}
			title={`Syzygy`}
			description={`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `}
		/>,
		<NavCard
			key="SSAO"
			href={`https://github.com/EllarBooher/VulkanTemplate/tree/SSAO`}
			external
			thumbnails={[
				{
					url: new URL("./assets/ssao1.png", import.meta.url),
					alt: "A computer rendered building, with various decorations such as banners and pillars. Only the shadows are visible, with no color information.",
				},
			]}
			title={`SSAO`}
			description={`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `}
		/>,
	];

	const videogameCards = [
		<NavCard
			key="Snail Blazer"
			href={`https://ellarbooher.itch.io/snail-blazer`}
			external
			thumbnails={[
				{
					url: new URL("./assets/snailblazer1.png", import.meta.url),
					alt: "A smirking cartoon character with yellow hair faces off against a grimacing cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.",
				},
				{
					url: new URL("./assets/snailblazer2.png", import.meta.url),
					alt: "A crying cartoon character with yellow hair faces off against a scowling cartoon character with blue hair. In the middle is an arena filled with magma and colorful battle effects.",
				},
			]}
			title={`Snail Blazer`}
			description={`
                A short bullet-hell made for the Bullet Hell Jam 2023 on itch.io.
                The player primarily moves via grappling on enemy projectiles and the environment,
                instead of the conventional WASD-style of movement.
            `}
		/>,
	];

	return (
		<>
			<NavigationHeader />
			<main className="landing-main">
				<h1 className="visuallyhidden">Portfolio Landing Page</h1>
				<p>
					Hello, my name is Estelle Booher. My passion is realtime rendering and
					engine infrastructure, and I am actively working on building a
					portfolio and career in computer graphics. This website is a landing
					spot where I will host links to various projects of mine.
				</p>
				<p>
					My github is at {githubLink}, where I host the source code of my
					projects including this website.
				</p>
				<p>To contact me, please email at {emailLink}.</p>
				<h2>In-Browser WebGPU Samples</h2>
				<nav className="nav-card-container" aria-label="WebGPU Samples">
					{webGPUCards}
				</nav>
				<h2>Offline Computer Graphics</h2>
				<nav
					className="nav-card-container"
					aria-label="Offline Computer Graphics"
				>
					{offlineCards}
				</nav>
				<h2>Video Games</h2>
				<nav className="nav-card-container" aria-label="Video Games">
					{videogameCards}
				</nav>
			</main>
			<footer style={{ padding: "1em" }}>
				All works present are copyrighted, unless provided with external
				attributions or license.
			</footer>
		</>
	);
});
