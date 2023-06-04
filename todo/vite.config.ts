import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 13001,
    host: '0.0.0.0',
  },
  plugins: [react()],
});
