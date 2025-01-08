import { useEffect, useCallback, useState, useRef, memo } from "react";
import { getDevice } from "./Shared";

interface RenderingCanvasProps
{
    device: GPUDevice,
    app: RendererApp,
}

const RenderingCanvas = function RenderingCanvas({device, app}: RenderingCanvasProps){
    const animateRequestRef = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const animate = useCallback((time: number) => {
        const drawContext = canvasRef.current?.getContext("webgpu");
        if (device && drawContext) {
            app.draw(
                device, 
                drawContext.getCurrentTexture().createView(), 
                navigator.gpu.getPreferredCanvasFormat(),
                canvasRef.current!.width / canvasRef.current!.height,
                time
            );
        }
        animateRequestRef.current = requestAnimationFrame(animate);
    }, [device]);

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
        const context = canvasRef.current?.getContext('webgpu');
    
        if (context)
        {
            const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
    
            context.configure({device: device, format: presentationFormat});
    
            animateRequestRef.current = requestAnimationFrame(animate);
    
            return () => {
                if (animateRequestRef.current)
                {
                    cancelAnimationFrame(animateRequestRef.current);
                }
            }
        }
    }, [animate])
    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        }
    }, [resizeCanvas])

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

export const RendererComponent = memo(function RendererComponent({app}: {app: RendererApp}) {
    const [device, setDevice] = useState<GPUDevice>();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(false);
        getDevice().then((value) => {
            setDevice(value);
        }, (err) => {
            console.error(err);
        }).finally(() => {
            setInitialized(true);
        });
    }, [setDevice]);

    useEffect(() => {
        if(device)
        {
            device.lost.then((reason) => {
                console.log(`WebGPU device lost - ("${reason.reason}"):\n ${reason.message}`);
                setDevice(undefined);
            }, (err) => {
                // This shouldn't happen
                throw new Error(`WebGPU device lost rejected`, {cause: err})
            })
            device.onuncapturederror = (ev) => {
                console.error(`WebGPU device uncaptured error: ${ev.error.message}`);
            }
        }
    }, [device]);

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
            initialized ? <>{device ? <RenderingCanvas device={device} app={app}/> : errorBlock}</> : null
        }
    </>
});