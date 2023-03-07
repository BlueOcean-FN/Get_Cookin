const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const port = 3000;
const db = require('./database/index.js');
//this is just for testing autocomplete
const wordData = require('./testWords.js');

app.use(express.json());

app.get('/&q=*', (req, res) => {
  console.log(process.env.API_URL, process.env)
  // axios.get(process.env.API_URL + req.url.slice(1))
  // .then(res => console.log(res));
})

//recipe search
app.get('/search', (req, res) => {
  axios(`https://api.edamam.com/api/recipes/v2/?q=${req.query.q}&app_id=${process.env.RECIPE_ID}&app_key=${process.env.RECIPE_KEY}&type=public`)
  .then(results => {
    res.send(JSON.stringify(results.data));
  })

})

//this is just for testing autocomplete
app.get('/ingredientdata', (req, res) => {
  console.log(req.query);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // axios()
  res.send(JSON.stringify(wordData));
})

app.listen(port, () => {
  console.log(`We are cookin' on port ${port}`)
})

//test data = = = = = = = = = = = = = = = = = = = = =

