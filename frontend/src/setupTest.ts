
// frontend/src/setupTest.ts


// // frontend/src/setupTest.ts
// import '@testing-library/jest-dom';
// import { beforeAll, afterEach, afterAll } from 'vitest';
// import { server } from '../src/__mocks__/server';

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// frontend/src/setupTest.ts


// src/setupTest.ts
import '@testing-library/jest-dom';

import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "../src/__mocks__/server";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks(); // Limpia los mocks de Vitest
});
afterAll(() => server.close());
