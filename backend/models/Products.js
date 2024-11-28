
//backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  imagePath: String // Ruta de la imagen del producto
});

module.exports = mongoose.model('Product', productSchema);