const jwt = require('jsonwebtoken');
const UserModal = require("../modals/user.model");

const createTokken = async (req, res) => {
  try{
    const email = req.body.email;
    const user = await UserModal.findOne({email: email});
    if(user){
      const userType = user.userType
      const token = await jwt.sign({email, userType},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
      return res.send({ accessToken: token });
    }else{
      res.status(403).send({ accessToken: '' })
    }
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};



module.exports = {
  createTokken
};
