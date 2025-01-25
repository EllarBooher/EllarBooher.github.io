import { memo, ReactElement } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import { samplesByQueryParam } from "./webgpu/Samples";

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

interface DisplayCardProps {
	hyperlink: string;
	externalLink?: boolean;
	thumbnailAssets: URL[];
	title: string;
	description: string;
}

const DisplayCard = memo(function DisplayCard({
	hyperlink,
	externalLink = true,
	thumbnailAssets = [],
	title = `PLACEHOLDER TITLE`,
	description = `PLACEHOLDER DESCRIPTION`,
}: DisplayCardProps) {
	const thumbnails = (
		<div className="display-card-thumbnails">
			{thumbnailAssets.map((url: URL) => (
				<div className="display-card-thumbnail" key={url.toString()}>
					<img className="display-card-image" src={url.toString()} alt="" />
				</div>
			))}
		</div>
	);

	const navigate = useNavigate();

	const handleClick = () => {
		if (externalLink) {
			window.location.href = hyperlink;
		} else {
			navigate(hyperlink)?.catch((err) => {
				throw new Error("Unable to navigate", { cause: err });
			});
		}
	};

	return (
		<button className="display-card" onClick={handleClick}>
			<div>
				<div className="display-card-name">{title}</div>
				<div className="display-card-body">
					{description}
					{thumbnails}
				</div>
			</div>
		</button>
	);
});

function App() {
	const webGPUCards: ReactElement[] = [];
	samplesByQueryParam.forEach((value, key) => {
		webGPUCards.push(
			<DisplayCard
				key={key}
				hyperlink={`/webgpu-samples?sample=${key}`}
				externalLink={false}
				thumbnailAssets={[]}
				title={value.name}
				description={value.description}
			/>
		);
	});

	const offlineCards = [
		<DisplayCard
			key="Syzygy"
			hyperlink={`https://github.com/EllarBooher/Syzygy`}
			thumbnailAssets={[new URL("./assets/syzygy1.png", import.meta.url)]}
			title={`Syzygy`}
			description={`
                A sandbox renderer I started to study C++ and Vulkan.
                It aims to be a testbed of various features and techniques.
            `}
		/>,
		<DisplayCard
			key="SSAO"
			hyperlink={`https://github.com/EllarBooher/VulkanTemplate/tree/SSAO`}
			thumbnailAssets={[new URL("./assets/ssao1.png", import.meta.url)]}
			title={`SSAO`}
			description={`
                An implementation of Screen-Space Ambient Occlusion written in C++ with Vulkan.
            `}
		/>,
	];

	const videogameCards = [
		<DisplayCard
			key="Snail Blazer"
			hyperlink={`https://ellarbooher.itch.io/snail-blazer`}
			thumbnailAssets={[
				new URL("./assets/snailblazer1.png", import.meta.url),
				new URL("./assets/snailblazer2.png", import.meta.url),
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
		<div className="app">
			<div className="website-main">
				<div>
					Hello, my name is Estelle Booher. My passion is realtime rendering and
					engine infrastructure, and I am actively working on building a
					portfolio and career in computer graphics. This website is a landing
					spot where I will host links to various projects of mine.
					<br />
					<br />
					My github is at {githubLink}, where I host the source code of my
					projects including this website.
					<br />
					To contact me, please email at {emailLink}.
					<br />
					<h1>In-Browser WebGPU Samples</h1>
					<div className="display-grid">{webGPUCards}</div>
					<h1>Offline Computer Graphics</h1>
					<div className="display-grid">{offlineCards}</div>
					<h1>Video Games</h1>
					<div className="display-grid">{videogameCards}</div>
				</div>
			</div>
			<footer className="website-footer">
				All works present are copyrighted, unless provided with external
				attributions or license.
			</footer>
		</div>
	);
}

export default App;
