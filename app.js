//const ServerPort = require('./configs/server.config.js');
require('dotenv').config();
const Port = process.env.PORT;
const express = require('express');
const {Categories,Products,Role,sequelize} = require('./models');
const {categoryRoutes,productRoutes,authRoutes, cartRoutes} = require('./Routes');

const app = express();

app.set('views','./views');
app.set('view engine','pug');



app.use(express.json());
app.use(authRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(cartRoutes);


app.listen(Port,async ()=>{
    console.log(`Server is running on Port : ${Port}`);
    await init();
});

async function init(){

    try{
      await sequelize.sync({force:true});

        const defaultCategories = [
            {
                name : 'Beauty',
                description : 'Beauty products'
            },
            {
                name: 'Fragrance',
                description: 'About perfumes'
            },
            {
                name : 'Fashion',
                description : 'About clothes'
            }
        ]

       
        const defaultProducts = [
            {
                name: 'Fair & Handsome',
                cost:  100,
                description:'Fairness cream for men',
                quantity: 1000,
                CategoryId: 1
            },
            {
                name: 'Chanel',
                cost: 250,
                description:'perfume for women',
                quantity: 500,
                CategoryId: 2
            },
            {
                name: 'tuxedo',
                cost: 5000,
                description: 'Blazers for men',
                quantity: 200,
                CategoryId: 3
            },
            
        ]
        

        const defaultRoles = [
            {
                name : 'User',
                
            },
            {
                name: 'Admin',
               
            },
           
        ]
        
        const result1 = await Categories.bulkCreate(defaultCategories) ;
        const result2 = await Products.bulkCreate(defaultProducts) ;
        const result3 = await Role.bulkCreate(defaultRoles) ;
        
    }
    catch(err){
        console.log(err) ;
    }

};