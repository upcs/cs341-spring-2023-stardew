const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

//used to send the methods the routes for it to use 
router.post("/signup",authController.signup );
router.post("/login",authController.login );
router.get("/logout", authController.logout );

module.exports = router;