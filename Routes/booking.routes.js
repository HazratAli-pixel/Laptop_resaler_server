const express = require('express');
const { getAllBooking, getSingleBooking, getUserBooking,deleteBooking, updateBooking, checkBooking, saveBooking} = require('../controllers/booking.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllBooking);
router.get('/single/:id', getSingleBooking);
router.get('/user/:email', getUserBooking);
router.delete('/:id', deleteBooking);
router.patch('/:id', updateBooking);
router.get('/', checkBooking);
router.post('/', saveBooking);


module.exports = router;