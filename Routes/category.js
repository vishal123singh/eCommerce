
const express = require('express');
const { createCategory,  getAllCategories,    
        getCategoryById, updateCategoryById,
        deleteCategory }                       = require('../Controller');               

const routes = express.Router();

const {checkNameForCategory, verifyToken, isAdmin} = require('../middleWares')



routes.post('/ecomm/api/v1/categories/create',[checkNameForCategory,verifyToken,isAdmin],createCategory);

routes.get('/ecomm/api/v1/categories/all',getAllCategories);

routes.get('/ecomm/api/v1/categories/get/:id',getCategoryById);

routes.put('/ecomm/api/v1/categories/update/:id',[verifyToken,isAdmin],updateCategoryById);

routes.delete('/ecomm/api/v1/categories/delete/:id',[verifyToken,isAdmin],deleteCategory);

module.exports = {categoryRoutes:routes};



