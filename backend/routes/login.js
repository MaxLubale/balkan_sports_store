const express = require('express');
var router = express.Router();

// Post login page
router.post('/', function(req, res, next) {
  res.send('Login Page');
});

// POST login form submission
router.post('/', function(req, res, next) {
  const { username, password } = req.body;

  // Example: Check if username and password are valid
  if (username === 'user' && password === 'password') {
    // If valid, create a session (You need to set up session middleware in your app.js)
    req.session.isLoggedIn = true;
    // Redirect to a dashboard or any other authenticated page
    res.redirect('/dashboard');
  } else {
    // If not valid, render the login page again with an error message
    res.send('Invalid username or password');
  }
});

module.exports = router;
