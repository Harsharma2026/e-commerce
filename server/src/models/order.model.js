const uniqueValidator = require('mongoose-unique-validator');
const privateValidator = require('mongoose-private');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate:true
    },
    products:{
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: false,
        autopopulate:true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    shippingAddress: {
        type: String,
        required: false
    },
    shippingName:{
        type: String,
        required:true
    },
    shippingEmail: {
        type: String,
        required:true
    },
    paymentStatus:{
        type:String,
        required:true
    },
    country: {
        type: String,
        required:true
    },
    traveller:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Traveller',
        autopopulate:true
    }
})
orderSchema.plugin(uniqueValidator)
orderSchema.plugin(privateValidator)
orderSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Order', orderSchema);