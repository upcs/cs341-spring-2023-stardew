const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

exports.login = async (req, res) => {
  try{
    const { email, password } = req.body;

    if( !email || !password ){
      return res.status(400).render('login', {
        message: 'Need email and pass inputed'
      })
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      console.log(results);
      if( !results || !results[0] || !(await bcrypt.compare(password, results[0].password)) ) {
        res.status(401).render('login', {
          message: 'Email or Password is incorrect'
        })
      } else {
        const id = results[0].id;

        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN
        });
        
        console.log("The token is: " + token);

        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        }

        res.cookie('jwt', token, cookieOptions );
        res.status(200).redirect("/");
      }

    })

  } catch (error){
    console.log(error);
  }
}


exports.signup = (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
    if(error) {
      console.log(error);
    }

    if( results.length > 0 ) {
      return res.render('signup', {
        message: 'That email is already in use'
      })
    } 

    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    db.query('INSERT INTO users SET ?', {email: email, password: hashedPassword }, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render('login', {
          message: 'User registered'
        });
      }
    })


  });

}