import { getDevice, draw } from "./HelloCube";
import { useEffect, useState, useRef } from "react";
import { NavigateLink } from "../NavigateLink";

export function HelloCube() {
    const [device, setDevice] = useState<GPUDevice | undefined>(undefined);
    const [initialized, setInitialized] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const animateRequestRef = useRef<number>();
    const previousTimeRef = useRef<number>();
    const [deltaTime, setDeltaTime] = useState<number>();

    useEffect(() => {
        getDevice().then((value) => {
            setDevice(value);
        }, (err) => {
            console.error(err);
            setErrorMessage(
                `${err}`
            );
        }).finally(() => {
            setInitialized(true);
        });
    }, []);

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            setDeltaTime(deltaTime);
            if (device)
            {
                draw(device, time);
            }
        }
        previousTimeRef.current = time;
        animateRequestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        animateRequestRef.current = requestAnimationFrame(animate);
        return () => {
            if (animateRequestRef.current)
            {
                cancelAnimationFrame(animateRequestRef.current);
            }
        }
    }, [device])

    const errorBlock =<p style={{  
        backgroundColor: 'rgb(50, 99, 121)',
        padding: '2em',
        flexGrow: '1',
        color: 'hsl(204, 50%, 95%)', whiteSpace: 'pre-line', fontSize: '2em'}}>
        {`Sorry, there was an issue.
            This app uses WebGPU, which has somewhat limited support.
            Try using another browser, updating your browser, or downloading a Beta or Nightly version.
        `} 
    </p>;

    return (
        <div className="HelloCube">
            <div style={{
                display:"flex",  
                color: 'hsl(204, 50%, 95%)', 
                flexDirection:'column', 
                width: '100vw', 
                height: '100vh'
            }}>
                <header style={{flexGrow: 0}} className="website-header">
                    <NavigateLink link="/" label="Estelle Booher"/> {`>`} <NavigateLink link="/hello-cube" label="Hello Cube"/> 
                </header>
                {(initialized && !device) ? errorBlock : null}
                <canvas style={{        
                    visibility: initialized ? 'visible' : 'hidden',
                    width: '100%',
                    flexGrow: 2,
                    // display: 'block',
                }}/>
                <p style={{  
                    backgroundColor: 'rgb(2,48,71)',
                    padding: '1em',
                    alignItems: 'start',
                    color: 'hsl(204, 50%, 95%)',
                    flexGrow: 0,
                }}> 
                    FPS: {deltaTime ? (1000.0 / deltaTime).toFixed(2) : null}
                </p>
            </div>
        </div>
    )
}