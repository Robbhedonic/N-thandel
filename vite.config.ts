// // vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './frontend/src/setupTest.ts', // Ruta correcta al archivo setupTests.ts
//   },
// });



// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',  // Usamos jsdom para las pruebas
    setupFiles: './frontend/src/setupTests.ts', // Asegúrate de que la ruta sea correcta
  },
});
