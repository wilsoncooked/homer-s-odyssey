const express = require('../../node_modules/express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {
  const {flash, ...newUser} = req.body;
  connection.query('INSERT INTO users SET ?', newUser, function(
    error,
    result,
    field,
  ) {
    if (error) res.status(500).json({flash: error.message});
    else res.status(200).json({flash: 'User has been signed up!'});
  });
});

module.exports = router;
