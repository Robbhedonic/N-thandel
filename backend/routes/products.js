import express from "express";
import products from "../data/products.js"; // Ruta hacia los datos

const router = express.Router();

// Ruta para listar todos los productos
router.get("/", (req, res) => {
    res.json(products);
});

// Ruta para obtener un producto por ID
router.get("/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send("Producto no encontrado");
    res.json(product);
});

export default router;