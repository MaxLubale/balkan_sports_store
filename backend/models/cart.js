const mongoose = require('mongoose');

// Define the Schema for the shopping cart
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
  }],
  total: { type: Number, default: 0 }
});

// Create the Cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
