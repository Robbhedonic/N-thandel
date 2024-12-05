
// frontend/src/utils/cartUtils.ts



import { Product } from "../context/CartContext";

/**
 * Agrega un producto al carrito.
 * Si el producto ya existe, incrementa su cantidad.
 * @param cart - Lista actual de productos en el carrito.
 * @param product - Producto a agregar.
 * @returns Nueva lista de productos en el carrito.
 */
export const addToCart = (cart: Product[], product: Product): Product[] => {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // Incrementa la cantidad del producto existente
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
  }

  // Agrega un nuevo producto al carrito
  return [...cart, product];
};

/**
 * Elimina un producto del carrito por su ID.
 * @param cart - Lista actual de productos en el carrito.
 * @param id - ID del producto a eliminar.
 * @returns Nueva lista de productos en el carrito.
 */
export const removeFromCart = (cart: Product[], id: number): Product[] => {
  return cart.filter((product) => product.id !== id);
};

/**
 * Limpia completamente el carrito.
 * @returns Carrito vacío.
 */
export const clearCart = (): Product[] => {
  return [];
};

/**
 * Calcula el total del carrito sumando el precio de cada producto por su cantidad.
 * @param cart - Lista actual de productos en el carrito.
 * @returns Total del carrito.
 */
export const calculateTotal = (cart: Product[]): number => {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};
