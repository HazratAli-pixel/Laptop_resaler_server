const express = require('express');
const app = express();
const cors = require("cors");
require('./config/db');
const userRouter = require("./Routes/user.routes");
const categoryRouter = require("./Routes/category.routes");
const productsRouter = require("./Routes/products.routes");
// const serviceRouter = require("./Routes/service.routes");
const jwtRouter = require("./Routes/jwt.routes");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Main Route List
app.use ('/user', userRouter); 
app.use ('/category', categoryRouter); 
app.use ('/products', productsRouter); 
// app.use ('/service', serviceRouter); 
app.use ('/jwt', jwtRouter); 


app.get ('/', (req, res, next)=>{
    res.send('<h1>Welcome to Assignment 12 Home Route</h1>');
})


//route not found error
app.use ((req,res) =>{
    res.status(404).json({
        message: "Route not found",
    });
})

//handling server error
app.use ((err, req,res, next) =>{
    res.status(500).json({
        message: "Something Brok",
    });
})


module.exports = app;