const config = require("../config/config");
const pg = require("pg");
const bcrypt = require('bcrypt');
const saltRounds = 10;
/**
   * Function to verify the user into system
   * @param config (username, password)
   */
function login(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on login: ${err}`);
    }
    else {
      let query = `SELECT id,name,password FROM provider WHERE user_name = '${req.body.username}' AND block <> true`;
      client.query(query)
      .then(data => {
        if(data.rows.length < 1){ // Its block or don´t exist
          res.status(200).send([]);
        }else{
          if(bcrypt.compareSync(req.body.password, data.rows[0].password)) {
            res.status(200).send(data.rows)
          } else {
            res.status(200).send([]);
          }
        }
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on login: ${err}`);
      });
    }
  });
}

module.exports = {
  login
}