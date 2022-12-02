const User = require('../models/user.model');
const { use } = require('../routes/product.route');

const updateController = async (req,res,next) =>{
    const {userId , productId } = req.body;
    const user =  await User.findById(userId);
    user.cart = [...user.cart , productId]
    await user.save();
    res.json({
        status:true,
        data:{
            message: 'Updated cart successfully!'
        }
    })
}
const deleteCartProduct = async(req,res,next) => {
    const {userId , productId } = req.body;
    const user =  await User.findById(userId);
    const cart = user.cart;
    const updatedCart = cart.filter(item => item._id != productId)
    console.log(updatedCart)
    user.cart = updatedCart;
    await user.save();
    res.json({
        success:true,
        data:{
            message:"Product deleted succesfully"
        }
    })
}
const getCart = async(req,res,next) => {
    const {userId} = req.body;
    const user =  await User.findById(userId);
    res.json({
        status:true,
        data:{
            products: user.cart
        }
    })
}
module.exports = {updateController,getCart,deleteCartProduct}