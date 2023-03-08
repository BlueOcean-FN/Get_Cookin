const db = require('../database/index.js');

const saveRecipe = (req, res) => {
  db.query(`SELECT id FROM users WHERE email=${req.body.email}`, (err, res_ => {
    if (err) {
      console.log(err);
      res.send(500);
    }
    const user_id = res.rows[0];
    const text = 'INSERT INTO recipes(name, url, image_url) VALUES($1, $2, $3)';
    const values = [req.body.name,
                    req.body.url,
                    req.body.image_url]
  }))
}

module.exports = saveRecipe;