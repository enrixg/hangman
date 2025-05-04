import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hangman/',        // ← tell Vite “all files live under /hangman/”
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
