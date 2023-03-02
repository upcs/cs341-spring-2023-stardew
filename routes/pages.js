const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.hbs");
});

router.get("/signup", (req, res) => {
    res.render("signup.hbs");
});

router.get("/login", (req, res) => {
    res.render("login.hbs");
});

module.exports = router;