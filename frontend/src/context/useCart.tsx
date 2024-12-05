

// frontend/src/components/Cart.tsx
// import { useCart } from "../context/useCart";
import { useState } from 'react';
import { Product } from '../types'; // Asegúrate de que el tipo Product esté bien importado

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