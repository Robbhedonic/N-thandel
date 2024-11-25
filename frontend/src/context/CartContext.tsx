

// import { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "../types"; // Asegúrate de importar el tipo 'Product'

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Exportar el hook useCart
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };




// // src/context/CartContext.tsx
// import { createContext, useContext, useState, ReactNode } from "react";

// // Define la interfaz del producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// // Define el tipo del contexto del carrito
// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// // Crear el contexto del carrito
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Hook personalizado para acceder al contexto del carrito
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// // Componente que proporciona el contexto del carrito
// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// // frontend/src/context/CartContext.tsx
// // src/context/CartContext.tsx

// import { createContext, useContext, useState, ReactNode } from "react";

// // Define el tipo del producto
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// // Define el tipo del contexto
// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;  // Nueva función para limpiar el carrito
// }

// // Crear el contexto
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Hook para usar el contexto del carrito
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// // Componente CartProvider que proporciona el contexto
// interface CartProviderProps {
//   children: ReactNode;
// }

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]); // Limpia el carrito
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// frontend/src/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Definir la interfaz del producto
export interface Product {
  id: number;
  name: string;
  price: number;
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