// // backend/server.js
// import express from "express";
// import cors from "cors";
// import productRoutes from "./routes/products.js"; // Ruta correcta

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Rutas
// app.use("/api/products", productRoutes);

// // Ruta raíz de prueba
// app.get("/", (req, res) => {
//     res.send("Servidor funcionando");
// });

// // Puerto
// const PORT = 5001;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });




import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Importar para manejar __dirname
import productRoutes from "./routes/products.js"; // Ruta correcta

const app = express();

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Servir imágenes estáticas
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Rutas
app.use("/api/products", productRoutes);

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Puerto
const PORT = 5001; // Mantener consistente con el frontend
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
