const express = require('express');
const travellerRoutes = express.Router();

const {create, getById} = require('../controllers/traveller.controller')
travellerRoutes.post('/create',create);
travellerRoutes.post('/getById',getById);
module.exports = travellerRoutes;