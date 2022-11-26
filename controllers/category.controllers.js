const { ObjectId } = require("mongodb");
const Category = require("../modals/category.model");
const saveCategory = async (req, res) => {
  try{
    const newCategory = new Category({
        name: req.body.name,
        iconlink: req.body.iconlink,
        bgClass: req.body.bgClass,
      });
      await newCategory.save();
      res.status(201).json(newCategory);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};


const getAllCategory = async (req, res) => {
  try{
    await Category.find() // -1 for decending order and 1 for accending order
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

const updateCategory = async (req, res) => {
  try {
    const respons = await Category.findOne({_id: ObjectId(req.params.id)});
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



const checkCategory = async (req, res) => {
    res.status(201).json({
      message: "Check category Get Route is working"
    })
};


const deleteCategory = async (req, res) => {
    try{
        await Category.deleteOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
              message: "Category is deleted",
              respons
            });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllCategory, 
  checkCategory, 
  deleteCategory, 
  updateCategory, 
  saveCategory
};
