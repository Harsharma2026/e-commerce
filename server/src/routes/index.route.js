const express = require('express');
const indexRoute = express.Router();

const authRoutes = require('./auth.route')
indexRoute.use('/auth',authRoutes)
module.exports = indexRoute;