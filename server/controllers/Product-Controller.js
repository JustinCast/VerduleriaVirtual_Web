const config = require("../config/config");
const pg = require("pg");
var client;

/**
 * Función para obtener los productos iniciales
 * @param {*} req
 * @param {*} res
 */
function getProducts(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on getProducts: ${err}`);
    } else {
      let query = `SELECT * FROM get_products()`;
      client
        .query(query)
        .then(data => {
          res.status(200).send(data.rows);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on getProducts: ${err}`);
        });
    }
  });
}

function createProduct(req, res) {
  client = new pg.Client(config);

  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on createProduct: ${err}`);
    } else {
      let query = {
        text: "SELECT * FROM create_product($1, $2)",
        values: [req.body.productName, req.body.imageURL]
      };
      client
        .query(query)
        .then(() => {
          res.status(200).send(true);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on createProduct: ${err}`);
        });
    }
  });
}

function getPurchasesInDateRange(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on getPurchasesInDateRange: ${err}`);
    } else {
      let query = {
        text: "SELECT * FROM get_purchases_in_date_range($1, $2)",
        values: [JSON.stringify(req.params.from), JSON.stringify(req.params.to)]
      };
      client
        .query(query)
        .then(data => {
          res.status(200).send(data.rows);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on getPurchasesInDateRange: ${err}`);
        });
    }
  });
}

function getPurchasesByProvider(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on getPurchasesByProvider: ${err}`);
    } else {
      let query = {
        text: "SELECT * FROM purchases_report($1, $2, $3)",
        values: [
          req.params.id_provider,
          JSON.stringify(req.params.initial_date),
          JSON.stringify(req.params.final_date)
        ]
      };
      client
        .query(query)
        .then(data => {
          res.status(200).send(data.rows);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on getPurchasesByProvider: ${err}`);
        });
    }
  });
}

function deleteInvoiceItem(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on deleteInvoiceItem: ${err}`);
    } else {
      let query = {
        text: "SELECT * FROM delete_invoice_item($1, $2)",
        values: [req.params.commodity_id, req.params.invoice_id]
      };
      client
        .query(query)
        .then(data => {
          res.status(200).json(data.rows[0]);
          client.end();
        })
        .catch(err => {
          client.end();
          res.status(400).send(err);
          console.log(`err when query on deleteItemInvoice: ${err}`);
        });
    }
  });
}

module.exports = {
  getProducts,
  createProduct,
  getPurchasesInDateRange,
  getPurchasesByProvider,
  deleteInvoiceItem
};
