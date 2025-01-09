// Manually update includes.
// This isn't ideal, but I need to study how to do the build system better. 
import atmosphereSource from './atmosphere.wgsli';

const includeMappings = new Map<string,string>([
    [
        "atmosphere.wgsli", atmosphereSource
    ]
]);

// This is utilized as a plugin in vite.config.ts, to preprocess each shader as a part of typescript compilation
export function packShaders(source: string) : string
{
    const INCLUDE_PREFIX = "//// INCLUDE ";

    const sourceOut = source.split('\n').map((line) => {
        if(line.startsWith(INCLUDE_PREFIX))
        {
            const include = line.substring(INCLUDE_PREFIX.length);

            console.log(include);
            
            if(!includeMappings.has(include))
            {
                console.error(`Unrecognized WGSL include: ${include}`);
                return "";
            }

            return includeMappings.get(include);
        }

        return line;
    }).join('\n');
    
    return sourceOut;
}