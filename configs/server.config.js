require('dotenv').config()
if(process.env.Node_Env === 'development'){
    module.exports = {
        PORT : process.env.Port
    }
}

