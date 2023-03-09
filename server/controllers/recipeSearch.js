const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const recipeSearch = (req, res) => {

  let queryString = `https://api.edamam.com/api/recipes/v2/?app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`
  for (let ingredient of req.query.q) {
    queryString += `&q=${ingredient}`;
  }
  for (let filter of req.query.excluded) {
    queryString += `&excluded=${filter}`;
  }
  axios(queryString)
  .then(results => {
    let content = results.data.hits;
    let resultArray = [];
    for (let recipe of content) {
      resultArray.push({
        label: recipe.recipe.label,
        image: recipe.recipe.image,
        url: recipe.recipe.url,
        serveSize: recipe.recipe.yield,
        dietLabels: recipe.recipe.dietLabels,
        healthLabels: recipe.recipe.healthLabels,
        cautions: recipe.recipe.cautions,
        ingredients: recipe.recipe.ingredients,
        calories: recipe.recipe.calories,
        totalTime: recipe.recipe.totalTime
      })
    }
    res.send(JSON.stringify(resultArray));
  })
  .catch(err => console.log('err happened'))
}

module.exports = recipeSearch;