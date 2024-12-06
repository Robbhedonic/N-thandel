
// // frontend/src/context/CartContext.tsx


// import { createContext, useContext, useState, ReactNode } from "react";
// import { addToCart, removeFromCart, clearCart } from "../context/cartUtils";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

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

//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => addToCart(prevCart, product));
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCart((prevCart) => removeFromCart(prevCart, id));
//   };

//   const handleClearCart = () => {
//     setCart(clearCart());
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart: handleAddToCart,
//         removeFromCart: handleRemoveFromCart,
//         clearCart: handleClearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


// // frontend/src/context/CartContext.tsx
// import { createContext, useContext, useState, ReactNode } from "react";
// import { addToCart, removeFromCart, clearCart } from "../utils/cartUtils"; // Ajusta la ruta aquí

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

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

//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => addToCart(prevCart, product));
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCart((prevCart) => removeFromCart(prevCart, id));
//   };

//   const handleClearCart = () => {
//     setCart(clearCart());
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart: handleAddToCart,
//         removeFromCart: handleRemoveFromCart,
//         clearCart: handleClearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };




// import { createContext, useContext, useState, ReactNode } from "react";
// import { addToCart, removeFromCart, clearCart, calculateTotal } from "../utils/cartUtils";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
//   calculateTotal: () => number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

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

//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => addToCart(prevCart, product));
//   };

//   const handleRemoveFromCart = (id: number) => {
//     setCart((prevCart) => removeFromCart(prevCart, id));
//   };

//   const handleClearCart = () => {
//     setCart(clearCart());
//   };

//   const handleCalculateTotal = () => {
//     return calculateTotal(cart);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart: handleAddToCart,
//         removeFromCart: handleRemoveFromCart,
//         clearCart: handleClearCart,
//         calculateTotal: handleCalculateTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };






import { createContext, useContext, useState, ReactNode } from "react";
import { addToCart, removeFromCart, clearCart, calculateTotal } from "../utils/cartUtils";

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
    setCart((prevCart) => addToCart(prevCart, product));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => removeFromCart(prevCart, id));
  };

  const handleClearCart = () => {
    setCart(clearCart());
  };

  const handleCalculateTotal = () => {
    return calculateTotal(cart);
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