const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

//Routes
router.post('/add-product', productController.addProduct);
router.get('/get-all-product', productController.getAllProduct);
router.put('/update-product/:product_id', productController.updateProduct);
router.delete('/update-product/:product_id', productController.deleteProduct);


module.exports = router;