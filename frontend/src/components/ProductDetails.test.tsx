 
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import { CartProvider } from '../context/CartContext'; // Importa el CartProvider
import ProductList from './ProductList'; // Tu componente

describe('ProductList Component', () => {
  it('should display "No products available" when there are no products', () => {
    render(
      <BrowserRouter>
        <CartProvider>  {/* Asegúrate de envolverlo con el CartProvider */}
          <ProductList />
        </CartProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/No products available/i)).toBeInTheDocument();
  });
});