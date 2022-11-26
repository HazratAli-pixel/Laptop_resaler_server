const { mongoose } = require("mongoose");

var current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));


const reviewSchema = mongoose.Schema({
    brand:{
        type: String,
        require:true,
    },
    itemName:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    originalPrice:{
        type: Number,
        require:true  
    },
    resalePrice:{
        type: Number,
        require:true        
    },
    condition:{
        type: String,
        require:true,
    },
    photoUrl:{
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
    usedtime:{
        type: Number,
        require:true  
    },
    userid:{
        type: String,
        require:true,
    },
    reportMsg:{
        type: String,
        default:''
    },
    reportFlag:{
        type: Boolean,
        default:false
    },
    soldFlag:{
        type: Boolean,
        default:false
    },
    advertiseFlag:{
        type: Boolean,
        default: false,
    },
    nagotiationFlag:{
        type: Boolean,
        default: false,
    },
    createdOn:{
        type: Date,
        default: timeStamp,
    }
})

module.exports = mongoose.model('productslist',reviewSchema); //furst parameter is table aname and second parameter is schema name