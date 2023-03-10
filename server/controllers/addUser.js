const db = require('../database/index.js');

const addUser = (req, res, next) => {
  if (req.database) return res.sendStatus(400);

  const keys = Object.keys(req.body)
  for (let i = 0; i < keys.length; i++) {
    if (!req.body[keys[i]]) req.body[keys[i]] = null;
  }

  const text = 'INSERT INTO users("hash", "email", "first", "last", "exclusions", "lifestyle") VALUES($1, $2, $3, $4, $5, $6) RETURNING *;';
  const values = [
    req.body.password,
    req.body.email,
    req.body.first,
    req.body.last,
    req.body.exclusions,
    req.body.lifestyle
  ];
  db.query(text, values, (err, result) => {
    if (err && err.code === '23502') {
      return res.sendStatus(500);
    } else if (err && err.code === '23505') {
      return res.sendStatus(400);
    } else if (err) {
      return res.sendStatus(501)
    }
    req.database = result.rows[0];
    next()
  })
}

module.exports = addUser;