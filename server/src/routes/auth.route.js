const express = require('express');
const authRoutes = express.Router();

const {loginController,signupController} = require('../controllers/auth.controller')
authRoutes.post('/login',loginController);
authRoutes.post('/signup',signupController)
module.exports = authRoutes;