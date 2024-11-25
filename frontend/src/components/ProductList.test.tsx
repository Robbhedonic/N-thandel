// frontend/src/components/ProductList.test.tsx

// import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';
// import axios from 'axios';
// import { expect } from 'vitest'; // Importa explícitamente 'expect'
// import '@testing-library/jest-dom'; // Para usar 'toBeInTheDocument'
// import ProductList from './ProductList';

// // Resto de tu código...

// vi.mock('axios');

// const mockProducts = [
//   { id: 1, name: 'Producto 1', price: 50 },
//   { id: 2, name: 'Producto 2', price: 30 },
// ];

// axios.get.mockResolvedValue({
//   data: mockProducts,
// });

// test('debería renderizar los productos correctamente', async () => {
//   render(<ProductList />);

//   const product1 = await screen.findByText('Producto 1');
//   expect(product1).toBeInTheDocument();

//   const product2 = await screen.findByText('Producto 2');
//   expect(product2).toBeInTheDocument();
// // });

// import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';
// import axios from 'axios';
// import ProductList from './ProductList';
// import '@testing-library/jest-dom'; // Importa jest-dom para asegurarte de que las aserciones estén disponibles

// // Mock de axios
// vi.mock('axios');

// const mockProducts = [
//   { id: 1, name: 'Producto 1', price: 50 },
//   { id: 2, name: 'Producto 2', price: 30 },
// ];

// // Configura el comportamiento del mock para axios.get
// (axios.get as jest.Mock).mockResolvedValue({
//   data: mockProducts,
// });

// test('debería renderizar los productos correctamente', async () => {
//   render(<ProductList />);

//   // Verifica que los productos estén en el documento
//   const product1 = await screen.findByText('Producto 1');
//   expect(product1).toBeInTheDocument();

//   const product2 = await screen.findByText('Producto 2');
//   expect(product2).toBeInTheDocument();
// });


// frontend/src/components/ProductList.test.tsx

import { render, screen } from '@testing-library/react';
import { vi} from 'vitest'; // Importa 'expect' desde Vitest
import { expect } from 'vitest';
import axios from 'axios';
import '@testing-library/jest-dom'; // Importa jest-dom para extender las aserciones
import ProductList from './ProductList';


// Mock de axios
vi.mock('axios');

const mockProducts = [
  { id: 1, name: 'Producto 1', price: 50 },
  { id: 2, name: 'Producto 2', price: 30 },
];

vi.mocked(axios.get).mockResolvedValue({
  data: mockProducts,
});

test('debería renderizar los productos correctamente', async () => {
  render(<ProductList />);

  const product1 = await screen.findByText('Producto 1');
  expect(product1).toBeInTheDocument();

  const product2 = await screen.findByText('Producto 2');
  expect(product2).toBeInTheDocument();
});