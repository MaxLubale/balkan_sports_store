const express = require('express');
var router = express.Router();
const Admin = require('../models/admin');

// POST route to register a new admin user
router.post('/', async (req, res, next) => {
  try {
    // Extract admin registration data from the request body
    const { username, password, email } = req.body;

    // Create a new admin user in the database
    const newAdmin = new Admin({ username, password, email });
    await newAdmin.save();

    // Send a success response
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    // If there's an error, forward it to the error handler middleware
    next(error);
  }
});

module.exports = router;
