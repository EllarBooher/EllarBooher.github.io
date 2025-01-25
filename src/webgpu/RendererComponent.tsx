import {
	useEffect,
	useCallback,
	useState,
	useRef,
	memo,
	ReactElement,
} from "react";
import { useSearchParams } from "react-router";
import { defaultSample, samplesByQueryParam } from "./Samples";
import { RendererApp, getDevice } from "./RendererApp";
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
			app.setupUI(guiRef.current);
		}

		if (!context) {
			console.error("'webgpu' canvas context not found, cannot animate.");
			return;
		}

		context.configure({ device: app.device, format: app.presentFormat });

		animateRequestRef.current = requestAnimationFrame(animate);

		return () => {
			if (animateRequestRef.current) {
				cancelAnimationFrame(animateRequestRef.current);
			}
		};
	}, [animate, app]);

	return (
		<div
			style={{
				flex: "1",
				position: "relative",
				display: "flex",
			}}
		>
			<div
				style={{
					flex: "1",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<canvas
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}
					ref={canvasRef}
				/>
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					right: 0,
				}}
				ref={guiPaneRef}
			/>
		</div>
	);
};

export const RendererComponent = memo(function RendererComponent() {
	const [app, setApp] = useState<RendererApp>();
	const [error, setError] = useState("");
	const [initialized, setInitialized] = useState(false);
	const [searchParams, _setSearchParams] = useSearchParams();

	const getSample = useCallback(() => {
		const sampleID = searchParams.get("sample");

		if (!sampleID) {
			return defaultSample;
		}

		const sample = samplesByQueryParam.get(sampleID);
		if (!sample) {
			return defaultSample;
		}

		return sample;
	}, [searchParams]);

	const quitApp = useCallback(() => {
		if (!app) {
			return;
		}
		app.quit = true;
	}, [app]);

	useEffect(() => {
		setApp(undefined);
	}, [searchParams, setApp]);

	useEffect(() => {
		if (app) {
			return;
		}
		setInitialized(false);
		const sample = getSample();
		getDevice(sample.requiredFeatures, sample.optionalFeatures)
			.then(
				({ adapter: _adapter, device }) => {
					if (app) {
						// We need to override, since a rerender due to refresh vs due to strict mode is indistinguishable
						// I am not 100% certain of this
						console.warn(
							"Device found, but app was already created. This is due to either a duplicate component rerender, or the sample changing without a full page refresh. Overriding the original."
						);
						quitApp();
					} else {
						console.log("Got WebGPU device, initializing sample app.");
					}

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
						console.error(
							`WebGPU device uncaptured error: ${ev.error.message}`
						);
						setError(ev.error.message);
						quitApp();
					};

					const presentFormat = navigator.gpu.getPreferredCanvasFormat();
					setApp(sample.create(device, presentFormat, performance.now()));

					console.log("Finished initializing app.");
				},
				(err: Error) => {
					console.error(err);
					setError(`${err.message}\n${err.cause?.toString?.()}`);
				}
			)
			.finally(() => {
				setInitialized(true);
			});
	}, [app, quitApp, getSample]);

	const bodyStyle = {
		margin: 0,
		padding: "2em",
		flexGrow: "1",
		whiteSpace: "pre-line",
		fontSize: "1.5em",
	};

	const errorBlock = (
		<p style={bodyStyle}>
			{`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.

        `}
			{error}
		</p>
	);
	const loadingBlock = <p style={bodyStyle}>{`Loading...`}</p>;

	const sampleSidebarLinks: ReactElement[] = [];
	samplesByQueryParam.forEach((value, key) => {
		sampleSidebarLinks.push(
			<li
				key={key}
				style={{
					display: "flex",
					alignContent: "center",
					listStyleType: "none",
				}}
			>
				<a href={`/#/webgpu-samples?sample=${key}`} key={key}>
					{value.name}
				</a>
			</li>
		);
	});

	const sampleSidebar = (
		<nav
			aria-label="WebGPU Samples"
			style={{
				justifyItems: "center",
			}}
		>
			<h2 style={{ paddingInline: "1em", margin: "0" }}>Samples</h2>
			<hr />
			<ul
				style={{
					padding: 0,
					margin: 0,
				}}
			>
				{sampleSidebarLinks}
			</ul>
		</nav>
	);

	return (
		<main
			style={{
				flex: "1",
				display: "flex",
			}}
		>
			<h1 className="visuallyhidden">WebGPU Animated Sample</h1>
			{sampleSidebar}
			{initialized ? (
				<>{app ? <RenderingCanvas app={app} /> : errorBlock}</>
			) : (
				<>{loadingBlock}</>
			)}
		</main>
	);
});
