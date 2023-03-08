const express = require('express');
const app = express();
// const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const port = 3000;
const db = require('./database/index.js');
//this is just for testing autocomplete
const wordData = require('./testWords.js');

const recipeSearch = require('./controllers/recipeSearch.js');
const addUser = require('./controllers/addUser.js');
const saveRecipe = require('./controllers/saveRecipe.js');
const getAutocomplete = require('./controllers/getAutocomplete.js');

app.use(express.json());

app.get('/&q=*', (req, res) => {
  console.log(process.env.API_URL, process.env)
  // axios.get(process.env.API_URL + req.url.slice(1))
  // .then(res => console.log(res));
})

//recipe search
app.get('/search', recipeSearch);

//recipe saving
app.post('/search', saveRecipe);

//user signup
app.post('/signup', addUser);

//this is just for testing autocomplete
app.get('/ingredientdata', getAutocomplete);

app.listen(port, () => {
  console.log(`We are cookin' on port ${port}`)
})

//test data = = = = = = = = = = = = = = = = = = = = =

