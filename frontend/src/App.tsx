// //frontend/src/App.tsx

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";  // Asegúrate de que la ruta es correcta
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import ProductList from "./components/ProductList";
// import ProductDetails from "./components/ProductDetails";
// import Cart from "./components/Cart"

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Cart/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Asegúrate de que la ruta es correcta
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";  // Asegúrate de importar el CartProvider

const App = () => {
  return (
    <Router>
      <CartProvider> {/* Envuelve el árbol de componentes con CartProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> {/* El componente Cart está dentro del CartProvider */}
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;