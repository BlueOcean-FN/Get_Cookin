const db = require('../database/index.js');

const getProfile = (req, res) => {
  console.log('user_id:', req.query.user_id);
  const query = `SELECT lifestyle, exclusions, first, last, email FROM users WHERE id=${req.query.user_id}`
  db.query(query)
  .then(results => {
    let isChecked = JSON.parse(results.rows[0].lifestyle);
    let exclusions = JSON.parse(results.rows[0].exclusions);
    isChecked.exclusions = exclusions;

    let personalInfo = {first: results.rows[0].first,
                        last: results.rows[0].last,
                        email: results.rows[0].email}

    let payload = {personalInfo: personalInfo, isChecked: isChecked}
    res.send(JSON.stringify(payload));
  })
}
module.exports = getProfile;