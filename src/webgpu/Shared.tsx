import { useEffect, useCallback, useState, useRef, memo } from "react";
import { getDevice } from "./Shared";
import { useSearchParams } from "react-router";
import { defaultSample, samplesByQueryParam } from "./samples";

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
        let sampleID = searchParams.get("sample");

        if (!sampleID)
        {
            sampleID = defaultSample;
        }

        const sample = samplesByQueryParam.get(sampleID);
        return sample;
    }, [searchParams]);

    useEffect(() => {
        setInitialized(false);

        const sample = getSample();
        if (!sample)
        {
            setInitialized(true);
            appRef.current = undefined;
            return;
        }

        getDevice().then((device: GPUDevice) => {
            // TODO: load this earlier so we don't need to rely on GPU being non-null again
            const presentFormat = navigator.gpu.getPreferredCanvasFormat();
            appRef.current = sample.create(device, presentFormat);

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
        }, (err) => {
            console.error(err);
        }).finally(() => {
            setInitialized(true);
        });
    }, [getSample]);

    const errorBlock =<p style={{  
        backgroundColor: 'rgb(50, 99, 121)',
        margin: 0,
        padding: '2em',
        flexGrow: '1',
        color: 'hsl(204, 50%, 95%)', whiteSpace: 'pre-line', fontSize: '1.5em'}}>
        {`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.
        `} 
    </p>;

    return <>
        {
            initialized 
                ? <>
                    {(appRef.current) 
                    ? <RenderingCanvas app={appRef.current}/> 
                    : errorBlock}
                </> 
                : null
        }
    </>
});