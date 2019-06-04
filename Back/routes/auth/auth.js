const express = require('express');
const router = express.Router();

router.post('/signup', function(req, res, next) {
  res.send({
    email: 'my@email.com',
    password: 'myPassw0rd',
    name: 'James',
    lastname: 'Bond',
  });
});

module.exports = router;
