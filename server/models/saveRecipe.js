const db = require('../database/index.js');


// CREATE TABLE IF NOT EXISTS users (
//   "id" SERIAL NOT NULL,
//   "hash" VARCHAR NOT NULL DEFAULT NULL,
//   "email" VARCHAR NOT NULL DEFAULT NULL,
//   "first" VARCHAR NOT NULL DEFAULT NULL,
//   "last" VARCHAR NOT NULL DEFAULT NULL,
//   "exclusions" VARCHAR NULL DEFAULT NULL,
//   "lifestyle" VARCHAR NULL DEFAULT NULL,
//   PRIMARY KEY ("id")
// );

// CREATE TABLE IF NOT EXISTS users_recipes (
//   "id" SERIAL NOT NULL,
//   "user_id" INTEGER NOT NULL DEFAULT NULL,
//   "recipe_id" INTEGER NULL DEFAULT NULL,
//   "type" VARCHAR NULL DEFAULT NULL,
//   "date" TIMESTAMP NULL DEFAULT NULL,
//   PRIMARY KEY ("id")
// );

// CREATE TABLE IF NOT EXISTS recipes (
//   "id" SERIAL NOT NULL,
//   "name" VARCHAR NULL DEFAULT NULL,
//   "url" VARCHAR NULL DEFAULT NULL,
//   "image_url" VARCHAR NULL DEFAULT NULL,
//   PRIMARY KEY ("id")
// );

exports.getSaved = async (query) => {

  try {
    let savedObject = await db.query(`SELECT recipes.name, recipes.url FROM users
    INNER JOIN users_recipes
    WHERE email=$1 AND users.id = users_recipes.user_id
    INNER JOIN recipes
    WHERE users_recipes.recipe_id = recipes.id AND users_recipes.type = $2;`, [query.user_id, query.type]
    )
    return savedObject;
  } catch (err) {
    return err;
  }
}

exports.postSaved = async (queryObject) => {

  try {
    let postResult = await db.query(`INSERT INTO Users_Recipes (user_id, recipe_id, type, url, name, date) VALUES($1, $2, $3, $4, $5, $6);`, [queryObject.user_id, queryObject.recipe_id, queryObject.type, queryObject.url, queryObject.name, queryObject.date])
    return 'Insert OK';
  } catch (err) {
    return err;
  }
}
