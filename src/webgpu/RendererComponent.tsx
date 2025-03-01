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
import { RendererApp, RendererAppConstructor, getDevice } from "./RendererApp";
import { GUI } from "lil-gui";
import "./RendererComponent.css";

const RenderingCanvas = function RenderingCanvas({
	app,
}: {
	app: RendererApp;
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
			app.handleResize?.(canvas.width, canvas.height);
		}
	}, [app]);

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

				app.draw(
					drawTexture,
					canvasRef.current!.width / canvasRef.current!.height,
					time,
					deltaTime
				);

				if (!app.quit) {
					animateRequestRef.current = requestAnimationFrame(animate);
				}
			}
		},
		[app]
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
			app.setupUI(guiRef.current);
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
	}, [animate, app, setGUIDocked]);

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

	const quitApp = useCallback(() => {
		if (!appRef.current) {
			return;
		}
		appRef.current.quit = true;
	}, []);

	const createApp = useCallback(
		(
			_adapter: GPUAdapter,
			device: GPUDevice,
			sampleConstructor: RendererAppConstructor
		) => {
			if (appRef.current) {
				quitApp();
			}
			console.log("Got WebGPU device, initializing sample app.");

			// We could try to recreate the device and app, but outside of hotloading/dev that seems unnecessary
			// The user can just reload the page if a crash occurs
			device.lost.then(
				(reason) => {
					console.log(
						`WebGPU device lost - ("${reason.reason}"):\n ${reason.message}`
					);
				},
				(err) => {
					// This shouldn't happen
					throw new Error(`WebGPU device lost rejected`, {
						cause: err,
					});
				}
			);
			device.onuncapturederror = (ev) => {
				console.error(`WebGPU device uncaptured error: ${ev.error.message}`);
				setErrors([ev.error.message]);
				quitApp();
			};

			const presentFormat = navigator.gpu.getPreferredCanvasFormat();
			appRef.current = sampleConstructor(
				device,
				presentFormat,
				performance.now()
			);
			console.log("Finished initializing app.");
		},
		[quitApp]
	);

	useEffect(() => {
		if (appLoadingPromiseRef.current) {
			return;
		}

		setInitialized(false);
		setErrors(undefined);
		// Adapter is one-time, and samples can have different feature requirements, so we need to create everything from scratch
		appLoadingPromiseRef.current = Promise.all([
			sample.import(),
			getDevice(
				sample.requiredFeatures,
				sample.optionalFeatures,
				sample.requiredLimits
			),
		])
			.then(
				([sampleConstructor, { adapter, device }]) => {
					createApp(adapter, device, sampleConstructor);
				},
				(err: Error) => {
					console.error(err);
					setErrors([err.message, err.cause?.toString?.() ?? "Unknown Cause"]);
					// TODO: Differentiate between fatal and nonfatal errors
					appRef.current = undefined;
					setInitialized(false);
				}
			)
			.finally(() => {
				appLoadingPromiseRef.current = undefined;
				setInitialized(true);
			});
	}, [sample, createApp]);

	const errorBlock = (
		<>
			<p>
				{`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.`}
			</p>
			<ol className="sample-errors">
				{errors?.map((value) => {
					return <li key={value}>{value}</li>;
				})}
			</ol>
		</>
	);
	const loadingBlock = <p>{`Loading...`}</p>;
	const textBlock = (
		<div className="sample-text">{errors ? errorBlock : loadingBlock}</div>
	);

	return (
		<>
			{initialized && appRef.current ? (
				<RenderingCanvas app={appRef.current} />
			) : (
				textBlock
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
