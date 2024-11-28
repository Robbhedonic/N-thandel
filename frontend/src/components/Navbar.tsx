//frontend/src/components/Navbar.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Usamos el hook useCart para acceder al carrito

const Navbar = () => {
  const { cart } = useCart(); // Obtenemos el carrito
  const cartItemCount = cart.length; // Contamos los productos en el carrito

  const [isMobile, setIsMobile] = useState(false); // Estado para verificar si es móvil
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  // Función para verificar el tamaño de la pantalla
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 800); // Si el ancho es menor a 700px, es móvil
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize); // Actualizamos el estado en el cambio de tamaño de ventana
    return () => window.removeEventListener('resize', checkScreenSize); // Limpiamos el event listener
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado para abrir o cerrar el menú
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div>
            <img src="./frontend/public/images/christmas-logo,-happy-new-year-design-template-6d057a64965ff2dc61a80acf14f443f8_screen.jpg" className="logo" alt="" />

        </div>
       
      

     
         {/* Enlaces dentro del menú hamburguesa */}
      {isMobile && menuOpen && (
        <ul className="burger-menu-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      )}
      <div>
        
      </div>
      {/* Menú hamburguesa visible en pantallas pequeñas */}
      {isMobile ? (
        <div className="burger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        // Menú normal para pantallas grandes
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      )}
       {/* Icono de carrito con el contador, visible siempre */}
      <div className="cart-icon">
        <Link to="/cart">
          <span className="icon">🛒</span>
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>

   

    </nav>
  );
};

export default Navbar;