const { Pool, Client } = require('pg')
require('dotenv').config({});

const clientConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}
if (process.env.DB_PASS) {
  clientConfig.password = process.env.DB_PASS;
}

const client = new Client(clientConfig);
const db = client.connect()
.then(connection => {
  console.log(`connected to db ${process.env.DB_NAME}`);
})
module.exports = client;

// const pool = new Pool(poolConfig)

// const db = pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   } else {
//     console.log('client connected to db!');
//     console.log(client);
//     module.exports = client;
//   }

// })

// module.exports = db;