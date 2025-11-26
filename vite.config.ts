import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY. Default to empty string if undefined to prevent "process is not defined" errors.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});