const Traveller = require('../models/traveller.model');

const create = async(req,res,next) => {
    const {firstName,lastName,userId,date,from,destination,time} = req.body;
    const travller = new Traveller();
    travller.firstName = firstName
    travller.lastName = lastName
    travller.userId = userId
    travller.date = date
    travller.from = from
    travller.destination = destination.toLowerCase()
    travller.time = time
    await travller.save();
    res.json({
        status:true,
        data:{
            message:"Traveller acknowledged!"
        }
    })
}
const getById = async(req,res,next) => {
    const {travellerId} = req.body;
    const travller = Traveller.findById(travellerId);
    res.json({
        status:true,
        data:{
            message:travller
        }
    })
}
module.exports = {create,getById}
