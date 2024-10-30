import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/admin': 'http://localhost:8080',
      '/user': 'http://localhost:8080',
      '/guest': 'http://localhost:8080',
      '/perform_login': 'http://localhost:8080',
    },
  },
});
