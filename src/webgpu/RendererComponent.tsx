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
				display: "flex",
				color: "hsl(204, 50%, 95%)",
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			<div style={{ flex: 1 }}>
				<canvas
					ref={canvasRef}
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
			<div
				style={{ flex: 0, position: "absolute", right: 0 }}
				ref={guiPaneRef}
			/>
		</div>
	);
};

export const RendererComponent = memo(function RendererComponent() {
	const [app, setApp] = useState<RendererApp>();
	const [error, setError] = useState("");
	const [initialized, setInitialized] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

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
		backgroundColor: "rgb(50, 99, 121)",
		margin: 0,
		padding: "2em",
		flexGrow: "1",
		color: "hsl(204, 50%, 95%)",
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
			<button
				className="sidebar-button"
				onClick={() => {
					setSearchParams({ sample: key });
				}}
				key={key}
			>
				{value.name}
			</button>
		);
	});

	const sampleSidebar = (
		<div
			style={{
				color: "hsl(204, 50%, 95%)",
				flexShrink: 0,
				whiteSpace: "pre-line",
				fontSize: "1.0em",
			}}
		>
			<div style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}>
				<div style={{ padding: "0.5em" }}>Samples</div>
				<hr />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				{sampleSidebarLinks}
			</div>
		</div>
	);

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "row",
			}}
		>
			{sampleSidebar}
			{initialized ? (
				<>{app ? <RenderingCanvas app={app} /> : errorBlock}</>
			) : (
				<>{loadingBlock}</>
			)}
		</div>
	);
});
