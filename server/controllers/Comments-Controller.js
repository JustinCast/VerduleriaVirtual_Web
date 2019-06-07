const config = require('../config/config');
const pg = require('pg');

/**
 * Function to get comments
 * @param {idProvider} req 
 * @param {list fo comments:[{user_name, comment, rate}]} res 
 */

function getComments(req, res) {

  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      const query = `SELECT * FROM  get_comments(` + req.params.idProvider + `)`;
      client
        .query(query)
        .then(data => {
          res.status(200).send(data.rows);
          client.end();
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
 * Function to get comments
 * @param {user_id, provider_id, rate, comment} req 
 * @param {true} res 
 */

function addReview(req, res) {
  var client = new pg.Client(config);

  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query = `SELECT * FROM  insert_comment(` + req.body.user_id + `,` + req.body.provider_id + `,` + req.body.rate + `,` + `'` + req.body.comment + `'` + `)`;
      console.log(query);
      client
        .query(query)
        .then(data => {
          res.status(200).json(
            data.rows);
          client.end();
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

module.exports = {
  getComments,
  addReview
}