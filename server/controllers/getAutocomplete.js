const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const getAutocomplete = (req, res) => {
  console.log('getting autocomplete, heres query::', req.query);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  axios(`https://api.edamam.com/auto-complete?q=${req.query.search}&app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => console.log('there was an error in getAutocomplete'));
}

module.exports = getAutocomplete;
