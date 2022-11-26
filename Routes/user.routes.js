const express = require('express');
const { getAllReview, getReviewByUser, getSingleReview, getReviewByService, checkReview, updateReview, deleteReview, saveReview} = require('../controllers/user.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllReview);
router.get('/user/', verifyJWT, getReviewByUser);
router.get('/service/:id', getReviewByService);
router.get('/single/:id', getSingleReview);
router.delete('/:id', deleteReview);
router.patch('/:id', updateReview);
router.get('/', checkReview);
router.post('/', saveReview);


module.exports = router;