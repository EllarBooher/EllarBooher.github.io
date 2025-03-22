import {
	useEffect,
	useCallback,
	useState,
	useRef,
	memo,
	ReactElement,
} from "react";
import { Link } from "react-router";
import { SampleEntry, samplesByID } from "./Samples";
import { RendererApp, initializeApp } from "./RendererApp";
import { GUI } from "lil-gui";
import "./WebGPUSamplePage.css";
import { NavigationHeader } from "../NavigateLink";
import EmbeddedReadme from "./EmbeddedReadme";
import { NavCard } from "../NavCard";

const CanvasScreenshotWidget = ({
	canvas,
}: {
	canvas: React.RefObject<HTMLCanvasElement>;
}): JSX.Element => {
	const [screenshotSource, setScreenshotSource] = useState<string>();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				position: "absolute",
				width: "10rem",
				height: "10rem",
			}}
		>
			<button
				style={{ alignSelf: "stretch" }}
				onClick={() => {
					const dataURL = canvas.current?.toDataURL("image/png");

					setScreenshotSource(dataURL);
				}}
			>
				Screenshot
			</button>

			{screenshotSource !== undefined ? (
				<img
					style={{
						aspectRatio: "1",
					}}
					src={screenshotSource}
					alt={"From Canvas"}
				/>
			) : undefined}
		</div>
	);
};

/**
 * This component contains the UI and canvas HTML elements used to display and
 * control the WebGPU sample app, while also handling the render loop and
 * timing.
 * @param app - A fully initialized `RendererApp` to display in
 *  the canvas and bind to the UI.
 * @param onError - An error handler for errors that
 *  occur within methods of `app`. Any errors outside `app` are unhandled.
 * @returns
 */
const RenderingCanvas = function RenderingCanvas({
	app,
	onError,
}: {
	app: RendererApp;
	onError: (err: unknown) => void;
}): JSX.Element {
	const animateRequestRef = useRef<number>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const guiPaneRef = useRef<HTMLDivElement>(null);
	const hibernateRef = useRef(false);
	const guiRef = useRef<GUI>();
	const [guiDocked, setGUIDocked] = useState<boolean>(false);
	const resizeTimeout = useRef<ReturnType<typeof setTimeout>>();
	const lastTimeRef = useRef<number>();

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			const devicePixelRatio = window.devicePixelRatio;
			canvas.width = Math.max(canvas.offsetWidth * devicePixelRatio, 1);
			canvas.height = Math.max(canvas.offsetHeight * devicePixelRatio, 1);

			clearTimeout(resizeTimeout.current);

			resizeTimeout.current = setTimeout(() => {
				// TODO: can we miss this event? can canvas dimensions and context.getCurrentTexture() be out of sync?
				try {
					if (canvas.width <= 1 || canvas.height <= 1) {
						hibernateRef.current = true;
						console.log("Hibernate");
						return;
					}
					hibernateRef.current = false;
					app.handleResize?.(canvas.width, canvas.height);
				} catch (err) {
					onError(err);
				}
			}, 500);

			return (): void => {
				clearTimeout(resizeTimeout.current);
			};
		}
	}, [app, onError]);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		return (): void => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [resizeCanvas]);

	const animate = useCallback(
		(time: number) => {
			const drawContext = canvasRef.current?.getContext("webgpu");

			if (drawContext) {
				const deltaTime =
					time - (lastTimeRef.current ? lastTimeRef.current : 0.0);
				lastTimeRef.current = time;

				const drawTexture = drawContext.getCurrentTexture();
				try {
					if (!hibernateRef.current) {
						app.draw(
							drawTexture,
							canvasRef.current!.width / canvasRef.current!.height,
							time,
							deltaTime
						);
					}
				} catch (err) {
					onError(err);
				}

				if (!app.quit) {
					animateRequestRef.current = requestAnimationFrame(animate);
				}
			}
		},
		[app, onError]
	);

	useEffect(() => {
		const context = canvasRef.current?.getContext("webgpu");

		if (guiRef.current) {
			guiRef.current?.destroy();
		}
		if (app.setupUI) {
			guiRef.current = new GUI({ container: guiPaneRef.current! });
			guiRef.current.close();
			guiRef.current.onOpenClose((gui) => {
				if (gui == guiRef.current) {
					setGUIDocked(!gui._closed);
				}
			});

			try {
				app.setupUI(guiRef.current);
			} catch (err) {
				onError(err);
			}
		}

		if (!context) {
			console.error("'webgpu' canvas context not found, cannot animate.");
			return;
		}

		context.configure(app.presentationInterface());

		animateRequestRef.current = requestAnimationFrame(animate);

		const canvas = canvasRef.current;
		if (canvas) {
			app.handleResize?.(canvas.width, canvas.height);
		}

		return (): void => {
			if (animateRequestRef.current !== undefined) {
				cancelAnimationFrame(animateRequestRef.current);
			}
		};
	}, [animate, app, setGUIDocked, onError]);

	useEffect(() => {
		/*
		 * Need to respond to canvas html element resizing on redraw, so this is an
		 * effect as opposed to calling resizeCanvas() in the onOpenClose callback
		 * above.
		 */
		resizeCanvas();
	}, [resizeCanvas, guiDocked]);

	/*
	 * The precise hierarchy of these elements is important for the desired
	 * effect. See `WebGPUSamplePage.css` for the specifics.
	 */
	return (
		<>
			<div className="canvas-container">
				<canvas className="sample-canvas" ref={canvasRef} />
			</div>
			<div
				className={guiDocked ? undefined : "gui-pane-floating"}
				ref={guiPaneRef}
			/>
			{import.meta.env.DEV ? (
				<CanvasScreenshotWidget canvas={canvasRef} />
			) : undefined}
		</>
	);
};

/**
 * A component that handles the initialization of the rendering application for
 * a given sample, before serving it on a canvas.
 * @param sample - The sample load, run, and display.
 */
const AppLoader = function AppLoader({
	sample,
}: {
	sample: SampleEntry;
}): JSX.Element {
	const [errors, setErrors] = useState<string[]>();
	const appRef = useRef<RendererApp>();
	const appLoadingPromiseRef = useRef<Promise<void>>();
	const [initialized, setInitialized] = useState(false);

	const handleError = useCallback(
		(err: unknown) => {
			console.error(err);
			if (err instanceof Error) {
				setErrors([
					err.message,
					...(typeof err.cause === "string" ? [err.cause] : []),
				]);
			} else {
				setErrors(["Failed to initialize app."]);
			}
		},
		[setErrors]
	);

	useEffect(() => {
		if (!("gpu" in navigator)) {
			setErrors([
				"WebGPU is not available in this browser.",
				"navigator.gpu is null",
			]);
			setInitialized(true);
			return;
		}

		setInitialized(false);
		setErrors(undefined);

		/*
		 * If the app requires a lot of loading, this kinda sucks since the app
		 * asynchronously continues to load creating a new instance each time the
		 * user clicks around. This could cause issues on some systems.
		 * The solution would be to make app initialization async with multiple
		 * steps that can be interrupted.
		 */
		let shouldUpdate = true;

		appLoadingPromiseRef.current = initializeApp({
			gpu: navigator.gpu,
			requiredLimits: sample.requiredLimits,
			requiredFeatures: sample.requiredFeatures,
			optionalFeatures: sample.optionalFeatures,
			import: sample.import,
			onUncapturedError: (ev) => {
				console.error(`WebGPU device uncaptured error: ${ev.error.message}`);
				setErrors(["WebGPU has encountered an error, causing it to crash."]);
			},
		})
			.then((app) => {
				if (!shouldUpdate) return;
				appRef.current = app;
			})
			.catch((err) => {
				if (!shouldUpdate) return;
				handleError(err);
			})
			.finally(() => {
				if (!shouldUpdate) return;
				appLoadingPromiseRef.current = undefined;
				setInitialized(true);
			});

		return (): void => {
			shouldUpdate = false;
			appRef.current?.destroy?.();
		};
	}, [sample, handleError]);

	const errorBlock = (
		<div className="sample-text">
			<p>
				{`Sorry, there was an issue, cause the sample to fail to load or crash.
            This app uses WebGPU, which can be unstable on some browsers.
            Try updating or using another browser.`}
			</p>
			<ol className="sample-errors">
				{errors?.map((value) => {
					return <li key={value}>{value}</li>;
				})}
			</ol>
		</div>
	);
	const loadingBlock = (
		<div className="sample-text">
			<p>{`Loading...`}</p>
		</div>
	);

	if (navigator.gpu === undefined) {
		return (
			<div className="sample-text">
				<p>{`Your browser does not support WebGPU. Please try another.`}</p>
			</div>
		);
	}

	return (
		<>
			{initialized ? (
				<>
					{errors !== undefined ? (
						errorBlock
					) : (
						<RenderingCanvas app={appRef.current!} onError={handleError} />
					)}
				</>
			) : (
				loadingBlock
			)}
		</>
	);
};

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

	samplesByID.forEach((value, key) => {
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
	sampleID: string;
}): JSX.Element {
	const { width } = useWindowDimensions();

	const sample = samplesByID.get(sampleID);
	if (sample === undefined) {
		console.error("Not a valid sample");
		return <></>;
	}

	const app = (
		<div className="sample-app-container">
			<h1 className="visuallyhidden">WebGPU Animated Sample</h1>
			<AppLoader sample={sample} />
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
					<EmbeddedReadme projectFolder={sample.projectFolder} />
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

		samplesByID.forEach((value, key) => {
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
					<div className="sample-text">
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
