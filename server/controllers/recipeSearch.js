const axios = require('axios');

const recipeSearch = (req, res) => {
  axios(`https://api.edamam.com/api/recipes/v2/?q=${req.query.q}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`)
  .then(results => {
    res.send(JSON.stringify(results.data));
  })

}

module.exports = recipeSearch;