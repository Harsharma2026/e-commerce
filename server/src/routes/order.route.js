const express = require('express');
const productRoutes = express.Router();

const {create, getById} = require('../controllers/order.controller')
productRoutes.post('/create',create);
productRoutes.post('/getById',getById);
module.exports = productRoutes;