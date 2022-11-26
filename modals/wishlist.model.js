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
    status:{
        type: Boolean,
        default:false
    },
    createdOn:{
        type: Date,
        default: timeStamp,
    }
})

module.exports = mongoose.model('wishlist',reviewSchema); //furst parameter is table aname and second parameter is schema name