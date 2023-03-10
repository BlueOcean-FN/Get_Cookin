const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const db = require('../database/index.js');

const recipeSearch = (req, res) => {
  let userQuery = `SELECT exclusions, lifestyle FROM users WHERE id=${req.query.user_id}`
  db.query(userQuery)
  .then(userData => {
    console.log(userData.rows[0]);
    let queryString = `https://api.edamam.com/api/recipes/v2/?app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`
    if (req.query.q) {
      queryString += '&q='
      for (let ingredient of req.query.q) {
        queryString+=  `${ingredient}, `;
      }
      queryString = queryString.slice(0, -2)
    }
    if (req.query.excluded) {
      for (let filter of req.query.excluded) {
        queryString +=`&excluded=${filter}`;
      }
    }
    if (userData.rows[0].exclusions) {
      let exclusions = JSON.parse(userData.rows[0].exclusions);
      for (let exclusion of exclusions) {
        queryString +=`&excluded=${exclusion}`;
      }
    }
    if (userData.rows[0].lifestyle) {
      let restrictions = JSON.parse(userData.rows[0].lifestyle);
      for (let restriction in restrictions) {
        if (restrictions[restriction] === true) {
          queryString += `&health=${restriction}`;
        }
      }
    }
    console.log('HERE:', queryString);
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
      .catch(err => console.log('err happened', err))
    })

}

module.exports = recipeSearch;