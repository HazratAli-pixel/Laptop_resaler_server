const { mongoose } = require("mongoose");

var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));


const reviewSchema = mongoose.Schema({
    userId:{
        type: String,
        require:true,
    },
    productId:{
        type: String,
        require:true,
    },
    phone:{
        type: String,
        require:true,
    },
    location:{
        type: String,
        require:true,
    },
    price:{
        type: Number,
        require:true,
    },
    status:{
        type: Boolean,
        default:false
    },
    createdOn:{
        type: Date,
        default: timeStamp,
    }
})

module.exports = mongoose.model('booking',reviewSchema); //furst parameter is table aname and second parameter is schema name