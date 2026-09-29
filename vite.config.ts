import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'node:fs';

const hasCustomDomain = existsSync('public/CNAME');
const base = process.env.GITHUB_ACTIONS && !hasCustomDomain ? '/Portfolio/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
