const express = require('express');
const connection = require('../../helpers/db');
const router = express.Router();

router.post('/signup', (req, next) => {
  let post = req.body;

  connection.query('INSERT INTO users SET ?', post, function(error, res) {
    if (error) res.status(500).end();
    res.end();
  });
});

module.exports = router;
