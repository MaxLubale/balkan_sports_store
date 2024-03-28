const express = require('express');
var router = express.Router();

// GET admin login page
router.post('/', function(req, res, next) {
  res.send('Admin Login Page');
});

// POST admin login form submission
router.post('/', function(req, res, next) {
  const { username, password } = req.body;

  // Check if username and password are valid (example: hardcoded credentials for demonstration)
  if (username === 'admin' && password === 'adminpassword') {
    // Set a session variable to indicate admin is logged in
    req.session.isAdminLoggedIn = true;
    res.send('Admin Login Successful');
  } else {
    res.status(401).send('Unauthorized'); // Unauthorized status if login fails
  }
});

module.exports = router;
