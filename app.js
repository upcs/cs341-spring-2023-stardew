const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env'});// To store some sensitive data that relates to cookie password

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

const plantdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'plantdb'
})


const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');


//checks to see if the mysql's is fully connected or not
db.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else{
        console.log("MySQL is in")
    }
})

plantdb.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else{
        console.log("MySQL is in")
    }
})

app.use('/',require('./routes/pages'));

app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {//starts website on port 3000
    console.log("Server started on Port 3000");
})