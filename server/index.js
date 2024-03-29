const express = require('express');
const app = express();
const axios = require('axios');
const jwt = require('jsonwebtoken')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const port = 3000;
const autoComplete_URL = process.env.AUTOCOMPLETE_API_URL;

const { authenticateUser } = require('./middleware.js');
const { addUser, findUser, getAutocomplete, getSaved, postSaved, recipeSearch } = require('./controllers');
const saveToProfile = require('./controllers/saveToProfile');
const getProfile = require('./controllers/getProfile');
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(authenticateUser);

// AUTHENTICATION  ===
app.post('/login-user', findUser, (req, res) => {
  if (!req.database) return res.sendStatus(500);
  const signed = jwt.sign({ id: req.database.id }, process.env.JWT_SECRET);
  res.cookie('token', signed, {httpOnly: true});
  res.send({ token: signed });
})

app.post('/logout-user', (req, res) => {
  res.cookie('token', '', { expires: new Date(0), path: '/' });
  res.send('Logged out')
})

app.post('/signup-user', addUser, (req, res) => {
  const signed = jwt.sign({ id: req.database.id }, process.env.JWT_SECRET);
  res.send({ token: signed });
})
// /AUTHENTICATION ^^^

app.get('/autoComplete', (req, res) => {
  let userInput = req.query.q;
  axios.get(`${autoComplete_URL}&q=${userInput}&limit=6`)
  .then(({data}) => {
    res.status(200).send(data);
  })
  .catch((err) => console.log(err));
})

//recipe search
app.get('/searchrecipes', recipeSearch);

//recipe saving
app.post('/savedPage', postSaved);
app.get('/savedPage', getSaved);

//user signup
// app.post('/signup', addUser);

app.post('/savetoprofile', saveToProfile);

app.get('/getprofile', getProfile);

//autocomplete actually needs this to work :)
app.get('/ingredientdata', getAutocomplete);

// catch-all route handler for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist' , 'index.html'));
});

app.listen(port, () => {
  console.log(`We are cookin' on port ${port}`)
})
