const db = require('../database/index.js');

//await db.query(`INSERT INTO users_recipes (user_id, recipe_id, type, date) VALUES($1, $2, $3, CURRENT_TIMESTAMP);`, [user_id.rows[0].id, recipe_id.rows[0].id, users_recipesQueryObject.type]);

const saveToProfile = (req, res) => {

  const exclusions = JSON.stringify(req.body.params.settings.exclusions);

  delete req.body.params.settings.exclusions;
  const lifestyle = JSON.stringify(req.body.params.settings);

  const query = `UPDATE users SET exclusions=$1, lifestyle=$2 WHERE id=${req.body.params.user_id}`;
  const values = [exclusions, lifestyle]
  db.query(query, values)
  .then(result => {
    console.log('results:', result);
    res.sendStatus(201);
  })
  .catch(err => {
    console.log('error:', err);
    res.sendStatus(500);
  })
}

module.exports = saveToProfile;