const { ObjectId } = require("mongodb");
const Review = require("../modals/user.model");
const saveReview = async (req, res) => {
  try{
    const newReview = new Review({
        userId: req.body.userId,
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        serviceId: req.body.serviceId,
        reviewText: req.body.reviewText,
        rating: req.body.rating,
      });
      await newReview.save();
      res.status(201).json(newReview);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllReview = async (req, res) => {
  try{
    await Review.find().sort([['createdOn', -1]]) // -1 for decending order and 1 for accending order
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

const getReviewByUser = async (req, res) => {
    try{
      const decod_info = req.decoded
      const {userId } = req.query
      if(decod_info.userId !== userId){
        res.status(403).send({ message:"Unauthorized Access"})
      }
      else{
        const respons = await Review.find({userId: userId}).sort([['createdOn', -1]])  // -1 for decending order and 1 for accending order
        res.status(200).json({
          message:"success",
          respons
        });
      }
      
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getReviewByService = async (req, res) => {
    try{
        const respons = await Review.find({serviceId: req.params.id}).sort([['createdOn', -1]]);
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getSingleReview = async (req, res) => {
    try{
        const respons = await Review.find({_id: ObjectId(req.params.id)});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateReview = async (req, res) => {
  try {
    const respons = await Review.findOne({_id: ObjectId(req.params.id)});
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



const checkReview = async (req, res) => {
    res.status(201).json({
      message: "Check Review Get Route is working"
    })
};


const deleteReview = async (req, res) => {
    try{
        await Review.deleteOne({_id: ObjectId(req.params.id)})
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
  getAllReview,
  getReviewByUser,
  checkReview,
  saveReview,
  updateReview,
  deleteReview,
  getSingleReview,
  getReviewByService,
};
