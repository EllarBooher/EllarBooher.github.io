import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TransformResult } from 'rollup'

// Allow direct embedding of wgsl shaders, with a pre-processing step
const wgslPlugin = () => ({
  name: 'wgsl-plugin',
  transform: (src: string, id: string) => {
      if (id.endsWith('.wgsli')) {
        return {
          code: `export default \`${src}\``,
          map: { mappings: '' },
        } satisfies TransformResult;
      }
      else if (id.endsWith('.wgsl')) {
        return {
          code: `
            import { packShaders } from './Shaders';
            export default packShaders(\`${src}\`);
          `,
          map: { mappings: '' },
        } satisfies TransformResult;
      }
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [wgslPlugin(), react()],
})
