const db = require('./database/index.js');

const addUser = (req, res) => {
  const text = 'INSERT INTO users(hash, email, first, last, exclusions, lifestyle) VALUES($1, $2, $3, $4, $5, $6';
  const values = [req.body.hash,
                  req.body.email,
                  req.body.first,
                  req.body.last,
                  req.body.exclusions,
                  req.body.lifestyle]
  db.query(text, values, (err, res) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      console.log(res.rows[0]);
      res.send(201);
    }
  })
}

module.exports = addUser;