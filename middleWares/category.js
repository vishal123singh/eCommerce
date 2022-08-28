async function checkNameForCategory(req,res,next){

    const body = req.body;
    if(body.name){
        next();
    }
    else{
        res.status(400).send({msg : 'Name is compulsory'});
    }

}

module.exports = {checkNameForCategory} ;