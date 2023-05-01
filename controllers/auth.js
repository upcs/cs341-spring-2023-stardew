const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const db = mysql.createConnection({ //connect to user database
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

//method for the login
exports.login = async (req, res) => {
  try{
    const { email, password } = req.body; //take in the email and password from login.hbs form submit

    if( !email || !password ){//If no email and password were inputed
      return res.status(400).render('login', {
        message: 'Need email and pass inputed'
      })
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      if( !results || !results[0] || !(await bcrypt.compare(password, results[0].password)) ) {
        res.status(401).render('login', {//If email and/or password were invalid. Display error on page
          message: 'Email or Password is wrong, please try again.'
        })
      } else {
        const id = results[0].id;

        //creates cookies/token that store login in user data to tell the website who is currently logged in.
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN
        });
        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        }

        res.cookie('jwt', token, cookieOptions );
        res.status(200).redirect("/profile");//sends user to profile page.
      }

    })

  } catch (error){
    console.log(error);
  }
}

//method for signup new user
exports.signup = (req, res) => {

  const { email, password } = req.body;

  //checks the entered user data to see if the email is already in the database
  db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
    if(error) {
      console.log(error);
    }

    if( results.length > 0 ) {
      return res.render('signup', {//if there the email does exist then user needs a different email
        message: 'That email is already in use'
      })
    } 

    //take the password and encrypts it, then stores it in the database
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    db.query('INSERT INTO users SET ?', {email: email, password: hashedPassword }, (error, results) => {
      if(error) {
        console.log(error);
      } else {
        return res.render('login', {//send user to login page and tells them that it was a success.
          message: 'User registered'
        });
      }
    })


  });

}

//The function to help identify if a user is logged in.
exports.isLoggedIn = async (req, res, next) => {
  if( req.cookies.jwt) {
    try {
      // verify the token
      const decoded = await promisify(jwt.verify)(req.cookies.jwt,
      process.env.JWT_SECRET
      );


      // Check if the user still exists
      db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (error, result) => {

        if(!result) {
          return next();
        }
        req.user = result[0];
        return next();

      });
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    next();
  }
}

//Function for logging out the user
exports.logout = async (req, res) => {
  //deletes the cookie/token that indicates login status
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 2*1000),
    httpOnly: true
  });

  res.status(200).redirect('/'); // sends to home page.
}