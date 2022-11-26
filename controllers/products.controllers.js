const { ObjectId } = require("mongodb");
const ProductsModel = require("../modals/products.model");
const saveProducts = async (req, res) => {
  try{
    const newProducts = new ProductsModel({
        brand: req.body.brand,
        itemName: req.body.itemName,
        description: req.body.description,
        originalPrice: req.body.originalPrice,
        resalePrice: req.body.resalePrice,
        condition: req.body.condition,
        photoUrl: req.body.photoUrl,
        phone: req.body.phone,
        location: req.body.location,
        usedtime: req.body.usedtime,
        userid: req.body.userid,
        nagotiationFlag: req.body.nagotiationFlag,
      });
      await newProducts.save();
      res.status(201).json(newProducts);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllProducts = async (req, res) => {
  try{
    await ProductsModel.find() // -1 for decending order and 1 for accending order
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


const getProductsByUser = async (req, res) => {
  try{
    const query = {userid: req.params.id}
    await ProductsModel.find(query) // -1 for decending order and 1 for accending order
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


const getProductsByCategory = async (req, res) => {
  try{
    const query = {brand: req.params.id}
    await ProductsModel.find(query) // -1 for decending order and 1 for accending order
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


const getSingleProducts = async (req, res) => {
    try{
        const respons = await ProductsModel.find({_id: ObjectId(req.params.id)});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

const getAllReport = async (req, res) => {
    try{
        const respons = await ProductsModel.find({reportFlag: true});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};

const getAllSold = async (req, res) => {
    try{
        const respons = await ProductsModel.find({soldFlag: true});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getAllAdvertise = async (req, res) => {
    try{
        const respons = await ProductsModel.find({advertiseFlag: true});
        res.status(200).json({
          message:"success",
          respons
        });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateSold = async (req, res) => {
  try {
    const respons = await ProductsModel.findOne({_id: ObjectId(req.params.id)});
      respons.soldFlag= req.body.soldFlag;
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


const updateReport = async (req, res) => {
  try {
    const respons = await ProductsModel.findOne({_id: ObjectId(req.params.id)});
      respons.reportFlag= req.body.reportFlag;
      respons.reportMsg= req.body.reportMsg;
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


const updateAdvertise = async (req, res) => {
  try {
    const respons = await ProductsModel.findOne({_id: ObjectId(req.params.id)});
      respons.advertiseFlag= req.body.advertiseFlag;
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


const checkProducts = async (req, res) => {
    res.status(201).json({
      message: "Check Products Get Route is working"
    })
};


const deleteProducts = async (req, res) => {
    try{
        await ProductsModel.deleteOne({_id: ObjectId(req.params.id)})
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
  getAllProducts, 
  getSingleProducts, 
  checkProducts, 
  updateSold,
  updateReport,
  updateAdvertise, 
  deleteProducts, 
  saveProducts,
  getProductsByUser, 
  getProductsByCategory,
  getAllReport, 
  getAllSold, 
  getAllAdvertise,
};
