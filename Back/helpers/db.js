const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sarahwilsoncook',
  password: 'WilLoui1',
  database: 'homer',
});
module.exports = connection;
