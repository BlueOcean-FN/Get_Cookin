const express = require('express');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken')
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const port = 3000;
const autoComplete_URL = process.env.AUTOCOMPLETE_API_URL;

const { authenticateUser } = require('./middleware.js');
const { addUser, findUser, getAutocomplete, getSaved, postSaved, recipeSearch } = require('./controllers');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.use(express.json());
app.use(cors());
app.use(authenticateUser);


// AUTHENTICATION  ===
app.post('/login-user', findUser, (req, res) => {
  if (!req.database) return res.sendStatus(500);
  console.log(req.database);
  const signed = jwt.sign({ id: req.database.id }, process.env.JWT_SECRET);
  console.log(req.database.id, signed);
  res.send({ token: signed });
})

app.post('/signup-user', findUser, addUser, (req, res) => {
  console.log(req.database);
  const signed = jwt.sign({ id: req.database.id }, process.env.JWT_SECRET);
  res.send({ token: signed });
})

app.get('/testroute', (req, res) => {
  console.log(req.user_id && req.user_id);
  res.send('yo');
})
// /AUTHENTICATION ^^^


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

// app.get('/&q=*', (req, res) => {
//   console.log(process.env.API_URL, process.env)
//   // axios.get(process.env.API_URL + req.url.slice(1))
//   // .then(res => console.log(res));
// })

//recipe search
// app.get('/search', recipeSearch);
//recipe saving
// app.post('/saved', postSaved);
// app.get('/saved', getSaved);
//user signup
// app.post('/signup', addUser);

//this is just for testing autocomplete
// app.get('/ingredientdata', getAutocomplete);

// catch-all route handler for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist' , 'index.html'));
});

app.listen(port, () => {
  console.log(`We are cookin' on port ${port}`)
})
