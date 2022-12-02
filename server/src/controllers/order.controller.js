const User = require('../models/user.model');
const Order = require('../models/order.model');
const Traveller = require('../models/traveller.model');

const create = async (req,res,next) => {
    const {userId,country,address,city,state,zipcode,name,email} = req.body;
    console.log(country)
    const user = await  User.findById(userId);
    const order = new Order();
    order.userId = userId;
    let totalAmount = 0;
    let prodArray = [];
    for(let prod in user.cart){
        totalAmount+=Number(user.cart[prod].amount);
        prodArray.push(user.cart[prod]._id)
    }
    order.products = prodArray;
    order.totalAmount = totalAmount+54;
    console.log(totalAmount)
    order.shippingAddress = address+' ,'+city+' ,'+state+' ,'+country+' -'+zipcode;
    order.country = country;
    order.shippingName = name;
    order.shippingEmail = email
    order.paymentStatus = "PAID"
    const traveller = (await Traveller.find({"destination":country.toLowerCase()}))[0];
    console.log(traveller);
    order.traveller = traveller._id;
    await order.save();
    user.cart = [];
    await user.save();
    res.json({
        status:true,
        data:{
            message:"Order placed!",
            id:order._id
        }
    })
}
const getById = async (req,res,next) =>{
    const {orderId} = req.body;
    const order = await Order.findById(orderId);
    res.json({
        status:true,
        message:{
            data:order
        }
    })
}
module.exports = {create,getById}