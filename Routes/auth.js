const express = require('express');

const routes = express.Router();

const {checkDuplicateUsernameAndEmail,checkRoles} = require('../middleWares/index.js');

const {signUp,signIn} = require('../Controller');

console.log('step 1')

routes.post('/ecomm/api/v1/auth/signup',[checkDuplicateUsernameAndEmail,checkRoles],signUp);

routes.post('/ecomm/api/v1/auth/signin',signIn);

module.exports = {authRoutes : routes}