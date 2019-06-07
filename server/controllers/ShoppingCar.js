const config = require('../config/config');
const pg = require('pg');


/**
 * Function to obtain the list of providers by product
 * @param {productId} req 
 * @param {list of providers: [{name of providers, price, description, ranking, providerid,count},...]} res 
 */
function getProvidersByProduct(req,res) {
  // Set Connect
  var client = new pg.Client(config);

  client.connect(err => {
    if (err){client.end(); res.status(400).json([]);console.log(err)}
    else {
      const query = `select * from  getProvidersByProduct(`+req.params.productId+`)`;
      client
      .query(query)
      .then(data => {
        res.status(200).json(
          data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          console.log(err);
          client.end();
          res.status(400).json([]);
        })
    }
    });
}

function getUserInvoice(req, res) {
  var client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on getUserInvoice: ${err}`);
    }
    else {
      let query = `SELECT * FROM get_user_invoice(${req.params.user_id})`;
      client.query(query)
      .then(data => {
        res.status(200).send(data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on getUserInvoice: ${err}`);
      });
    }
  });
}
/**
 * Function to obtain the list of providers by product order by ranking
 * @param {productId} req 
 * @param {list of providers: [{name of providers, price, description, ranking, providerid,count},...]} res 
 */
function orderByRanking(req, res) {
// Set Connect
  var client = new pg.Client(config);

  client.connect(err => {
    if (err){client.end(); res.status(400).json([]);console.log(err)}
    else {
      const query = `select * from  orderByRanking(`+req.params.productId+`)`;
      client
      .query(query)
      .then(data => {
        res.status(200).json(
          data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          console.log(err);
          client.end();
          res.status(400).json([]);
        })
    }
  });
};
/**
 * Function to set ubication and price of shopping
 * @param {lat, lon, list_id_providers} req 
 * @param {confirmation} res 
 */
function setLocation(req,res){
  // Set Connect
  var client = new pg.Client(config);
  var totalCost = 0;
  // List of provider locations
  var provider_locations = [];
  client.connect(err => {
    if (err){client.end(); res.status(400).json([]);console.log(err)}
    else {
      req.body.list_id_providers.forEach(e => {
        var query = `select lat,lon from provider where id = `+e+`;`
        client
        .query(query)
        .then(data => {
          provider_locations.push(data.rows[0]);
          // Check if finish fulling list of providers locations 
          if(provider_locations.length === req.body.list_id_providers.length){
            totalCost += getCostShipping(provider_locations, req.body.lat, req.body.lon); // Sent list of providers location and user location
            client.query(`UPDATE invoice SET lat =`+String(req.body.lat)+`, lon =`+String(req.body.lon)+`, shipping= `+parseInt(totalCost)+` WHERE id = `+req.body.id_invoice+`;
            SELECT total_price FROM invoice WHERE id =`+req.body.id_invoice +`;` )
            .then(result => {
              obj = {
                total_price: result[1].rows[0].total_price,
                shipping: parseInt(totalCost)
              };
              res.status(200).json(obj);
              client.end();
            }).catch(
              err =>{ 
                console.log(err);
                client.end();
                res.status(400).json([]);
              })
          } 
        })
        .catch(
          err =>{ 
            console.log(err);
            client.end();
            res.status(400).json([]);
          })
      })
    }})
}
/**
 * Function to obtain cost of shipping
 * @param {provider_locations, user_lat, user_lon} params 
 * @param {cost} return 
 */
function getCostShipping(provider_locations, user_lat, user_lon){
  var basePerKilometers = 100;
  var cost = 0;
  provider_locations.forEach(provider => {
    cost += getDistanceFromLatLonInKm(user_lat,user_lon,provider.lat, provider.lon) * basePerKilometers;
  })
  return cost;
}
/**
 * Function to obtain distance between two coords.
 * @param {lat1,lon1,lat2,lon2} params 
 * @param {distance} return 
 */
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
/**
 * Function to obtain the list of providers by product
 * @param {userId, commodityId, totalProduct} req 
 * @param {invoiceId} res 
 */
function addProduct(req,res) {
  // Set Connect
  var client = new pg.Client(config);

  client.connect(err => {
    if (err){client.end(); res.status(400).json([]);console.log(err)}
    else {
      var query;
      //If the invoice isn't create, it's create and the product is added else the product is added in the invoice existed
      if (req.body.invoice_id === null)
        query = `select * from  insert_invoice(`+req.body.user_id+`,`+req.body.commodity_id+`,`+req.body.total_product+`)`;
      else
        query = `select * from  insert_product_invoice(`+req.body.invoice_id+`,`+req.body.commodity_id+`,`+req.body.total_product+`)`;
      
      console.log(query);
      client
      .query(query)
      .then(data => {
        res.status(200).json(
          data.rows);
        client.end();
      })
      .catch(
        err =>{ 
          console.log(err);
          client.end();
          res.status(400).json([]);
        })
    }
    });
}

function updateProductQuantity(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on updateProduct: ${err}`);
    }
    else {
      let query = {
        text: "SELECT * FROM update_product_quantity($1, $2, $3, $4)",
        values: [
          req.body.total_product,
          req.body.product_name,
          req.body.invoice_id,
          req.body.commodity_id
        ]
      };
      client.query(query)
      .then(() => {
        res.status(200).send(true);
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on updateProduct: ${err}`);
      });
    }
  });
}

function purchase(req, res) {
  client = new pg.Client(config);
  client.connect(err => {
    if (err) {
      client.end();
      res.status(400).send(err);
      console.log(`err when connecting on purchase: ${err}`);
    }
    else {
      let query = {
        text: "SELECT * FROM purchase($1)",
        values: [
          req.params.invoice_id        
        ]
      };

      client.query(query)
      .then(() => {
        res.status(200).send(true);
        client.end();
      })
      .catch(
        err =>{ 
          client.end();
          res.status(400).send(err);
          console.log(`err when query on purchase: ${err}`);
      });
    }
  });
}

module.exports = {
  getProvidersByProduct,
  getUserInvoice,
  addProduct,
  orderByRanking,
  setLocation,
  updateProductQuantity,
  purchase
}