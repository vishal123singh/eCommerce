const {sequelize} = require('../models');
//const { QueryTypes } = require('sequelize');

async function selectAll(req,res){
    try{
        
//const result = await sequelize.query("SELECT  name,cost FROM `Products` ", { type: QueryTypes.SELECT });
// We didn't need to destructure the result here - the results were returned directly
const [results, metadata] = await sequelize.query("SELECT  name,cost FROM `Products` ");
// Results will be an empty array and metadata will contain the number of affected rows.
        res.send(results);
        }
    catch(err){
        res.status(500).send({msg: 'Internal Server Error',err})
    }
}

module.exports = {selectAll};