const express = require('express');
const orderRoutes = express.Router();

const {updateController,getCart, deleteCartProduct} = require('../controllers/user.controller')
orderRoutes.patch('/updateCart',updateController);
orderRoutes.post('/getCart',getCart);
orderRoutes.post('/deleteCart',deleteCartProduct);
module.exports = orderRoutes;