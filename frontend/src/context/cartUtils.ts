// // frontend/src/context/cartUtils.ts

// import { Product } from '../types';

// export const addToCart = (cart: Product[], product: Product): Product[] => {
//   return [...cart, product];
// };

// export const removeFromCart = (cart: Product[], id: number): Product[] => {
//   return cart.filter(product => product.id !== id);
// };



// frontend/src/context/cartUtils.ts

import { Product } from './CartContext'; // Asegúrate de importar el tipo de Producto

export const addToCart = (cart: Product[], product: Product): Product[] => {
  return [...cart, product];
};

export const removeFromCart = (cart: Product[], id: number): Product[] => {
  return cart.filter((product) => product.id !== id);
};

export const clearCart = (): Product[] => {
  return [];
};

