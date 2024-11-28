
// frontend/src/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
// frontend/src/components/Cart.tsx



// Uso de addToCart, removeFromCart y clearCart en el componente


// Definir la interfaz del producto


export interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;  // Agregar imagePath
}

// Definir el tipo de contexto
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Componente CartProvider que proporciona el contexto
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};