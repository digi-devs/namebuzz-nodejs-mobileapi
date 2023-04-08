// Database Connection
var mysql = require('mysql')

// Pooled Connection
var pool  = mysql.createPool({
  host:'sql876.main-hosting.eu',
  user:'u624153904_namebuzz',
  password:'Name@buzz1234',
  database:'u624153904_namebuzz',
});

pool.getConnection(function (error, connection) {
  if (error) throw error;
  console.log('Pool Database Connected')
});

module.exports = pool
