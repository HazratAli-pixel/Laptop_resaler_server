const express = require('express');
const { getAllList, getSinglePayment, deletePayment, updatePayment, checkPayment, savePayment} = require('../controllers/payment.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllList);
router.get('/single/:id', getSinglePayment);
router.delete('/:id', deletePayment);
router.patch('/:id', updatePayment);
router.get('/', checkPayment);
router.post('/', savePayment);


module.exports = router;