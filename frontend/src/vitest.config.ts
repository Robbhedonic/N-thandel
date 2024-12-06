
//frontend/src/vitest.config.ts
// import { defineConfig } from 'vitest/config';

// export default defineConfig({
//   test: {
//     environment: 'jsdom', // Simula un DOM para pruebas de frontend
//     globals: true, // Habilita describe, it, expect como globales
//     setupFiles: './vitest.setup.ts', // Archivo de configuración global
//   },
// });



// import { defineConfig } from 'vitest/config';

// export default defineConfig({
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     setupFiles: './vitest.setup.ts',
//   },
// });



import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite el uso global de describe, it, expect
    environment: 'jsdom', // Simula un DOM
    setupFiles: './vitest.setup.ts', // Archivo de configuración global
    include: ['frontend/src/components/**/*.test.{ts,tsx}'], // Ajusta el patrón si es necesario
  },
});