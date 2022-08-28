const express = require('express');
const routes = express.Router();
const{updateCart,getCart} = require('../Controller');
const { verifyToken } = require('../middleWares');

routes.put('/ecomm/api/v1/carts/:id',[verifyToken],updateCart);

routes.get('/ecomm/api/v1/carts/:id',[verifyToken],getCart);

module.exports = {cartRoutes: routes};
