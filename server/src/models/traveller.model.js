const uniqueValidator = require('mongoose-unique-validator');
const privateValidator = require('mongoose-private');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const travellerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate:true
    },
    from: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type:String,
        required: true
    }
})
travellerSchema.plugin(uniqueValidator)
travellerSchema.plugin(privateValidator)
travellerSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Traveller', travellerSchema);