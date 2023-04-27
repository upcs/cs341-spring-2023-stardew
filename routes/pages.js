const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.hbs");
});

router.get("/produce", (req, res) => {
    res.render("produce.hbs");
});

router.get("/contact", (req,res) => {
    res.render("contact.hbs");
});

router.get("/signup", (req, res) => {
    res.render("signup.hbs");
});

router.get("/login", (req, res) => {
    res.render("login.hbs");
});

router.get("/forgot", (req, res) => {
    res.render("forget.hbs");
});

router.get("/change", (req, res) => {
    res.render("change.hbs");
});

router.get("/farm", authController.isLoggedIn, (req, res) => {
  console.log(req.user);
    if( req.user ) {
      res.render('farm.hbs', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
});

router.get("/export", (req, res) => {
  res.render("export_page.hbs");
});


router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log(req.user);
    if( req.user ) {
      res.render('profile.hbs', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
    
  });

module.exports = router;