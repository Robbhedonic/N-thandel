
// frontend/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilita variables globales como 'expect'
    environment: 'jsdom', // Configura un entorno similar al navegador
    setupFiles: './src/setupTests.ts', // Archivo de configuración para pruebas
    mockReset: true,
  },
});

