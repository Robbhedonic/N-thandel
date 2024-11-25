
// frontend/src/setupTest.ts



// import '@testing-library/jest-dom';
// // Mock de localStorage
// const localStorageMock = (() => {
//   let store: { [key: string]: string } = {};

//   return {
//     getItem: jest.fn((key: string) => store[key] || null),
//     setItem: jest.fn((key: string, value: string) => {
//       store[key] = value;
//     }),
//     removeItem: jest.fn((key: string) => {
//       delete store[key];
//     }),
//     clear: jest.fn(() => {
//       store = {};
//     }),
//     get length() {
//       return Object.keys(store).length;
//     },
//     key: jest.fn((index: number) => {
//       const keys = Object.keys(store);
//       return keys[index] || null;
//     }),
//   };
// })();

// // Asignar el mock a window.localStorage
// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock,
// });



// // frontend/src/setupTests.ts

// import '@testing-library/jest-dom';
// import { vi } from 'vitest';

// // Mock de localStorage
// const localStorageMock = (() => {
//   let store: Record<string, string> = {};

//   return {
//     getItem: vi.fn((key: string) => store[key] || null),
//     setItem: vi.fn((key: string, value: string) => {
//       store[key] = value;
//     }),
//     removeItem: vi.fn((key: string) => {
//       delete store[key];
//     }),
//     clear: vi.fn(() => {
//       store = {};
//     }),
//     get length() {
//       return Object.keys(store).length;
//     },
//     key: vi.fn((index: number) => {
//       const keys = Object.keys(store);
//       return keys[index] || null;
//     }),
//   };
// })();

// // Asignar el mock a window.localStorage
// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock,
//   writable: true, // Asegura que pueda ser reasignado en otras pruebas
// });

// // Exportar el mock para que pueda ser reutilizado si es necesario
// export { localStorageMock };


// frontend/src/setupTests.ts
import '@testing-library/jest-dom'; // Para extender las aserciones como 'toBeInTheDocument'
import { vi } from 'vitest';

// Mock de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: vi.fn((index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    }),
  };
})();

// Asignar el mock a window.localStorage
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// Exportar el mock para que pueda ser reutilizado si es necesario
export { localStorageMock };