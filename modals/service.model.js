const { mongoose } = require("mongoose");



const current = new Date();
const timeStamp = new Date(Date.UTC(current.getFullYear(), 
current.getMonth(),current.getDate(),current.getHours(), 
current.getMinutes(),current.getSeconds()));



const serviceSchema = mongoose.Schema({
    serviceName:{
        type: String,
        require:true,
    },
    imgUrl:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    price:{
        type: String,
        default: "0",
    },
    
    totalBuy:{
        type: String,
        default: "0",
    },

    createdOn:{
        type: String,
        default:timeStamp,
    }
})

module.exports = mongoose.model('Service',serviceSchema);