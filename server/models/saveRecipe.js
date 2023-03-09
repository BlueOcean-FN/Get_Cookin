const db = require('../database/index.js');

exports.getSaved = async (query) => {

  try {
    let savedObject = await db.query(`SELECT recipes.name, recipes.url FROM users
    INNER JOIN users_recipes
    ON email=$1 AND users.id = users_recipes.user_id
    INNER JOIN recipes
    ON users_recipes.recipe_id = recipes.id AND users_recipes.type = $2;`, [query.email, query.type]
    )
    return savedObject;
  } catch (err) {
    console.log('This error is in saveRecipe models getSaved: ', err);
    return err;
  }
}

exports.postSaved = async (usersQueryObject, recipesQueryObject, users_recipesQueryObject) => {

  try {
    let user_id = await db.query(`SELECT id FROM users WHERE email=$1;`,[usersQueryObject.email]);

    let recipe_id = await db.query(`INSERT INTO recipes (name, url, image_url) VALUES($1, $2, $3) RETURNING id;`, [recipesQueryObject.name, recipesQueryObject.url, recipesQueryObject.image_url]);

    await db.query(`INSERT INTO users_recipes (user_id, recipe_id, type, date) VALUES($1, $2, $3, CURRENT_TIMESTAMP);`, [user_id.rows[0].id, recipe_id.rows[0].id, users_recipesQueryObject.type]);

    return 'Insert OK';
  } catch (err) {
    console.log('This error is in saveRecipe models postSaved: ', err);
    return err;
  }
}