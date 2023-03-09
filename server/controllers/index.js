const addUser = require('./addUser.js');
const findUser = require('./findUser.js');
const getAutocomplete = require('./getAutocomplete.js');
const getSaved = require('./saveRecipe.js').getSaved;
const postSaved = require('./saveRecipe.js').postSaved;
const recipeSearch = require('./recipeSearch.js');

module.exports = {
  addUser: addUser,
  findUser: findUser,
  getAutocomplete: getAutocomplete,
  getSaved: getSaved,
  postSaved: postSaved,
  recipeSearch: recipeSearch,
}