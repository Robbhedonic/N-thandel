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



// frontend/src/components/ProductList.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define la interfaz para el producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

const ProductList = () => {
  // Usamos el estado para almacenar los productos
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Asegúrate de que la URL esté correctamente configurada
        const response = await axios.get("http://localhost:5001/api/products");

        // Verifica que la respuesta sea un arreglo
        if (Array.isArray(response.data)) {
          setProducts(response.data);  // Asignamos los productos al estado
        } else {
          console.error("La respuesta no contiene un arreglo de productos");
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                {product.name} - ${product.price}
              </Link>
            </li>
          ))
        ) : (
          <li>No hay productos disponibles</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;