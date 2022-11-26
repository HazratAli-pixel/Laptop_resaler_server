const jwt = require('jsonwebtoken');


const createTokken = async (req, res) => {
  try{
    const email = req.body;
    const token = await jwt.sign(email,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
    res.status(200).json({
      token
    })
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};



module.exports = {
  createTokken
};
