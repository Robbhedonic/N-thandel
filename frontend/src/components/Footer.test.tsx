import { describe, it, expect } from 'vitest';  // Keep the hooks for later use
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import { CartProvider } from '../context/CartContext'; // Adjust the import path to your context

describe('ProductList Component', () => {
  it('displays "No products available" when there are no products', async () => {
    render(
      <CartProvider>
        <ProductList />
      </CartProvider>
    );

    // Wait for the "No products available" text to appear in the document
    await waitFor(() => screen.getByText(/No products available/i));
    
    // Use the correct matcher from jest-dom
    expect(screen.getByText(/No products available/i)).toBeInTheDocument();
  });
});