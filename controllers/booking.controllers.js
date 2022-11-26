const { ObjectId } = require("mongodb");
const Booking = require("../modals/booking.model");
const products = require("../modals/products.model");



const saveBooking = async (req, res) => {
  try{
    const newReview = new Booking({
        userId: req.body.userId,
        productId: req.body.productId,
        trxId: req.body.trxId,
        price: req.body.price,
      });
      await newReview.save();
      res.status(201).json(newReview);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllBooking = async (req, res) => {
  try{
    await Booking.find() // -1 for decending order and 1 for accending order
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



const getSingleBooking = async (req, res) => {
    try{
        const respons = await Booking.find({_id: ObjectId(req.params.id)});
        const respons2 = await products.find({_id: ObjectId(req.params.id)});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateBooking = async (req, res) => {
  try {
    const respons = await Booking.findOne({_id: ObjectId(req.params.id)});
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



const checkBooking = async (req, res) => {
    res.status(201).json({
      message: "Check Booking Get Route is working"
    })
};


const deleteBooking = async (req, res) => {
    try{
        await Booking.deleteOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
              message: "Booking is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllBooking, 
  getSingleBooking, 
  deleteBooking, 
  updateBooking, 
  checkBooking, 
  saveBooking
};

