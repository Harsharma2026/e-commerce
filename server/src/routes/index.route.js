const express = require('express');
const indexRoute = express.Router();

const authRoutes = require('./auth.route')
const userRoutes = require('./user.route')
const productRoutes = require('./product.route')
const travellerRoutes = require('./traveller.route');
const orderRoutes = require('./order.route');
indexRoute.use('/auth',authRoutes)
indexRoute.use('/user',userRoutes)
indexRoute.use('/product',productRoutes)
indexRoute.use('/traveller',travellerRoutes)
indexRoute.use('/order',orderRoutes)
module.exports = indexRoute;