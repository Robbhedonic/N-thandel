

// frontend/src/components/Cart.tsx
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="cartShoppingList">
      <div className="titleCart">
        <h1>Your Shopping List</h1>
      </div>
      <div className='cartList'>
        {cart.length > 0 ? (
          <ul className="list-shopping">
            {cart.map((product) => (
              <li key={product.id}>
                <div className="cardProduct">
                  {/* Show the product image */}
                  {product.imagePath && (
                    <img
                      className="product-image"
                      src={product.imagePath}
                      alt={product.name}
                    />
                  )}
                  <h2>{product.name}</h2>
                  <h4>${product.price}</h4>
                  <p>Quantity: {product.quantity}</p> {/* Display the quantity */}
                  <button
                    className="cart-delete"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;