// __mocks__/axios.ts
import { vi } from 'vitest';

const axiosMock = {
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
};

export default axiosMock;