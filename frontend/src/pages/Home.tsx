// frontend/src/pages/Home.tsx

// import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Holiday Wonderland!</h1>
      <p>Celebrate the magic of Christmas with us!</p>

      <div className="christmas-decorations">
        <img
          src="/frontend/public/images/green-christmas-background-te4jpvc1grxpl7nr.jpg"
          alt="Christmas Tree"
          className="christmas-tree"
        />
      </div>

      <p className="holiday-message">
        Shop our exclusive Christmas collection and make this season unforgettable!
      </p>

      <button className="shop-now-btn"><Link to="/products">Go to Shop</Link></button>

      <div className="footer">
        <p>Wishing you a Merry Christmas and a Happy New Year!</p>
      </div>
    </div>
  );
};

export default Home;