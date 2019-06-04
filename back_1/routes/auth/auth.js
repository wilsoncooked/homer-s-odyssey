const express = require('express');
const connection = require('../../helpers/db');
const router = express.Router();

router.post('/signup', (req, res, next) => {
  let post = req.body;

  connection.query('INSERT INTO users SET ?', post, function(error, result) {
    if (error) res.sendStatus(500).end();
    res.end();
  });
});

module.exports = router;
