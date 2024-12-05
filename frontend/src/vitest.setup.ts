// vitest.setup.ts

import '@testing-library/jest-dom'; // Para funciones como toBeInTheDocument
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpia el DOM después de cada prueba
afterEach(() => {
  cleanup();
});