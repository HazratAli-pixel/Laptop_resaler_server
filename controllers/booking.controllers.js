const { ObjectId } = require("mongodb");
const Booking = require("../modals/booking.model");
const products = require("../modals/products.model");



const saveBooking = async (req, res) => {
  try{
    const respons = await Booking.find({productId: req.body.productId})
    if(respons.length==0){
      const newReview = new Booking({
          userId: req.body.userId,
          productId: req.body.productId,
          phone: req.body.phone,
          location: req.body.location,
        });
        await newReview.save();
        res.status(201).json(newReview);
    }
    else{
      res.status(201).json({
        message: "You Allready booked this product."
      });
    }
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
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getUserBooking = async (req, res) => {
    try{
        const bookinglist = await Booking.find({userId: req.params.email});
        const booklist = bookinglist.map(list=> ObjectId(list.productId))
        const booklist_id = bookinglist.map(list=> list._id)
        const filtereditem = await products.find({ _id : { $in : booklist }});
        let i=0;
        const respons = filtereditem.map(item =>{
          const newitem = {...item._doc, "bookingId":booklist_id[i]}
          return newitem
        })
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
  getUserBooking,
  deleteBooking, 
  updateBooking, 
  checkBooking, 
  saveBooking,
};

