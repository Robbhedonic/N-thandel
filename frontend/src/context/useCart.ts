
// frontend/src/context/useCart.ts
import { useState } from 'react';
import { Product } from '../types'; // Importa el tipo Product

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};

