var mysql = require('mysql');

// connecting to db
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'homeOnlineShopping'
  })

connection.connect((err) => {
    if(err) throw err;
    console.log('DB Connected to Homely');
  })

  module.exports = connection;
  

