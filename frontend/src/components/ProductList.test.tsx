// frontend/src/components/ProductList.test.tsx

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';
import axios from 'axios';
import { vi } from 'vitest';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

test('debería renderizar los productos correctamente', async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: 'Producto 1', price: 50 },
      { id: 2, name: 'Producto 2', price: 100 },
    ],
  });

  render(
    <MemoryRouter>
      <ProductList />
    </MemoryRouter>
  );

  expect(await screen.findByText('Producto 1 - $50')).toBeInTheDocument();
  expect(await screen.findByText('Producto 2 - $100')).toBeInTheDocument();
});