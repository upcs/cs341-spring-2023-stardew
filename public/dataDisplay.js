const mysql = require("mysql");
const express = require('express');


const plantdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plantdb'
})