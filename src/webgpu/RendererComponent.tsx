import { useEffect, useCallback, useState, useRef, memo } from "react";
import { useSearchParams } from "react-router";
import { defaultSample, samplesByQueryParam } from "./Samples";
import { RendererApp, getDevice } from "./RendererApp";

const RenderingCanvas = function RenderingCanvas({app}: {app: RendererApp}){
    const animateRequestRef = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;

        if(canvas)
        {
            const devicePixelRatio = window.devicePixelRatio;
            canvas.width = canvas.offsetWidth * devicePixelRatio;
            canvas.height = canvas.offsetHeight * devicePixelRatio;
        }
    }, []);

    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        }
    }, [resizeCanvas])

    const animate = useCallback((time: number) => {
        const drawContext = canvasRef.current?.getContext("webgpu");

        if (drawContext) {
            app.draw(
                drawContext.getCurrentTexture().createView(),
                canvasRef.current!.width / canvasRef.current!.height,
                time
            );

            animateRequestRef.current = requestAnimationFrame(animate);
        }
    }, [app]);

    useEffect(() => {
        const context = canvasRef.current?.getContext('webgpu');
    
        if(!context)
        {
            console.error("'webgpu' canvas context not found, cannot animate.");
            return;
        }

        context.configure({device: app.device, format: app.presentFormat});

        animateRequestRef.current = requestAnimationFrame(animate);

        return () => {
            if (animateRequestRef.current)
            {
                cancelAnimationFrame(animateRequestRef.current);
            }
        }
    }, [animate, app])

    return <div 
        style={{
            color: 'hsl(204, 50%, 95%)', 
            position: "relative",
            width: '100%',
            height: '100%',
    }}>
        <canvas 
            ref={canvasRef}
            style={{       
                width: '100%',
                height: '100%',
        }}
    />
    </div>
}

export const RendererComponent = memo(function RendererComponent() {
    const appRef = useRef<RendererApp>();
    const [initialized, setInitialized] = useState(false);
    const [searchParams, _setSearchParams] = useSearchParams();

    const getSample = useCallback(() => {
        const sampleID = searchParams.get("sample");

        if (!sampleID)
        {
            return defaultSample;
        }

        const sample = samplesByQueryParam.get(sampleID);
        if (!sample)
        {
            return defaultSample;
        }

        return sample;
    }, [searchParams]);

    useEffect(() => {
        const sample = getSample();
        getDevice().then((device: GPUDevice) => {
            if(appRef.current)
            {
                console.warn("Device found, but app was already created. This is assumed to be a duplicate rerender, and this execution will be aborted. The original is untouched.");
                return;
            }

            // TODO: load this earlier so we don't need to rely on GPU being non-null again
            console.log("Got WebGPU device, initializing sample app.")
            
            // We could try to recreate the device and app, but outside of hotloading/dev that seems unnecessary
            // The user can just reload the page if a crash occurs
            device.lost.then((reason) => {
                console.log(`WebGPU device lost - ("${reason.reason}"):\n ${reason.message}`);
            }, (err) => {
                // This shouldn't happen
                throw new Error(`WebGPU device lost rejected`, {cause: err})
            })
            device.onuncapturederror = (ev) => {
                console.error(`WebGPU device uncaptured error: ${ev.error.message}`);
            }

            const presentFormat = navigator.gpu.getPreferredCanvasFormat();
            appRef.current = sample.create(device, presentFormat);
            console.log("Finished initializing app.");

        }, (err) => {
            console.error(err);
        }).finally(() => {
            setInitialized(true);
        });
    }, [getSample]);

    const bodyStyle = {  
        backgroundColor: 'rgb(50, 99, 121)',
        margin: 0,
        padding: '2em',
        flexGrow: '1',
        color: 'hsl(204, 50%, 95%)', whiteSpace: 'pre-line', fontSize: '1.5em'
    };

    const errorBlock =<p style={bodyStyle}>
        {`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.
        `} 
    </p>;
    const loadingBlock = <p style={bodyStyle}>
        {`Loading...`}
    </p>

    return <>
        {
            initialized 
                ? <>
                    {(appRef.current) 
                    ? <RenderingCanvas app={appRef.current}/> 
                    : errorBlock}
                </> 
                : <>{loadingBlock}</>
        }
    </>
});