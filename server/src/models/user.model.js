const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const {JWT_EXPIRE , JWT_SECRET} = require('../config/config');
const uniqueValidator = require('mongoose-unique-validator');
const privateValidator = require('mongoose-private');
const crypto =  require('crypto');
const schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    last_name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true, 
      default:"12334"
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hash_password: {
      type: String,
      private: true,
    },
    salt: {
      type: String,
      private: true,
    },
  },
  {
    timestamps: true,
  },
)

// Plugins
schema.plugin(uniqueValidator)
schema.plugin(privateValidator)

// schema.virtual('name').get(function (this: IUserModel) {
//   return `${this.first_name} ${this.last_name}`
// })

schema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash_password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

schema.methods.validPassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash_password === hash
}

schema.methods.generateJWT = function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
      phone: this.phone
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRE,
    },
  )
}

schema.methods.toAuthJSON = function () {
  const { first_name, last_name, email, id, phone } = this
  return {
    role: {
      first_name,
      last_name,
      userId: id
    },
    email,
    phone,
    token: this.generateJWT(),
  }
}
module.exports = mongoose.model('User', schema);