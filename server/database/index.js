const { Pool, Client } = require('pg')
require('dotenv').config({});

const poolConfig = {
  user: process.env(DB_USER),
  host: process.env(DB_HOST),
  database: process.env(DB_NAME),
  port: process.env(DB_PORT)
}
process.env(DB_PASS) && poolConfig.password = process.env(DB_PASS)

const pool = new Pool(poolConfig)

module.exports = pool;