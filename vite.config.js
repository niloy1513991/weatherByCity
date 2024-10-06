import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/weatherByCity/', // Set this to your repository name
  plugins: [react()],
});