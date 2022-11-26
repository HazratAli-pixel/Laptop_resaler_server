const express = require('express');
const {getAllReport, 
    getAllSold, 
    getAllAdvertise, 
    getAllProducts, 
    getSingleProducts, 
    checkProducts, 
    getProductsByUser, 
    getProductsByCategory, 
    updateSold,
    updateReport,
    updateAdvertise, 
    deleteProducts, 
    saveProducts
} = require('../controllers/products.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllProducts);
router.get('/:id', getSingleProducts);
router.get('/user/:id', getProductsByUser);
router.get('/category/:id', getProductsByCategory);
router.delete('/:id', deleteProducts);
router.patch('/report/:id', updateReport);
router.get('/report/list', getAllReport);
router.patch('/sold/:id', updateSold);
router.get('/sold/list', getAllSold);
router.patch('/advertise/:id', updateAdvertise);
router.get('/advertise/list', getAllAdvertise);
router.get('/', checkProducts);
router.post('/', saveProducts);


module.exports = router;