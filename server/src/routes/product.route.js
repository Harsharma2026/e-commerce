const express = require('express');
const productRoutes = express.Router();

const {create, get} = require('../controllers/product.controller')
productRoutes.post('/create',create);
productRoutes.get('/get',get);
module.exports = productRoutes;