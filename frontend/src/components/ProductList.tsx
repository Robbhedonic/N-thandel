
// // frontend/src/components/ProductList.tsx
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Importamos el hook useCart
// import axios from "axios";

// // Definir la interfaz del producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addToCart } = useCart(); // Usamos el hook para acceder a la función addToCart

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/products");
//         if (Array.isArray(response.data)) {
//           setProducts(response.data); // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función addToCart
//   };

//   return (
//     <div className="productList">
//       <h1>Products</h1>
//       <div className="List">
//          <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>
//                 <div className="cardProduct">
//                   <h2>{product.name}</h2>
//                   <h4>${product.price}</h4>
//                    <button className="button-card" onClick={() => handleAddToCart(product)}>
//                 Add to Cart
//               </button>
//                 </div>
                
//               </Link>
             
//             </li>
//           ))
//         ) : (
//           <li>There are not products avaible</li>
//         )}
//       </ul>

//       </div>
     
//     </div>
//   );
// };

// export default ProductList;




// // frontend/src/components/ProductList.tsx
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Importamos el hook useCart
// import axios from "axios";
// import { Product } from "../types";

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addToCart } = useCart(); // Usamos el hook para acceder a la función addToCart

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/products");
//         if (Array.isArray(response.data)) {
//           setProducts(response.data); // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función addToCart
//   };

//   return (
//     <div className="productList">
//       <h1>Products</h1>
//       <div className="List">
//         <ul>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 <Link to={`/products/${product.id}`}>
//                   <div className="cardProduct">
//                     <h2>{product.name}</h2>
//                     <h4>${product.price}</h4>
//                     {/* Mostrar la imagen del producto */}
//                     <img 
//                       src={`http://localhost:5001${product.imagePath}`} 
//                       alt={product.name} 
//                       className="product-image" 
//                     />
//                     <button className="button-card" onClick={() => handleAddToCart(product)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </Link>
//               </li>
//             ))
//           ) : (
//             <li>No products available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductList;



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Importamos el hook useCart
// import axios from "axios";

// // Definir la interfaz del producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string; // Se agregó imagePath
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addToCart } = useCart(); // Usamos el hook para acceder a la función addToCart

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/products");
//         if (Array.isArray(response.data)) {
//           setProducts(response.data); // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función addToCart
//   };

//   return (
//     <div className="productList">
//       <h1>Products</h1>
//       <div className="List">
//         <ul>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 <Link to={`/products/${product.id}`}>
//                   <div className="cardProduct">
//                     <h2>{product.name}</h2>
//                     <h4>${product.price}</h4>
//                     {/* Mostrar la imagen del producto */}
//                     <img 
//                       src={`http://localhost:5001/images/${product.imagePath}`} 
                 
//                       className="product-image" 
//                     />
//                     <button className="button-card" onClick={() => handleAddToCart(product)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </Link>
//               </li>
//             ))
//           ) : (
//             <li>No products available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// frontend/src/components/ProductList.tsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Importamos el hook useCart
// import axios from "axios";

// // Definir la interfaz del producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string; // Se agregó imagePath
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addToCart } = useCart(); // Usamos el hook para acceder a la función addToCart

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/products");
//         if (Array.isArray(response.data)) {
//           setProducts(response.data); // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función addToCart
//   };

//   return (
//     <div className="productList">
//       <h1>Products</h1>
//       <div className="List">
//         <ul>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 <Link to={`/products/${product.id}`}>
//                   <div className="cardProduct">
//                     <h2>{product.name}</h2>
//                     <h4>${product.price}</h4>
//                     {/* Mostrar la imagen del producto */}
//                     <img
//                       src={`http://localhost:5001/${product.imagePath}`} // Usa la ruta del backend
//                       alt={product.name}
//                       className="product-image"
//                     />
//                     <button className="button-card" onClick={() => handleAddToCart(product)}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </Link>
//               </li>
//             ))
//           ) : (
//             <li>No products available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// frontend/src/components/ProductList.tsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Importamos el hook useCart
import axios from "axios";

// Definir la interfaz del producto
interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string; // Se agregó imagePath
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Usamos el hook para acceder a la función addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/products");
        if (Array.isArray(response.data)) {
          setProducts(response.data); // Asignamos los productos al estado
        } else {
          console.error("La respuesta no contiene un arreglo de productos");
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Llama a la función addToCart
  };

  return (
    <div className="productList">
      <div className="productListMainTitle">
        <h1>Merry Chritsmas and Happy new Shopping</h1>
        </div>
      <div className="List">
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className="cardProduct">
                    <h2>{product.name}</h2>
                    
                    {/* Mostrar la imagen del producto */}
                    <img 
                      src={product.imagePath} 
                      alt={product.name} 
                      className="product-image" 
                    />
                    <h4>${product.price}</h4>
                    <button className="button-card" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li>No products available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;