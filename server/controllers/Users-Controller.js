const config = require('../config/config');
const pg = require('pg');
const bcrypt = require('bcrypt');

/**
 * Function to get a user information
 * @param {userName, password} req
 * @param {userId, userName, userPassword, fullName, actualInvoice } res
 */

function getUser(req, res) {

  var client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).json([]);
      console.log(err);
    } else {
      const query =
        `SELECT * FROM  get_user('` +
        req.params.userName +
        `','` +
        req.params.password +
        `')`;
      console.log(query);
      client
        .query(query)
        .then(data => {
          res.status(200).json(data.rows);
          client.end();
        })
        .catch(err => {
          console.log(err);
          client.end();
          res.status(400).json([]);
        });
    }
  });
}

/**
 * Function to create a user
 * @param {userName, password, fullName} req
 * @param {true} res
 */

function createUser(req, res) {
  var client = new pg.Client(config);

  let password = bcrypt.hashSync(req.body.password, 10);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).json([]);
      console.log(err);
    } else {
      var query =
        `SELECT * FROM  insert_user('` +
        req.body.userName +
        `','` +
        password +
        `','` +
        req.body.fullName +
        `')`;
        
      client
        .query(query)
        .then(data => {
          res.status(200).json(data.rows);
          client.end();
        })
        .catch(err => {
          console.log(err);
          client.end();
          res.status(400).json([]);
        });
    }
  });
}


function checkLogin(req, res) {

  var client = new pg.Client(config);

  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query1 = `select * from get_user_password('` + req.params.userName + `')`;
      console.log(query1)
      client
        .query(query1)
        .then(data => {
          console.log(req.params.password)
          if (bcrypt.compareSync(req.params.password, data.rows[0]._password)) {
            res.status(200).json(true);
            client.end();
          } else {
            res.status(200).json(false);
            client.end();
          }
        })
        .catch(
          err => {
            console.log(err);
            client.end();
            res.status(400).json([]);
          })
    }
  });
}

/**
 * Function to get Providers
 * @param {id}
 * return list providers{id,username,name,lat,lon}
 */
function getProviders(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on login: ${err}`);
    } else {
      let query;
      if(req.params.id === "admin")
        query = `SELECT id,name,user_name,lat,lon,ranking,block FROM provider`;
      else
        query = `SELECT id,name,user_name,lat,lon,ranking FROM provider WHERE id = ${req.params.id}`;
      client
        .query(query)
        .then(data => {
          res.status(200).send(data.rows);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on login: ${err}`);
        });
    }
  });
}

module.exports = {
  createUser,
  getUser,
  checkLogin,
  getProviders
}
