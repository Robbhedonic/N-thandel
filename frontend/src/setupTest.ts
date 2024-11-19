// frotend/src/setupTest.ts

// import '@testing-library/jest-dom';
// import { beforeAll, afterEach, afterAll } from 'vitest';
// // import { server } from './Mocks/server';

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());




import '@testing-library/jest-dom'; // Para usar las aserciones de jest-dom

// Mock global para localStorage usando vi.fn() (Vitest)
global.localStorage = {
  getItem: vi.fn().mockReturnValue(null), // Cambiar jest.fn() por vi.fn()
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};