
// // frontend/vite.config.ts


//  // frontend/vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
// });



// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": "http://localhost:5001", // Redirige las llamadas API al backend
//     },
//   },
//   test: {
//     globals: true,
//     environment: "jsdom",
//   },
// });

 // vite.config.ts o vitest.config.ts
// import { defineConfig } from 'vitest/config';

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './frontend/src/setupTest.ts',
//   },
// });


//frontend/src/vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
  },
});