// // frontend/src/__mocks__/axios.ts
// import { vi } from 'vitest';

// const axiosMock = {
//   get: vi.fn(),
//   post: vi.fn(),
//   put: vi.fn(),
//   delete: vi.fn(),
// };

// export default axiosMock;



// import { vi } from 'vitest';

// const axiosMock = {
//   get: vi.fn(),
//   post: vi.fn(),
//   put: vi.fn(),
//   delete: vi.fn(),
// };

// export default axiosMock;

// frontend/src/__mocks__/axios.ts
import { vi } from 'vitest';
import type { AxiosStatic } from 'axios';

const axiosMock: AxiosStatic = {
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
  // Agrega otros métodos de Axios si los necesitas
} as unknown as AxiosStatic;

export default axiosMock;