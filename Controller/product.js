const {Products, Sequelize} = require('../models');




async function createProduct(req,res){
    const productData = req.body;

    if(!(productData.name && productData.cost && productData.quantity)){
        res.status(400).send({msg : 'Name, Cost, and Quantity are missing'});
    }

    try{
        const {name,cost,description,quantity,CategoryId}  = req.body;
        const result = await Products.create({name,cost,description,quantity,CategoryId});
        res.send({msg : 'Product got created',result});
    }
    catch(err){
        res.status(500).send({msg : 'Internal server error',err});
    }
};

async function getAllProducts(req,res){
    try{
        const products = await Products.findAll();
        
        res.send(products);
    }
    catch(err){
        res.status(500).send({msg : 'Internal server error', err});
    }
};

async function getProductById(req,res){
    const productId = req.params.id;
    try{
        const result = await Products.findOne({
            where : {
                id : productId
            }
        });

        res.send(result);
    }
    catch(err){
        res.status(500).send({msg : 'Internal server error', err});
    }
};

async function updateProduct(req,res){
    const productId = req.params.id;
    const body = req.body;

    try{
        const result = await Products.findOne({
            where : {
                id : productId
            }
        });
        if(result){
            if (body.name) {result.name = body.name; result.save()};
            if (body.description) {result.description = body.description; result.save()};
            if (body.cost) {result.cost = body.cost; result.save()};
            if (body.quantity) {result.quantity = body.quantity; result.save()}

            res.send({msg : 'Updated successfully', result});
        }
        else{
            res.status(400).send({msg : "Id not found"});
        }
    }
    catch(err){
        res.status(500).send({msg : 'Internal server error',err});
    }

};

async function deleteProduct(req,res){
    const Id = req.params.id;

    try{
        const result = await Products.findOne({
            where : {
                id : Id
            }
        });
        if(result){
            await Products.destroy({
                where : {
                    id :Id
                }
            });

            res.send({msg : 'Product got deleted'});
        }
        else{
            res.status(400).send({msg : " Id not found"});
        }
    }
    catch(err){
        res.status(500).send({msg : " Internal server error",err});
    }
};

async function filteredProduct(req,res){

    if(req.query.categoryId){
        const result = await Products.findAll({
            where: {
                CategoryId: req.query.categoryId
            }
        });
        
        res.send(result);
    }
    else if(req.query.name){
        const result = await Products.findAll({
            where: {
                name : req.query.name
            }
        });
        
        res.send(result);
    }
    else if(req.query.minCost){
        const result = await Products.findAll({
            where: {
                cost: {
                    [Sequelize.Op.gte] : req.query.minCost
                }
            }
        });
        
        res.send(result);
    }
    else if(req.query.maxCost){
        const result = await Products.findAll({
            where: {
                cost: {
                    [Sequelize.Op.lte] : req.query.maxCost
                }
            }
        });
        
        res.send(result);
    }
    else if(req.query.minCost && req.query.maxCost){
        const result = await Products.findAll({
            where: {
                cost: {
                    [Sequelize.Op.lte] : req.query.maxCost,
                    [Sequelize.Op.gte] : req.query.minCost
                }
            }
        });
        
        res.send(result);
    }

};


module.exports = {
    createProduct,getAllProducts,getProductById,
    updateProduct,deleteProduct,filteredProduct
};