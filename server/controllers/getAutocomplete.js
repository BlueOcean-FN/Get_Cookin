const axios = require('axios');

const getAutocomplete = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  axios(`https://api.edamam.com/auto-complete?q=${req.query.search}&app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}`)
  .then(results => {
    res.send(JSON.stringify(results.data));
  })
}

module.exports = getAutocomplete;