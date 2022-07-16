const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const { verifyAccessToken } = require('../helpers/jwt');

//Routes
router.post('/register', authController.Register);
router.post('/logout', authController.Logout);
router.get('/me', verifyAccessToken, authController.Me);
router.post('/login', authController.Login);

module.exports = router;