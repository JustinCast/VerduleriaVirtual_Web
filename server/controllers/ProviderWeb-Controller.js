const config = require("../config/config");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const pg = require("pg");
/**
   * Function to verify the user into system
   * @param config (username, password)
   */
function checkPassword(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on login: ${err}`);
    }
    else {
      let query = `Select password from provider where id = '${req.body.id}'`;
      client.query(query)
      .then(data => {
        if(bcrypt.compareSync(req.body.password, data.rows[0].password)) {
          res.status(200).send(data.rows)
        } else {
          res.status(200).send([]);
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
/**
   * Function to create or update provider
   * @param provider
   * confirmation
   */
function updateOrCreateProvider(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on login: ${err}`);
    }
    else {
      let query;
      
      if(req.body.provider.create){ // Create a new provider
        let hash = bcrypt.hashSync(req.body.provider.password, 10);
        query = `INSERT INTO provider(name,user_name,password,lat,lon) VALUES 
        ('${req.body.provider.name}','${req.body.provider.user_name}','${hash}','${req.body.provider.lat}','${req.body.provider.lon}') RETURNING id;`;
      }else{ // UPDATE PROVIDER
        if(req.body.provider.password === null){ // Don´t update password
          query = `UPDATE provider SET 
          name='${req.body.provider.name}',user_name='${req.body.provider.user_name}'
          ,lat = '${req.body.provider.lat}', lon='${req.body.provider.lon}' WHERE id= '${req.body.provider.id}' `
        }else{ // Update password
          let hash = bcrypt.hashSync(req.body.provider.password, 10);
          query = `UPDATE provider SET 
          name='${req.body.provider.name}',user_name='${req.body.provider.user_name}', password='${hash}'
          ,lat = '${req.body.provider.lat}', lon='${req.body.provider.lon}' WHERE id= '${req.body.provider.id}' `
        }
      } 
        client.query(query)
      .then(data => {
        res.status(200).send(data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on provider: ${err}`);
      });
    }
  });
}

/**
   * Function to delete provider
   * @param id
   * confirmation
   */
function deleteProvider(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on delete provider: ${err}`);
    }
    else {
      let query = `DELETE from provider where id = '${req.params.id}'`;
      client.query(query)
      .then(data => {
        res.status(200).send(data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on delete provider: ${err}`);
      });
    }
  });
}

/**
   * Function to block provider
   * @param id, block
   * confirmation
   */
  function blockProvider(req, res) {
    client = new pg.Client(config);
    client.connect(err => {
      if (err) {
        client.end();
        res.status(400).send(err);
        console.log(`err when connecting on block provider: ${err}`);
      }
      else {
        let query = `SELECT * FROM commodity_provider where id_provider = '${req.body.id}'`;
        client.query(query)
        .then(data => {
          if(data.rows.lenght > 0){
            client.end();
            res.status(400).send('Ya esta asignado a un inventario');
          }else{
            let query = `UPDATE provider SET  block = '${req.body.block}' WHERE id = '${req.body.id}'`;
            client.query(query).then(data => {
              res.status(200).send(data.rows);
              client.end();
            }).catch(
              err =>{ 
                client.end();
                res.status(400).send(err);
                console.log(`err when query on block provider: ${err}`);
            }
            )
          }
          res.status(200).send(data.rows);
          client.end();
        })
        .catch(
          err =>{ 
            client.end();
            res.status(400).send(err);
            console.log(`err when query on block provider: ${err}`);
        });
      }
    });
  }

module.exports = {
  checkPassword,
  updateOrCreateProvider,
  deleteProvider,
  blockProvider
}