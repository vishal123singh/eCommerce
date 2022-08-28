const {
    createCategory,getAllCategories,
    getCategoryById,updateCategoryById,
    deleteCategory
      }                               = require('./category') ;

const {
        createProduct,getAllProducts,
        getProductById,updateProduct,
        deleteProduct,filteredProduct 
      }                               = require('./product') ;
 
const {
        signUp,signIn
      }                               = require('./auth') ;

const {updateCart,getCart} = require('./cart');

const {selectAll} = require('./rawQueries');      


module.exports = {
    createCategory,getAllCategories,
    getCategoryById,updateCategoryById,
    deleteCategory,

    createProduct,getAllProducts,
    getProductById,updateProduct,
    deleteProduct,filteredProduct ,

    signUp,signIn,

    updateCart,getCart,

    selectAll
};



