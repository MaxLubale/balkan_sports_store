const express = require('express');
var router = express.Router();
const User = require('../models/user');

// POST route to register a new user
router.post('/', async (req, res, next) => {
  try {
    // Extract user registration data from the request body
    const { username, password, email } = req.body;

    // Create a new user in the database
    const newUser = new User({ username, password, email });
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // If there's an error, forward it to the error handler middleware
    next(error);
  }
});

module.exports = router;
