const db = require('../database/index.js');

const findUser = (req, res, next) => {
  console.log(req.body);
  const text = `SELECT * FROM users WHERE hash = $$${req.body.password}$$ AND email = $$${req.body.email}$$;`;

  db.query(text, (err, result) => {
    if (err) console.log(err);
    console.log(result.rows[0]);
    req.database = result.rows[0];
    next()
  })
}

module.exports = findUser;