const axios = require('axios');

const recipeSearch = (req, res) => {
  console.log(req.query);
  let queryString = `https://api.edamam.com/api/recipes/v2/?app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`
  for (let ingredient of req.query.q) {
    queryString += `&q=${ingredient}`;
  }
  for (let filter of req.query.excluded) {
    queryString += `&excluded=${filter}`;
  }
  axios(queryString)
  .then(results => {
    // console.log(results.data);
    // res.send(JSON.stringify(results.data));
  })
}

module.exports = recipeSearch;