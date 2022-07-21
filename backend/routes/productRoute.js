const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

//Routes
router.post('/add-product', productController.addProduct);
router.get('/get-all-product', productController.getAllProduct);
router.get('/get-single-product/:product_id', productController.getSingleProduct);
router.put('/update-product/:product_id', productController.updateProduct);
router.delete('/delete-product/:product_id', productController.deleteProduct);
router.get('/get-twelve-products', productController.getTwelveProducts);


module.exports = router;