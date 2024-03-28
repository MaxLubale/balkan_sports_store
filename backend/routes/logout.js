const express = require('express');
const router = express.Router();

// GET logout
router.get('/', function(req, res, next) {
  // Handle logout logic here
  // This could involve destroying the session, clearing cookies, etc.
  res.send('Logged out'); // Example response for successful logout
});

module.exports = router;