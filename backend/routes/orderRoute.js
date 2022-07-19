const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController')

router.post('/', orderController.CreateOrder);
router.get('/', orderController.GetOrders);

module.exports = router;