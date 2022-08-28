const {Categories} = require('../models') ;

async function createCategory(req,res){
    const data = req.body;

    if(!data.name){
        res.status(400).send({msg : 'name is mandatory'});
    }

    const name = data.name;
    const description = data.description;

    try{
        const result = await Categories.create({name,description});
        console.log('Result',result);
        res.send({ msg : 'Category has been created'});
    }
    catch(err){
        console.log('Error in creation of category:',err);
        res.status(500).send({ msg : 'Internal server error'});
    }
}

async function getAllCategories(req,res){
    try{
        const result = await Categories.findAll();
        res.send(result);
    }
    catch(err){
        console.log('Error in fetching categories :',err);
        res.status(500).send({ msg : 'Internal server error'});
    }
}

async function getCategoryById(req,res){
    const categoryId = req.params.id;

    try{
        const result = await Categories.findOne({
            where : {
                id : categoryId
            }
        });
        res.send(result);
    }
    catch(err){
        console.log('Error in fetching category :',err);
        res.status(500).send({ msg : 'Internal server error'});
    }
}

async function updateCategoryById(req,res){
    const categoryId = req.params.id;
    try{
        const result = await Categories.findOne({
            where : {
                id : categoryId
            }
        });
        if(result){
            result.name = req.body.name;
            result.description = req.body.description;

            result.save();

            res.send({ msg : 'Category updated',
                     updateCategory : result});
        }else {
            console.log('Error in getting Category',err);
            res.status(400).send({msg : 'Category Id does not exist'});
        }
    }
    catch(err){
        console.log('Error in getting Category',err);
        res.status(500).send({msg : 'Internal server error'});
    }
}

async function deleteCategory(req,res){
    const categoryId = req.params.id;
    try{
        const result = await Categories.destroy({
            where : {
                id : categoryId
            }
        });

        res.send({msg : 'Category deleted',result:result});
    }
    catch(err){
        console.log('Error in deletion of Category',err);
        res.status(500).send({msg : 'Internal server error'});
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategory
};