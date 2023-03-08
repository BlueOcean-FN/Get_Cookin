const db = require('../database/index.js');

const addUser = (req, res) => {
  //obv we need to actually hash the user's pw.
  const text = 'INSERT INTO users("hash", "email", "first", "last", "exclusions", "lifestyle") VALUES($1, $2, $3, $4, $5, $6);';
  const values = [req.body.hash,
                  req.body.email,
                  req.body.first,
                  req.body.last,
                  req.body.exclusions,
                  req.body.lifestyle]
  db.query(text, values, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(result.rows[0]);
      res.sendStatus(201);
    }
  })
}

module.exports = addUser;