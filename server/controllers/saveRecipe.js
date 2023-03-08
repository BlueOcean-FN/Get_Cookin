const model = require('../models/saveRecipe.js');



exports.getSaved = (req,res) => {
  const user_id = req.params.user_id;
  const type = req.params.type;

  model.getSaved(user_id, type)
  .then((result) => {
      const allRecords = result.rows;
      const resultArray = [];
      allRecords.forEach((record) => {
          resultArray.push({name: record.name, url: record.url});
      })
      res.status(200).send(resultArray);
    })
    .catch((err) => {
      res.status(501).send(err);
    });
  };

exports.postSaved = (req,res) => {
  const user_id = req.params.user_id;
  const recipe_id = req.params.recipe_id;
  const type = req.params.type;
  const url = req.params.url;
  const name = req.params.name;
  const date = req.params.date;

  const queryObject = {user_id, recipe_id, type, url, name, date}

  model.postSaved(queryObject)
  .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(501).send(err);
    });
  };



  // exports.saveRecipe = (req, res) => {
//   db.query(`SELECT id FROM users WHERE email=${req.body.email}`, (err, res_ => {
//     if (err) {
//       console.log(err);
//       res.send(500);
//     }
//     const user_id = res.rows[0];
//     const text = 'INSERT INTO recipes(name, url, image_url) VALUES($1, $2, $3)';
//     const values = [req.body.name,
//                     req.body.url,
//                     req.body.image_url]
//   }))
// }