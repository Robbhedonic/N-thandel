// frontend/src/components/ProductList

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // Define la interfaz para el producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   stock: number;
// }

// const ProductList = () => {
//   // Ahora `products` tiene el tipo de Producto
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/api/products");

//         // Verifica que la respuesta sea un arreglo
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);  // Asigna los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>
//                 {product.name} - ${product.price}
//               </Link>
//             </li>
//           ))
//         ) : (
//           <li>No hay productos disponibles</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;



// // frontend/src/components/ProductList.tsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // Define la interfaz para el producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   stock: number;
// }

// const ProductList = () => {
//   // Usamos el estado para almacenar los productos
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Asegúrate de que la URL esté correctamente configurada
//         const response = await axios.get("http://localhost:5001/api/products");

//         // Verifica que la respuesta sea un arreglo
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);  // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []); // El efecto se ejecuta solo una vez al montar el componente

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>
//               <div className="cardProduct">
//                 <h2>{product.name}</h2>
//                 <h4>${product.price}</h4>
//               </div>
                
//               </Link>
//             </li>
//           ))
//         ) : (
//           <li>No hay productos disponibles</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// frontend/src/components/ProductList.tsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useCartContext } from "../context/CartContext"; // Importar el hook del carrito

// // Define la interfaz para el producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   stock: number;
// }

// const ProductList = () => {
//   // Usamos el estado para almacenar los productos
//   const [products, setProducts] = useState<Product[]>([]);
//   const { addToCart } = useCartContext(); // Usar el hook para acceder a la función addToCart

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Asegúrate de que la URL esté correctamente configurada
//         const response = await axios.get("http://localhost:5001/api/products");

//         // Verifica que la respuesta sea un arreglo
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);  // Asignamos los productos al estado
//         } else {
//           console.error("La respuesta no contiene un arreglo de productos");
//         }
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };

//     fetchProducts();
//   }, []); // El efecto se ejecuta solo una vez al montar el componente

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función para agregar el producto al carrito
//   };

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>
//                 <div className="cardProduct">
//                   <h2>{product.name}</h2>
//                   <h4>${product.price}</h4>
//                 </div>
//               </Link>
//               <button onClick={() => handleAddToCart(product)}>
//                 Agregar al carrito
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No hay productos disponibles</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext"; // Importa el hook useCart
// import axios from "axios";

// // Define la interfaz para el producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   stock: number;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]); // Declara el estado para los productos
//   const { addToCart } = useCart(); // Usamos el hook aquí

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llama a la función addToCart
//   };

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
//   }, []); // El efecto se ejecuta solo una vez al montar el componente

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <Link to={`/products/${product.id}`}>
//                 <div className="cardProduct">
//                   <h2>{product.name}</h2>
//                   <h4>${product.price}</h4>
//                 </div>
//               </Link>
//               <button onClick={() => handleAddToCart(product)}>
//                 Agregar al carrito
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No hay productos disponibles</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// src/components/ProductList.tsx


// // src/components/ProductList.tsx
// import { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext"; // Importamos el hook para el carrito

// // Define la interfaz del producto
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// const ProductList = () => {
//   const { addToCart } = useCart(); // Usamos el hook para agregar productos al carrito
//   const [products, setProducts] = useState<Product[]>([]);

//   // Simulamos la carga de productos (esto lo podrías hacer con una API)
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const fetchedProducts = [
//         { id: 1, name: "Producto 1", price: 50, description: "Descripción del Producto 1" },
//         { id: 2, name: "Producto 2", price: 30, description: "Descripción del Producto 2" },
//         { id: 3, name: "Producto 3", price: 70, description: "Descripción del Producto 3" },
//       ];
//       setProducts(fetchedProducts);
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     addToCart(product); // Llamamos a la función del contexto para agregar el producto al carrito
//   };

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <li key={product.id}>
//               <div className="product-card">
//                 <h2>{product.name}</h2>
//                 <p>{product.description}</p>
//                 <h4>${product.price}</h4>
//                 <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
//               </div>
//             </li>
//           ))
//         ) : (
//           <p>No hay productos disponibles</p>
//         )}
//       </ul>
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
      <h1>Products</h1>
      <div className="List">
         <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <div className="cardProduct">
                  <h2>{product.name}</h2>
                  <h4>${product.price}</h4>
                </div>
              </Link>
              <button onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </button>
            </li>
          ))
        ) : (
          <li>No hay productos disponibles</li>
        )}
      </ul>

      </div>
     
    </div>
  );
};

export default ProductList;