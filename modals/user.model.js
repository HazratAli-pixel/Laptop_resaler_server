const { mongoose } = require("mongoose");

var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));


const reviewSchema = mongoose.Schema({
    displayName:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    address:{
        type: String,
        default:''
    },
    userType:{
        type: String,
        default: "Buyer"
    },
    photoUrl:{
        type: String,
        require:true,
    },
    userStatus:{
        type: Boolean,
        default:false,
    },
    userFlag:{
        type: Boolean,
        default: false,
    },
    createdOn:{
        type: Date,
        default: timeStamp,
    }
})

module.exports = mongoose.model('usercollection',reviewSchema); //furst parameter is table aname and second parameter is schema name