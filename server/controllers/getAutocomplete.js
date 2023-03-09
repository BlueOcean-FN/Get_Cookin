const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const getAutocomplete = (req, res) => {
  axios(`https://api.edamam.com/auto-complete?q=${req.query.search}&app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => console.log('there was an error in getAutocomplete', err));
}

module.exports = getAutocomplete;
