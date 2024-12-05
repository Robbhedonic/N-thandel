
 // frontend/src/components/ProductList.tsx

import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import QuantityInput from './QuantityInput';

interface Product {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('La respuesta no contiene un arreglo de productos');
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };

  return (
    <div className="productList">
      <div className="productListMainTitle">
        <h1>Merry Christmas and Happy New Shopping</h1>
      </div>

      <div className="List">
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                <div className="cardProduct">
                  <Link to={`/products/${product.id}`}>
                    <h2>{product.name}</h2>
                    <img
                      src={product.imagePath}
                      alt={product.name}
                      className="product-image"
                    />
                    <h4>${product.price}</h4>
                  </Link>
                  <QuantityInput
                    initialValue={quantities[product.id] || 0}
                    onChange={(value) => handleQuantityChange(product.id, value)}
                  />
                  <button
                    className="button-card"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
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
