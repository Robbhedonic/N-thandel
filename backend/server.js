// backend/server.js
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


// import express from 'express';
// import cors from 'cors';
// import productRoutes from './routes/products.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Servir archivos estáticos desde la carpeta 'public/uploads'
// app.use('/uploads', express.static('public/uploads'));

// // Usar las rutas de productos
// app.use('/api/products', productRoutes);

// // Ruta raíz para probar el servidor
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando');
// });

// // Definir el puerto donde se ejecutará el servidor
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


// backend/server.js

// import express from 'express';
// import cors from 'cors';
// import productRoutes from './routes/products.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Servir archivos estáticos desde 'frontend/public/images'
// app.use('/images', express.static('frontend/public/images'));

// app.use('/api/products', productRoutes);

// // Ruta raíz para probar el servidor
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando');
// });

// // Definir el puerto donde se ejecutará el servidor
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });



// import express from 'express';
// import cors from 'cors';
// import productRoutes from './routes/products.js';
// import path from 'path';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Servir archivos estáticos desde la carpeta 'frontend/public/images'
// app.use('/images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images')));

// app.use('/api/products', productRoutes);

// // Ruta raíz para probar el servidor
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando');
// });

// // Definir el puerto donde se ejecutará el servidor
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


// // backend/server.js

// import express from 'express';
// import cors from 'cors';
// import path from 'path'; // Importa el módulo path
// import productRoutes from './routes/products.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Usar import.meta.url para obtener la ruta del directorio
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// // Sirve archivos estáticos desde 'frontend/public/images'
// app.use('/images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images')));

// app.use('/api/products', productRoutes);

// // Ruta raíz para probar el servidor
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando');
// });

// // Definir el puerto donde se ejecutará el servidor
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });




// // backend/server.js

// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import productRoutes from './routes/products.js';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Servir archivos estáticos desde 'frontend/public/images'
// app.use('/images', express.static(path.join(__dirname, '..', 'frontend', 'public', 'images')));

// app.use('/api/products', productRoutes);

// // Ruta raíz para probar el servidor
// app.get('/', (req, res) => {
//   res.send('Servidor funcionando');
// });

// // Definir el puerto donde se ejecutará el servidor
// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import path from 'path'; // Asegurarse de importar path
import productRoutes from './routes/products.js';

const app = express();

app.use(cors());
app.use(express.json());

// Usar express.static para servir las imágenes desde el frontend/public/images
app.use('/images', express.static(path.resolve('frontend', 'public', 'images')));

app.use('/api/products', productRoutes);

// Ruta raíz para probar el servidor
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Definir el puerto donde se ejecutará el servidor
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});