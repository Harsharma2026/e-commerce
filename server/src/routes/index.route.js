const express = require('express');
const indexRoute = express.Router();

const authRoutes = require('./auth.route')
const userRoutes = require('./user.route')
const productRoutes = require('./product.route')
indexRoute.use('/auth',authRoutes)
indexRoute.use('/user',userRoutes)
indexRoute.use('/product',productRoutes)
module.exports = indexRoute;