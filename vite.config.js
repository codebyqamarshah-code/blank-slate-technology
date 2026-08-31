import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function copyStaticFilesPlugin() {
  return {
    name: 'copy-static-files',
    closeBundle() {
      const files = ['.htaccess', '_redirects'];
      files.forEach(file => {
        const src = path.resolve(process.cwd(), `public/${file}`);
        const dest = path.resolve(process.cwd(), `dist/${file}`);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyStaticFilesPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            return 'vendor'; // all other modules
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
