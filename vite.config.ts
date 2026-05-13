import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

// Overrides Vite's built-in public copy to skip unreadable files (e.g. "image copy.png" with bad perms)
function safePublicCopy(): Plugin {
  return {
    name: 'safe-public-copy',
    apply: 'build',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(publicDir)) return;
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        const src = path.join(publicDir, file);
        const dest = path.join(distDir, file);
        try {
          fs.accessSync(src, fs.constants.R_OK);
          if (!fs.existsSync(dest)) {
            fs.copyFileSync(src, dest);
          }
        } catch {
          // skip unreadable files
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), safePublicCopy()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    copyPublicDir: false,
  },
});
