const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const { verifyAccessToken } = require('../helpers/jwt');

//Routes
router.post('/register', authController.Register);
router.get('/me', verifyAccessToken, authController.Me);

module.exports = router;