import { getDevice, draw } from "./HelloCube";
import { useEffect, useState, useRef, memo } from "react";
import { Fragment } from "react";

interface FPSIndicatorProps
{
    deltaTime: number,
}

const FPSIndicator = memo(function FPSIndicator({deltaTime}: FPSIndicatorProps) {
    return <p style={{  
        backgroundColor: 'rgb(2,48,71)',
        padding: '1em',
        margin: 0,
        alignItems: 'start',
        color: 'hsl(204, 50%, 95%)',
    }}> 
        FPS: {(1000.0 / deltaTime).toFixed(2)}
    </p>
});

interface RenderingCanvasProps
{
    device: GPUDevice
}

const RenderingCanvas = memo(function RenderingCanvas({device}: RenderingCanvasProps){
    const animateRequestRef = useRef<number>();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const animate = (time: number) => {
        if (device) {
            draw(device, time);
        }
        animateRequestRef.current = requestAnimationFrame(animate);
    }

    const resizeCanvas = () => {
        const canvas = canvasRef.current;

        if(canvas)
        {
            const devicePixelRatio = window.devicePixelRatio;
            canvas.width = canvas.offsetWidth * devicePixelRatio;
            canvas.height = canvas.offsetHeight * devicePixelRatio;
        }
    };

    useEffect(() => {
        animateRequestRef.current = requestAnimationFrame(animate);

        return () => {
            if (animateRequestRef.current)
            {
                cancelAnimationFrame(animateRequestRef.current);
            }
        }
    }, [])
    useEffect(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        }
    }, [])
    
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
});

export const HelloCube = memo(function HelloCube() {
    const [device, setDevice] = useState<GPUDevice | undefined>(undefined);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        getDevice().then((value) => {
            setDevice(value);
        }, (err) => {
            console.error(err);
        }).finally(() => {
            setInitialized(true);
        });

        return () => {
            device?.destroy();
        }
    }, []);

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
            initialized ? <>{device ? <RenderingCanvas device={device}/> : errorBlock}</> : null
        }
    </>
});