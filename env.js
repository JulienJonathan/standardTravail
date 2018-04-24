require('dotenv').config();

ENV = process.env.ENV
DB_NAME = process.env.DB_NAME
DB_USER = process.env.DB_USER
DB_PASSWORD = process.env.DB_PASSWORD
DB_HOST = process.env.DB_HOST
DB_PORT = process.env.DB_PORT
module.exports = {
  ENV,
  DB_NAME,
  DB_USER,
  DB_HOST,
  DB_PASSWORD,
}
