const mongoose = require('mongoose');
const config = require('./Config')
const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(()=>{
    console.log("mongoose is connected")
})
.catch((error)=>{
    console.log(error);
    process.exit(1)
})
