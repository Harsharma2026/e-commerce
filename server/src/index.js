const express = require('express');
const app = express();
app.use('/',(req,res,next)=>{res.json({'message':'Connected!'})})
app.listen(3001,()=>{console.log('Connected on port 3001!')})