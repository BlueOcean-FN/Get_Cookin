const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const port = 3000;
//this is just for testing autocomplete
const wordData = require('./testWords.js');
const autoComplete_URL = process.env.AUTOCOMPLETE_API_URL;

app.use(express.json());
app.use(cors());

app.get('/&q=*', (req, res) => {
  console.log(process.env.API_URL, process.env)
  // axios.get(process.env.API_URL + req.url.slice(1))
  // .then(res => console.log(res));
})

//this is just for testing autocomplete
app.get('/ingredientdata', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(wordData));
})

app.get('/autoComplete', (req, res) => {
  console.log('Inside get of autoComplete');
  let userInput = req.query.q;
  axios.get(`${autoComplete_URL}&q=${userInput}&limit=6`)
  .then(({data}) => {
    console.log(data)
    res.status(200).send(data);
  })
  .catch((err) => console.log(err));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//test data = = = = = = = = = = = = = = = = = = = = =

