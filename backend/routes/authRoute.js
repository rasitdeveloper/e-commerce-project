const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')

//Routes
router.post('/register', authController.register);

module.exports = router;