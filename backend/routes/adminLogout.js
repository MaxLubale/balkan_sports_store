const express = require('express');
var router = express.Router();

// Post admin logout
router.post('/', function(req, res, next) {
  // Destroy admin session
  req.session.destroy(function(err) {
    if (err) {
      console.error(err);
      res.status(500).send('Error logging out');
    } else {
      res.send('Admin Logged out');
    }
  });
});

module.exports = router;
