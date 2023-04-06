const express = require('express');
const router = express.Router();

const plantdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plantdb'
})

plantdb.query('SELECT * FROM ')
module.exports = router;