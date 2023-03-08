const model = require('../models/saveRecipe.js');

exports.getSaved = (req, res) => {
  //console.log('this is req object in controllers: ', req)
  const email = req.query.email;
  const type = req.query.type;

  const query = {email, type};

  model.getSaved(query)
  .then((result) => {
      const allRecords = result.rows;
      const resultArray = [];
      allRecords.forEach((record) => {
          resultArray.push({name: record.name, url: record.url});
      })
      res.status(200).send(resultArray);
    })
    .catch((err) => {
      console.log(err);
      res.status(501).send(err);
    });
  };



exports.postSaved = (req, res) => {
  const email = req.params.email;
  const type = req.params.type;
  const name = req.params.name;
  const url = req.params.url;
  const image_url = req.params.image_url

  const usersQueryObject = {email};
  const recipesQueryObject = {name, url, image_url};
  const users_recipesQueryObject = {type};

  model.postSaved(usersQueryObject, recipesQueryObject,users_recipesQueryObject)
  .then((response) => {
    res.status(200).send(response);
    })
  .catch((err) => {
      res.status(501).send(err);
    });
  };


  //Below are functions/queries used for testing.

  // INSERT INTO users (hash, email, first, last, exclusions, lifestyle) VALUES('andhisson', 'bryce', 'hey', 'yo', 'none', 'none');

  // exports.postSaved({params: {
  //   email: 'bryce',
  //   type: 'saved',
  //   name: 'unethical chicken',
  //   url: 'http://www.zaxbys.com',
  //   image_url: 'http://www.churchs.com'
  // }});

    // exports.getSaved({params: {
  //   email: 'bryce',
  //   type: 'saved'
  // }});

