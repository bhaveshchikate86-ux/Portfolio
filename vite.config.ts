import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset URLs work on both the /Portfolio/ project path and a custom domain root.
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
