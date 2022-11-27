const { ObjectId } = require("mongodb");
const Wishlist = require("../modals/wishlist.model");
const products = require("../modals/products.model");



const saveWishlist = async (req, res) => {
  try{
    const newReview = new Wishlist({
        userId: req.body.userId,
        productId: req.body.productId,
      });
      await newReview.save();
      res.status(201).json(newReview);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllWishlist = async (req, res) => {
  const respons2 = await products.find({_id: ObjectId(req.params.id)});
  try{
    await Wishlist.find() // -1 for decending order and 1 for accending order
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



const getSingleWishlist = async (req, res) => {
    try{
        const wishlistbyuser = await Wishlist.find({userId: req.params.email});
        const wishid = wishlistbyuser.map(list=> ObjectId(list.productId))
        const wish_id = wishlistbyuser.map(list=> list._id)
        const filtereditem = await products.find({ _id : { $in : wishid }});
        let i=0;
        const respons = filtereditem.map(item =>{
          const newitem = {...item._doc, "wishlistId":wish_id[i]}
          i++
          return newitem
        })

        res.status(200).json({
          message:"success",
          respons,
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateWishlist = async (req, res) => {
  try {
    const respons = await Wishlist.findOne({_id: ObjectId(req.params.id)});
      respons.status= req.body.status;
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



const checkWishlist = async (req, res) => {
    res.status(201).json({
      message: "Check Wishlist Get Route is working"
    })
};


const deleteWishlist = async (req, res) => {
    try{
        await Wishlist.deleteOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
              message: "Wishlist is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

module.exports = {
  getAllWishlist, 
  getSingleWishlist, 
  deleteWishlist, 
  updateWishlist, 
  checkWishlist, 
  saveWishlist
};

