const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        res.status(401).send({message:"unauthorized Access "})
    }
    const token = authHeader.split(' ')[1]
     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).send({message:"Unauthorised Access token verify"})
        }
        req.decoded = decoded
        next();
    });
}

module.exports = verifyJWT