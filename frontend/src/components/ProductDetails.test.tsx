 
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de envolver el componente con BrowserRouter
import ProductList from './ProductList'; // Asegúrate de importar el componente correcto

describe('ProductList Component', () => {
  it('should display "No products available" when there are no products', () => {
    render(
      <BrowserRouter> 
        <ProductList /> {/* Asegúrate de envolver el componente en BrowserRouter */}
      </BrowserRouter>
    );

    expect(screen.getByText(/No products available/i)).toBeInTheDocument();
  });

  // Aquí podrías agregar más tests si lo necesitas
});