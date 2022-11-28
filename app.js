const express = require('express');
const app = express();
const cors = require("cors");
require('./config/db');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const userRouter = require("./Routes/user.routes");
const categoryRouter = require("./Routes/category.routes");
const productsRouter = require("./Routes/products.routes");
const paymentRouter = require("./Routes/payment.routes");
const bookingRouter = require("./Routes/booking.routes");
const wishlistRouter = require("./Routes/wishlist.routes");
const jwtRouter = require("./Routes/jwt.routes");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Main Route List
app.use ('/user', userRouter); 
app.use ('/category', categoryRouter); 
app.use ('/products', productsRouter); 
app.use ('/payment', paymentRouter); 
app.use ('/booking', bookingRouter); 
app.use ('/wishlist', wishlistRouter); 
app.use ('/jwt', jwtRouter); 
app.post('/create-payment-intent', async (req, res) => {
    const booking = req.body;
    const price = booking.price;
    const amount = price * 100;

    const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: amount,
        "payment_method_types": [
            "card"
        ]
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});


app.get ('/', (req, res, next)=>{
    res.send('Welcome Assignment 12 and final Assignmnet');
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