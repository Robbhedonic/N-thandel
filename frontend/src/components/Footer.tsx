
// frontend/src/components/Footer.tsx

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-message">
          Wishing you a Merry Christmas and a Happy New Year!
        </p>
        <div className="footer-links">
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/products" className="footer-link">Products</Link>
        </div>
       
         <p className="footer-text">
          &copy; 2024 Holiday Wonderland. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;