const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
