const uniqueValidator = require('mongoose-unique-validator');
const privateValidator = require('mongoose-private');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
productSchema.plugin(uniqueValidator)
productSchema.plugin(privateValidator)

module.exports = mongoose.model('Product', productSchema);