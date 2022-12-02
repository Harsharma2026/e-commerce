const Product = require('../models/product.model');

const create = async (req,res,next) => {
    const {name,description,features,amount,image} = req.body;
    const product = new Product({
        name,
        description,
        features,
        amount,
        image
    });
    await product.save();
    res.json({
        status:true,
        data:{
            message:"Product created!"
        }
    })
}
const get = async (req,res,next) => {
    const products = await Product.find();
    res.json({
        status: true,
        data: {
            products
        }
    })
}
module.exports = {create,get}