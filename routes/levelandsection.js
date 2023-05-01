const mysql = require("mysql");
const express = require('express');
const router = express.Router();
//This is one of our attempts at trying to display data from the plant database and sending it to the 
//proper areas in the hbs/html.
const plantdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plantdb'
})

plantdb.connect(function(err) {
    if (err) throw err;
    plantdb.query("SELECT * FROM plantdb", function (err, result, fields) {
      if (err) throw err;
    });
  });
module.exports = router;