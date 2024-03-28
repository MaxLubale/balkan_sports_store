var express = require('express');
var router = express.Router();
var Product = require('../models/product');

// GET all products
router.get('/', async (req, res, next) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});
    
    // Send the products as a JSON response
    res.json(products);
  } catch (error) {
    // If there's an error, forward it to the error handler middleware
    next(error);
  }
});

module.exports = router;
