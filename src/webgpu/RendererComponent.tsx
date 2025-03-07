import {
	useEffect,
	useCallback,
	useState,
	useRef,
	memo,
	ReactElement,
} from "react";
import { Link, useSearchParams } from "react-router";
import { SampleEntry, samplesByQueryParam } from "./Samples";
import { RendererApp, initializeApp } from "./RendererApp";
import { GUI } from "lil-gui";
import "./RendererComponent.css";

const RenderingCanvas = function RenderingCanvas({
	app,
	onError,
}: {
	app: RendererApp;
	onError: (err: unknown) => void;
}) {
	const animateRequestRef = useRef<number>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const guiPaneRef = useRef<HTMLDivElement>(null);
	const guiRef = useRef<GUI>();
	const [guiDocked, setGUIDocked] = useState<boolean>(false);
	const lastTimeRef = useRef<number>();

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			const devicePixelRatio = window.devicePixelRatio;
			canvas.width = canvas.offsetWidth * devicePixelRatio;
			canvas.height = canvas.offsetHeight * devicePixelRatio;

			// TODO: can we miss this event? can canvas dimensions and context.getCurrentTexture() be out of sync?
			try {
				app.handleResize?.(canvas.width, canvas.height);
			} catch (err) {
				onError(err);
			}
		}
	}, [app, onError]);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		return () => {
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
					app.draw(
						drawTexture,
						canvasRef.current!.width / canvasRef.current!.height,
						time,
						deltaTime
					);
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

		context.configure({ device: app.device, format: app.presentFormat });

		animateRequestRef.current = requestAnimationFrame(animate);

		return () => {
			if (animateRequestRef.current !== undefined) {
				cancelAnimationFrame(animateRequestRef.current);
			}
		};
	}, [animate, app, setGUIDocked, onError]);

	useEffect(() => {
		// Need to respond to canvas html element resizing on redraw, so this is an effect
		// As opposed to calling resizeCanvas() in the onOpenClose callback above
		resizeCanvas();
	}, [resizeCanvas, guiDocked]);

	return (
		<>
			<div className="canvas-container">
				<canvas className="sample-canvas" ref={canvasRef} />
			</div>
			<div
				className={guiDocked ? undefined : "gui-pane-floating"}
				ref={guiPaneRef}
			/>
		</>
	);
};

const AppLoader = function AppLoader({ sample }: { sample: SampleEntry }) {
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

		return () => {
			shouldUpdate = false;
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

export const RendererComponent = memo(function RendererComponent() {
	const [searchParams, setSearchParams] = useSearchParams();

	const sampleSidebarLinks: ReactElement[] = [];
	const sampleNavCards: ReactElement[] = [];
	samplesByQueryParam.forEach((value, key) => {
		const sampleLink = `/webgpu-samples?sample=${key}`;
		sampleSidebarLinks.push(
			<li key={key}>
				<Link to={sampleLink} key={key}>
					{value.name}
				</Link>
			</li>
		);
		sampleNavCards.push(
			<Link key={key} className="nav-card" to={sampleLink}>
				<h2>{value.name}</h2>
				<p>{value.description}</p>
			</Link>
		);
	});

	const sampleQueryParam = searchParams.get("sample");
	const sample = sampleQueryParam
		? samplesByQueryParam.get(sampleQueryParam)
		: undefined;
	if (sampleQueryParam && !sample) {
		searchParams.delete("sample");
		setSearchParams(searchParams);
	}
	if (sample == undefined) {
		return (
			<main className="sample">
				<div className="sample-text">
					<h1>WebGPU Samples</h1>
					<nav aria-label="WebGPU Samples" className="nav-card-container">
						{sampleNavCards}
					</nav>
				</div>
			</main>
		);
	}

	const sampleSidebar = (
		<nav aria-label="WebGPU Samples" className="sample-sidebar">
			<h2>Samples</h2>
			<hr />
			<ul>{sampleSidebarLinks}</ul>
		</nav>
	);

	return (
		<main className="sample">
			<h1 className="visuallyhidden">WebGPU Animated Sample</h1>
			{sampleSidebar}
			<AppLoader sample={sample} />
		</main>
	);
});
