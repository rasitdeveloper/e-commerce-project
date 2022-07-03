const Product = require('../models/Product')


exports.addProduct = async (req, res) => {
    const addedData = await Product.create(req.body)
    res.json(addedData)
}

exports.getAllProduct = async (req, res) => {
    const data = await Product.find()
    res.json(data)
}

exports.updateProduct = async (req,res) => {
    const { product_id } = req.params;
    const updatedData = await Product.findByIdAndUpdate(product_id, req.body, {new:true})
    res.json(updatedData)
}

exports.deleteProduct = async (req,res) => {
    const { product_id } = req.params;
    const deletedData = await Product.findByIdAndDelete(product_id);
    res.json(deletedData)
}