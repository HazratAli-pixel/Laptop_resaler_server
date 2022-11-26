const { ObjectId } = require("mongodb");
const Service = require("../modals/service.model");

const saveService = async (req, res) => {
  try{

    const newService = new Service({
      serviceName:req.body.sname,
      imgUrl:req.body.imgUrl,
      price:req.body.price,
      description:req.body.description,
      });
      await newService.save();
      res.status(201).json(newService);
  }
  catch(error){
    res.status(500).send(error.message);    
  } 
};



const getAllService = async (req, res) => {
    try{
        const respons = await Service.find().sort([['createdOn', 1]]);
        if(respons.length==0){
          res.status(200).json({
            message:"No Data Found",
          })
        }
        res.status(201).json(respons);
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getAllLatestService = async (req, res) => {
    try{
        const respons = await Service.find().limit(3).sort([['createdOn', 1]]);
        if(respons.length==0){
          res.status(200).json({
            message:"No Data Found",
          })
        }
        res.status(201).json(respons);
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getSingleService = async (req, res) => {
    try{
        await Service.findOne({_id: ObjectId(req.params.id)})
        .then(respons=>{
          res.status(200).json({
            message:"success",
            respons
          });
        })
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


const updateService = async (req, res) => {
  try {
    const respons = await Service.findOne({_id: ObjectId(req.params.id)});
      respons.serviceName= req.body.sname;
      respons.imgUrl= req.body.imgUrl;
      respons.price= req.body.price;
      respons.description= req.body.description;
    await respons.save();
    res.status(201).json({
      message: "Service is updated",
      respons
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};



const checkService = async (req, res) => {
    res.status(200).json({
      message: "Check Service Get Route is working"
    })
};


const deleteService = async (req, res) => {
    try{
       const respons = await Service.deleteOne({_id: ObjectId(req.params.id)});
        res.status(200).json({
            message: "Service is deleted",
            respons
          });
    }
    catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {
  getAllService,
  getSingleService,
  deleteService,
  updateService,
  saveService,
  checkService,
  getAllLatestService,
};
