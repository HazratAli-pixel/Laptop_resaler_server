const jwt = require('jsonwebtoken');

const AdminVerify = (req, res, next)=>{
    const userType = req.decoded.userType
    if(userType === "Admin"){
        next()
    }
    else{
        res.status(403).json({
            message: "You are not a authorized user"
        })
    }
}

module.exports = AdminVerify