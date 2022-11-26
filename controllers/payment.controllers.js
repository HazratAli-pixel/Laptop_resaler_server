const { ObjectId } = require("mongodb");
const payment = require("../modals/payment.model");
const products = require("../modals/products.model");



const savePayment = async (req, res) => {
  try{
    const newReview = new payment({
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


const getAllList = async (req, res) => {
  try{
    await payment.find() // -1 for decending order and 1 for accending order
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



const getSinglePayment = async (req, res) => {
    try{
        const respons = await payment.find({_id: ObjectId(req.params.id)});
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


const updatePayment = async (req, res) => {
  try {
    const respons = await payment.findOne({_id: ObjectId(req.params.id)});
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



const checkPayment = async (req, res) => {
    res.status(201).json({
      message: "Check Payment Get Route is working"
    })
};


const deletePayment = async (req, res) => {
    try{
        await payment.deleteOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
              message: "Payment is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllList, 
  getSinglePayment, 
  deletePayment, 
  updatePayment, 
  checkPayment, 
  savePayment
};

