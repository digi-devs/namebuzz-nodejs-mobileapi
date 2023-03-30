// Database Connection
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'sql876.main-hosting.eu',
    user: 'u624153904_namebuzz', //
    password: 'Name@buzz1234', //
    database: 'u624153904_namebuzz',
    max: 10,
    connectionTimeoutMillis: 1000,
    idleTimeoutMillis: 1000
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection
//