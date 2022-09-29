require('dotenv').config();
const ENVIRONMENT = process.env.APP_ENV || 'dev'
const IS_PRODUCTION = ENVIRONMENT === 'production'
const ALLOWED_URL = process.env.ALLOWED_URL
const IS_TEST = ENVIRONMENT === 'test'
const PORT = Number(process.env.PORT) || 8000

const DB_USERNAME = process.env.DB_USERNAME || 'test'
const DB_PASSWORD = process.env.DB_PASSWORD || DB_USERNAME
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/test'

const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/'
const JWT_SECRET = process.env.JWT_SECRET || 'somerandomkeyherena'
const JWT_EXPIRE = process.env.JWT_EXPIRE || '1y'

exports.ENVIRONMENT = ENVIRONMENT;
exports.ALLOWED_URL = ALLOWED_URL;
exports.IS_PRODUCTION = IS_PRODUCTION;
exports.IS_TEST = IS_TEST;
exports.PORT = PORT;
exports.DB_URI = DB_URI;
exports.DB_USERNAME = DB_USERNAME;
exports.DB_PASSWORD = DB_PASSWORD;
exports.APP_PREFIX_PATH = APP_PREFIX_PATH;
exports.JWT_SECRET = JWT_SECRET;
exports.JWT_EXPIRE = JWT_EXPIRE;