const express = require('../../node_modules/express');
const connection = require('../../helpers/db');
const router = express.Router();

router.post('/signup', function(req, res, next) {
  const {flash, ...newUser} = req.body;
  connection.query('INSERT INTO users SET ?', newUser, function(
    error,
    result,
    field,
  ) {
    if (error) res.status(500).json({flash: error.message});
    else res.status(200).json({flash: 'User has been signed up!'});
    res.end();
  });
});

module.exports = router;
