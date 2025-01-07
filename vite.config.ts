import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TransformResult } from 'rollup'

// Allow direct embedding of wgsl shaders
const wgslPlugin = () => ({
    name: 'wgsl-plugin',
    transform(src: string, id: string) {
      if (id.endsWith('.wgsl')) {
        return {
          code: `export default \`${src}\`;`,
          map: { mappings: '' },
        } satisfies TransformResult;
      }
    },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [wgslPlugin(), react()],
})
