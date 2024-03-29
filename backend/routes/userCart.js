const express = require('express');
var router = express.Router();
const Cart = require('../models/cart');

// GET route to fetch all items in the user's cart
router.get('/', async (req, res, next) => {
  try {
    // Check if user is authenticated and get the user ID
    const userId = req.user._id; // Assuming user ID is available in the request object

    // Find the user's cart in the database
    const cart = await Cart.findOne({ user: userId }).populate('items.product');

    // If user's cart found, send the cart items as a response
    if (cart) {
      res.json(cart.items);
    } else {
      // If user's cart not found, send an empty array
      res.json([]);
    }
  } catch (error) {
    // If there's an error, forward it to the error handler middleware
    next(error);
  }
});

module.exports = router;
