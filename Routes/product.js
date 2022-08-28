
const { 
        createProduct,getAllProducts,
        getProductById,updateProduct,
        deleteProduct,filteredProduct,
        selectAll 
    }                                        = require('../Controller');


const express = require('express')

const routes = express.Router();

const {checkNameForProduct,verifyToken,isAdmin} = require('../middleWares')



routes.get('/ecomm/api/v1/products/all',getAllProducts);

routes.get('/ecomm/api/v1/filter/products',filteredProduct);

routes.post('/ecomm/api/v1/products/create',[checkNameForProduct,verifyToken,isAdmin],createProduct);

routes.get('/ecomm/api/v1/products/get/:id',getProductById);

routes.put('/ecomm/api/v1/products/update/:id',[verifyToken,isAdmin],updateProduct);

routes.delete('/ecomm/api/product/delete/:id',[verifyToken,isAdmin],deleteProduct);


module.exports = {productRoutes : routes};