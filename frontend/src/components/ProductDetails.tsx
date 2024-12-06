
//frontend/src/components/ProductDetails.tsx



import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../types';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  // El estado 'error' y 'setError' fue removido ya que no se está utilizando
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Aquí podrías manejar el error si es necesario, pero no es necesario tener 'setError' si no se utiliza
        // setError('Product not found');
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
    <div className="detailProduct">
      <h1>{product.name}</h1>
      {product.imagePath && (
        <img
          className="product-image"
          src={product.imagePath}
          alt={product.name}
        />
      )}
      <h2>${product.price}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Stock: {product.stock}</strong>
      </p>
    </div>
  );
};

export default ProductDetails;