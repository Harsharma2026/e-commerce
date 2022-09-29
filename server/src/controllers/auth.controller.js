const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status')
const loginController = async (req,res,next) => {
    const { email, password } = req.body
    // console.log(email,password);
    const user =  await User.findOne({ email })
    if (!user || !user.validPassword(password))
      throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, 'Invalid email or password')
    res.json({ message: 'Login success.', data: user.toAuthJSON() })
}
const signupController = async (req,res,next) => {
    const { first_name, last_name, email, password, phone } = req.body
    const user = new User()
    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.phone = phone
    user.setPassword(password)
    await user.save()

    res.json({
      status: true,
      message: 'User successfully created!',
      data: user.toAuthJSON(),
    })
}
module.exports = {loginController,signupController}