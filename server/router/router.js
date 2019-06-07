// ===================================
// HTTP verbs
// ===================================
var express = require("express");
var api = express.Router();
const shopping = require('../controllers/ShoppingCar');
const ProductsController = require('../controllers/Product-Controller');
const CommentsController = require('../controllers/Comments-Controller');
const UsersController = require('../controllers/Users-Controller');
const StockController = require('../controllers/Stock-Controller');

const LoginWebController = require('../controllers/loginWeb-Controller');
const ProviderWebController = require('../controllers/ProviderWeb-Controller');
// =============================
// Movil 
// ============================= 
api.get('/getProvidersByProduct/:productId', shopping.getProvidersByProduct);
api.post('/addProduct', shopping.addProduct);
api.get('/getProducts', ProductsController.getProducts);
api.get('/orderByRanking/:productId', shopping.orderByRanking);
api.get('/getUserInvoice/:user_id', shopping.getUserInvoice);
api.post('/setLocation', shopping.setLocation);
api.get('/getPurchasesInDateRange/:from/:to', ProductsController.getPurchasesInDateRange);
api.get('/getPurchasesByProvider/:id_provider/:initial_date/:final_date', ProductsController.getPurchasesByProvider);
api.put('/updateProductQuantity', shopping.updateProductQuantity);

api.put('/purchase/:invoice_id', shopping.purchase);
api.delete('/deleteInvoiceItem/:commodity_id/:invoice_id', ProductsController.deleteInvoiceItem);

api.post('/createProduct', ProductsController.createProduct);

// Comments queries
api.get('/getComments/:idProvider', CommentsController.getComments);
api.post('/addReview', CommentsController.addReview);


// Users queries
api.get('/getUser/:userName',UsersController.getUser);
api.get('/checkLogin/:userName/:password',UsersController.checkLogin);
api.post('/createUser', UsersController.createUser);

// Stock queries
api.get('/getAllProducts',StockController.getAllProducts);
api.get('/getStockOfProvider/:providerId', StockController.getStockOfProvider);
api.post('/addStock', StockController.addStock);
api.post('/modifyStock', StockController.modifyStock);
api.get('/lockedStock/:commodity_id/:lock', StockController.lockedStock);
api.get('/deleteCommodity/:commodity_id/:provider_id', StockController.deleteCommodity);





// =============================
// Web 
// ============================= 

// Login
api.post('/login',LoginWebController.login);
api.get('/getProviders/:id',UsersController.getProviders);

// Provider
api.post('/checkPassword',ProviderWebController.checkPassword);
api.post('/updateOrCreateProvider',ProviderWebController.updateOrCreateProvider);
api.delete('/deleteProvider/:id',ProviderWebController.deleteProvider);
api.post('/blockProvider', ProviderWebController.blockProvider);
module.exports = api;
