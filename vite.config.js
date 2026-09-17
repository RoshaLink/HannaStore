import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative URLs keep the build compatible with both / and /<repository>/ hosting.
  base: './',
});
