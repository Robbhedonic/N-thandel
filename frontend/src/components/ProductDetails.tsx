
// frontend/src/components/ProductDetails.tsx

// import  { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// // Define the type for a product
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   stock: number;
// }

// const ProductDetails = () => {
//     const { id } = useParams(); // Obtiene el ID de la URL
//     const [product, setProduct] = useState<Product | null>(null); // El tipo es Product o null

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await axios.get(`/api/products/${id}`);
//                 setProduct(response.data); // Actualiza el estado con los detalles del producto
//             } catch (error) {
//                 console.error("Error al obtener los detalles del producto:", error);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     if (!product) return <p>Cargando...</p>; // Mientras carga, muestra un mensaje

//     return (
//         <div>
//             <h1>Detalles del Producto</h1>
//             <p><strong>Nombre:</strong> {product.name}</p>
//             <p><strong>Precio:</strong> ${product.price}</p>
//             <p><strong>Descripción:</strong> {product.description}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//         </div>
//     );
// };

// export default ProductDetails;


// // frontend/src/components/ProductDetails.tsx

// import  { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Product } from '../types'; // Importa la interfaz Product

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>(); // Obtiene el id del producto desde la URL
//   const [product, setProduct] = useState<Product | null>(null); // Estado para almacenar el producto

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/products/${id}`);
//         setProduct(response.data); // Asigna los datos del producto al estado
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>; // Muestra un mensaje mientras se cargan los datos
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <h3>${product.price}</h3>
//       <p>Stock: {product.stock}</p>
//     </div>
//   );
// };

// export default ProductDetails;

// // frontend/src/components/ProductDetails.tsx

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Product } from '../types';

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <h3>${product.price}</h3>
//       <p>Stock: {product.stock}</p>
//       {product.imagePath && <img src={`http://localhost:5001${product.imagePath}`} alt={product.name} />}
//     </div>
//   );
// };

// export default ProductDetails;



// // frontend/src/components/ProductDetails.tsx
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Product } from '../types';

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5001/api/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <h3>${product.price}</h3>
//       <p>Stock: {product.stock}</p>
//       {product.imagePath && <img className='product-image' src={`http://localhost:5001${product.imagePath}`} alt={product.name} />}
//     </div>
//   );
// };

// export default ProductDetails;

// frontend/src/components/ProductDetails.tsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className='detailProduct'>
   
      <h1>{product.name}</h1>
      {product.imagePath && <img className='product-image' src={product.imagePath} alt={product.name} />}
       <h2>${product.price}</h2>
      <p>{product.description}</p>
     
      <p><strong>Stock: {product.stock}</strong></p>

      
    </div>
  );
};

export default ProductDetails;