
const {checkNameForCategory} = require('./category') ;

const {checkNameForProduct}  = require('./product') ;

const {checkDuplicateUsernameAndEmail,checkRoles} =require('./user');

const {verifyToken,isAdmin} = require('./authJwt');

module.exports = {
    checkNameForCategory ,

    checkNameForProduct,

    checkDuplicateUsernameAndEmail,checkRoles,
    
    verifyToken,isAdmin
} ; 
