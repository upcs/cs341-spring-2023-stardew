const mysql = require("mysql");
const express = require('express');
const router = express.Router();

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
      console.log(result);
    });
  });
module.exports = router;