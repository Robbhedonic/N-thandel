
// frontend/src/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { addToCart, removeFromCart, clearCart, calculateTotal } from "../utils/cartUtils"; // Importa las funciones

export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  calculateTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => addToCart(prevCart, product)); // Usa la función aquí
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => removeFromCart(prevCart, id)); // Usa la función aquí
  };

  const handleClearCart = () => {
    setCart(clearCart()); // Usa la función aquí
  };

  const handleCalculateTotal = () => {
    return calculateTotal(cart); // Usa la función aquí
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        clearCart: handleClearCart,
        calculateTotal: handleCalculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};