const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const recipeSearch = (req, res) => {
  console.log(process.env, '=================================');
  axios(`https://api.edamam.com/api/recipes/v2/?q=${req.query.q}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`)
  .then(results => {
    res.send(JSON.stringify(results.data));
  })
  .catch(err => console.log('err happened'))
}

module.exports = recipeSearch;