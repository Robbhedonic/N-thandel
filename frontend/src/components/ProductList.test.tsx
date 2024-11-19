// frontend/src/components/ProductList.test.tsx


import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import { BrowserRouter } from 'react-router-dom';  // Necesitamos envolver el componente en un Router
import axios from 'axios';  // Importamos axios para mockearlo

vi.mock('axios');  // Mock de axios

test('debería mostrar la lista de productos', async () => {
  // Simulamos la respuesta de axios
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: 'Árbol de Navidad', price: 50 },
      { id: 2, name: 'Luces LED', price: 20 },
    ],
  });

  // Renderizamos el componente dentro de un Router
  render(
    <BrowserRouter>
      <ProductList />
    </BrowserRouter>
  );

  // Usamos findByRole para buscar enlaces con el texto esperado
  const treeElement = await screen.findByRole('link', { name: /Árbol de Navidad/i });
  const lightElement = await screen.findByRole('link', { name: /Luces LED/i });

  // Verificamos que los productos estén en el documento
  expect(treeElement).toBeInTheDocument();
  expect(lightElement).toBeInTheDocument();
});