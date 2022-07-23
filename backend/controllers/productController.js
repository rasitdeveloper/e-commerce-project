const Product = require('../models/Product')


exports.addProduct = async (req, res, next) => {
    // const addedData = await Product.create(req.body)
    // res.json(addedData)
    const input = req.body;
    try {
        input.photos = JSON.parse(input.photos);

        const product = new Product(input);
		const addedData = await product.save();

        res.json(addedData);
    } catch (e) {
        console.log(e);
        next(e);
    }
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

exports.getSingleProduct = async (req,res) => {
    const { product_id } = req.params;
    const productData = await Product.findById(product_id);
    res.json(productData)
}

const limit = 12;
exports.getTwelveProducts = async (req,res) => {
    let { page } = req.query;
    if (page < 1) {page = 1;}
    const skip = (parseInt(page) - 1) * limit;
    const products = await Product.find({})
        .sort({"createdAt": -1}) // last added first
        .skip(skip)
        .limit(limit);
    res.json(products)
}