
// frontend/src/vitest.setup.ts
// import '@testing-library/jest-dom';
// import { afterEach } from 'vitest';
// import { cleanup } from '@testing-library/react';

// // Limpia el DOM después de cada prueba
// afterEach(() => {
//   cleanup();
// });


import '@testing-library/jest-dom'; // Métodos extendidos como toBeInTheDocument
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpia el DOM después de cada prueba
afterEach(() => {
  cleanup();
});


