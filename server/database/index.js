const { Pool, Client } = require('pg')
require('dotenv').config({});

const poolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}
if (process.env.DB_PASS) {
  poolConfig.password = process.env.DB_PASS;
}

const pool = new Pool(poolConfig)

const db = pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  } else {
    console.log('client connected!');
  }

})

module.exports = pool;