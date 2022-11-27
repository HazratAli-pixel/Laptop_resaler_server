const { ObjectId } = require("mongodb");
const UserModal = require("../modals/user.model");
const saveUser = async (req, res) => {
  try{
    const respons = await UserModal.findOne({email:req.body.email}) 
    if(respons.length == 0){
      const newReview = new UserModal({
          displayName: req.body.name,
          email: req.body.email,
          address: req.body.address,
          userType: req.body.userType,
          photoUrl: req.body.photoUrl,
        });
        await newReview.save();
        res.status(201).json(newReview);
    }
    else{
      res.status(201).json({
        message: "Allready Registered User"
      });
    }
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllUser = async (req, res) => {
  try{
    await UserModal.find() // -1 for decending order and 1 for accending order
    .then(respons =>{
      res.status(200).json({
        message:"success",
        respons
      });
    })
    .catch(error =>{
      res.status(500).send(error.message);
    })
  }
  catch(error){
      res.status(500).send(error.message);
  }
};

const verifyUser = async (req, res) => {
  try {
    const respons = await UserModal.findOne({_id: ObjectId(req.params.id)});
      respons.userFlag= true;
    await respons.save()
    .then(respons =>{
      res.status(200).json({
        message:"Information updated successfully",
        respons
      });
    })
  } 
  catch (error) {
    res.status(500).send(error.message);
  }
};

const getSingleUser = async (req, res) => {
    try{
        const respons = await UserModal.find({_id: ObjectId(req.params.id)});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateUser = async (req, res) => {
  try {
    const respons = await UserModal.findOne({_id: ObjectId(req.params.id)});
      respons.reviewText= req.body.reviewText;
    await respons.save()
    .then(respons =>{
      res.status(200).json({
        message:"Information updated successfully",
        respons
      });
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const makeAdmin = async (req, res) => {
  try {

    const respons = await UserModal.findOne({_id: ObjectId(req.params.id)});
      respons.userType= req.body.reviewText;
    await respons.save()
    .then(respons =>{
      res.status(200).json({
        message:"Information updated successfully",
        respons
      });
    })
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const checkUser = async (req, res) => {
    res.status(201).json({
      message: "Check User Get Route is working"
    })
};


const deleteUser = async (req, res) => {
    try{
        await UserModal.deleteOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
              message: "Review is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllUser, 
  verifyUser, 
  getSingleUser, 
  checkUser, 
  updateUser, 
  deleteUser, 
  saveUser,
  makeAdmin
};
