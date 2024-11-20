//vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './frontend/src/setupTest.ts', // Ruta correcta al archivo setupTests.ts
  },
});




// // vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',  // Usamos jsdom para las pruebas
//     setupFiles: './frontend/src/setupTests.ts', // Asegúrate de que la ruta sea correcta
//   },
// });

 // vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,  // Esto habilita funciones globales como 'describe', 'it'
//     environment: 'jsdom',  // Usa jsdom como entorno para pruebas
//     setupFiles: './frontend/src/setupTests.ts',  // Configuración del archivo de setupTests
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './frontend/src/setupTests.ts',  // Verifica que la ruta sea correcta
//   },
// });

