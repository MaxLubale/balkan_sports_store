const express = require('express');
const router = express.Router();

// GET admin logout
router.get('/', function(req, res, next) {
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
