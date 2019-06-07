const config = require('../config/config');
const pg = require('pg');

function getAllProducts(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      const query = `SELECT * FROM  get_all_products()`;
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

function getStockOfProvider(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      const query = `SELECT * FROM  get_commodity_of_provider(` + req.params.providerId + `)`;
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

function addStock(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query = `SELECT * FROM  insert_commodity(` + `'` + req.body.description + `'` + `,` + req.body.price + `,` + req.body.count + `,` + req.body.id_product + `,` + req.body.id_provider + `)`;
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

function modifyStock(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query = `SELECT * FROM  update_commodity(` + `'` + req.body.description + `'` + `,` + req.body.price + `,` + req.body.count + `,` + req.body.id_commodity + `)`;
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

function lockedStock(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query = `SELECT * FROM  locked_commodity(` + req.params.commodity_id + `,` + req.params.lock + `)`;
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

function deleteCommodity(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) { client.end(); res.status(400).json([]); console.log(err) }
    else {
      var query = `SELECT * FROM  delete_commodity(` + req.params.commodity_id + `,` + req.params.provider_id + `)`;
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
  getAllProducts,
  getStockOfProvider,
  modifyStock,
  addStock,
  lockedStock,
  deleteCommodity
}