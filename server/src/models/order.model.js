const uniqueValidator = require('mongoose-unique-validator');
const privateValidator = require('mongoose-private');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products:{
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: false
    },
    totalAmount: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: false
    }
})
orderSchema.plugin(uniqueValidator)
orderSchema.plugin(privateValidator)

module.exports = mongoose.model('Order', orderSchema);