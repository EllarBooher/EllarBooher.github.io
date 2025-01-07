import { getDevice, drawTriangle } from "./HelloTriangle";
import { useEffect, useState } from "react";

function HelloTriangle() {
    const [device, setDevice] = useState<GPUDevice | undefined>(undefined);
    const [initialized, setInitialized] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

    useEffect(() => {
        if (device)
        {
            drawTriangle(device);
        }
    }, [device]);

    const errorBlock =<p style={{  
        backgroundColor: 'rgb(50, 99, 121)',
        padding: '2em',
        flexGrow: '1',
        color: 'hsl(204, 50%, 95%)', whiteSpace: 'pre-line', fontSize: '2em'}}>
        {`ERROR: ${errorMessage}`}
        {`
            Try using another browser, updating your browser, or downloading whatever Nightly version they have.
            Many phones will be out of luck.
        `} 
    </p>;

    return (
        <div className="HelloTriangle">
            <div style={{
                display:"flex",  
                color: 'hsl(204, 50%, 95%)', 
                flexDirection:'column', 
                width: '100vw', 
                height: '100vh'
            }}>
                <header style={{flexGrow: 0}} className="website-header">
                    Estelle Booher
                </header>
                {(initialized && !device) ? errorBlock : null}
                <canvas style={{        
                    visibility: initialized ? 'visible' : 'hidden',
                    width: '100%',
                    flexGrow: 2,
                    display: 'block',
            }}/>
            </div>
        </div>
    )
}

export default HelloTriangle;