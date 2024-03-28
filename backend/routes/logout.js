const express = require('express');
var router = express.Router();

// Post logout
router.post('/', function(req, res, next) {
  // Destroy the session
  req.session.destroy(function(err) {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      // Redirect the user to the login page or any other page as needed
      res.redirect('/login');
    }
  });
});

module.exports = router;
