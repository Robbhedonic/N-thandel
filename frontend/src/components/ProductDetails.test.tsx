import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './ProductList';
import { CartProvider } from '../context/CartContext'; 
import { describe, it, expect } from 'vitest';

describe('ProductList Component', () => {
  it('renders the main title', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ProductList />
        </CartProvider>
      </BrowserRouter>
    );
    // Verifica si el título principal "Merry Christmas and Happy New Shopping" se renderiza
    expect(screen.getByText(/Merry Christmas and Happy New Shopping/i)).toBeInTheDocument();
  });

  it('displays "No products available" when there are no products', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ProductList />
        </CartProvider>
      </BrowserRouter>
    );
    // Verifica si el mensaje "No products available" se muestra cuando no hay productos
    expect(screen.getByText(/No products available/i)).toBeInTheDocument();
  });
});