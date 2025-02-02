import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      viteCompression()
    ],
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
    base: './',
    build: {
      outDir: '.',
      emptyOutDir: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[ext]',
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js'
        }
      }
    }
  }
});
