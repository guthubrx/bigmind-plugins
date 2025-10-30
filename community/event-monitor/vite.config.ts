import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'EventMonitor',
      fileName: () => 'index.js',
      formats: ['es']
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
