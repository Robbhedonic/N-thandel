//frontend/src/App.tsx
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";  // Verifica que la ruta sea correcta
import ProductDetails from "./components/ProductDetails";  // Verifica que la ruta sea correcta

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


// frontend/src/App.tsx
// // import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductList from "./components/ProductList";  // Verifica que la ruta sea correcta
// import ProductDetails from "./components/ProductDetails";  // Verifica que la ruta sea correcta

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;