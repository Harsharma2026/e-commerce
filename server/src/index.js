const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {PORT, DB_URI, APP_PREFIX_PATH} = require('./config/config');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index.route');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(APP_PREFIX_PATH,indexRoute);
app.use('/',(req,res,next)=>{res.json({'message':'Connected!'})})
mongoose.connect(DB_URI).then(()=>{
    console.log("Connected to mongodb with URI",DB_URI);
    app.listen(PORT,()=>{console.log('Connected on port ',PORT)})
})