const express = require('express');
var router = express.Router();
const Product = require('../models/product');

// POST route to add a new product
router.post('/', async (req, res, next) => {
  try {
    // Extract product data from the request body
    const { name, price, description, category } = req.body;

    // Create a new product in the database
    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();

    // Send a success response
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    // If there's an error, forward it to the error handler middleware
    next(error);
  }
});

module.exports = router;