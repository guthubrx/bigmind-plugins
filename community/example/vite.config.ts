import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'Example',
      fileName: () => 'index.js',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@bigmind/plugin-system'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@bigmind/plugin-system': 'BigMindPluginSystem'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
