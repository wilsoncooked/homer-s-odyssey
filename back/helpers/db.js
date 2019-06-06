const mysql = require('../node_modules/mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'WilLoui1',
  database: 'homer',
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
