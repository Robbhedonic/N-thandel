// // src/context/useCart.ts
// import { useState } from "react";
// import { Product } from "../types"; // Importa el tipo Product (si no tienes este tipo, defínelo)

// // Hook para manejar el carrito
// export const useCart = () => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   return {
//     cart,
//     addToCart,
//     removeFromCart,
//   };
// };

// frontend/src/components/Cart.tsx
import { useCart } from "../context/useCart";
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