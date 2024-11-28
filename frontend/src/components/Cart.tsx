// frontend/src/components/Cart.tsx

// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart(); // Usamos el hook del carrito

//   const calculateTotal = () => {
//     return cart.reduce((total, product) => total + product.price, 0);
//   };

//   return (
//     <div>
//       <h1>Carrito de Compras</h1>
//       {cart.length > 0 ? (
//         <div>
//           <ul>
//             {cart.map((product) => (
//               <li key={product.id}>
//                 <div>
//                   <h3>{product.name}</h3>
//                   <p>${product.price}</p>
//                   <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <h3>Total: ${calculateTotal()}</h3>
//           <button onClick={clearCart}>Vaciar carrito</button>
//         </div>
//       ) : (
//         <p>No hay productos en el carrito</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import { useCart } from "../context/CartContext";
// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   return (
//     <div>
//       <h1>Carrito de Compras</h1>
//       {cart.length === 0 ? (
//         <p>El carrito está vacío.</p>
//       ) : (
//         <ul>
//           {cart.map((product) => (
//             <li key={product.id}>
//               <p>{product.name} - ${product.price}</p>
//               <button onClick={() => removeFromCart(product.id)}>
//                 Eliminar
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cart.length > 0 && (
//         <button onClick={clearCart}>Vaciar Carrito</button>
// )}
//     </div>
//   );
// };

// export default Cart;


// // frontend/src/components/Cart.tsx
// import { useCart } from "../context/CartContext"; // Usamos el hook useCart

// const Cart = () => {
//   const { cart, removeFromCart } = useCart(); // Accedemos al carrito y la función para eliminar productos

//   const handleRemoveFromCart = (id: number) => {
//     removeFromCart(id); // Llama a la función removeFromCart
//   };

//   return (
//     <div>
//       <h1>Carrito</h1>
//       {cart.length > 0 ? (
//         <ul>
//           {cart.map((product) => (
//             <li key={product.id}>
//               <div className="cardProduct">
//                 <h2>{product.name}</h2>
//                 <h4>${product.price}</h4>
//                 <button onClick={() => handleRemoveFromCart(product.id)}>
//                   Eliminar
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>El carrito está vacío</p>
//       )}
//     </div>
//   );
// };

// export default Cart;


// // frontend/src/components/Cart.tsx
// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   const handleRemoveFromCart = (id: number) => {
//     removeFromCart(id);
//   };

//   return (
//     <div>
//       <h1>Your Shopping</h1>
//       {cart.length > 0 ? (
//         <ul className="list-shopping">
//           {cart.map((product) => (
//             <li key={product.id}>
//               <div className="cardProduct">
//                 <h2>{product.name}</h2>
//                 <h4>${product.price}</h4>
      
//                 <button className="cart-delete" onClick={() => handleRemoveFromCart(product.id)}>Eliminar</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your List Shopping is empty</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

// frontend/src/components/Cart.tsx

import { useCart } from "../context/CartContext";
// frontend/src/components/Cart.tsx

// import { addToCart, removeFromCart, clearCart } from '../context/cartUtils';

// Uso de addToCart, removeFromCart y clearCart en el componente

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div>
      <h1>Tu Carrito de Compras</h1>
      {cart.length > 0 ? (
        <ul className="list-shopping">
          {cart.map((product) => (
            <li key={product.id}>
              <div className="cardProduct">
                {/* Mostrar la imagen del producto */}
                {product.imagePath && (
                  <img
                    className="product-image"
                    src={product.imagePath}
                    alt={product.name}
                  />
                )}
                <h2>{product.name}</h2>
                <h4>${product.price}</h4>
                <button
                  className="cart-delete"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;