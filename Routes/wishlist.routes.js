const express = require('express');
const { getAllWishlist, getSingleWishlist, deleteWishlist, updateWishlist, checkWishlist, saveWishlist} = require('../controllers/wishlist.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllWishlist);
router.get('/user/:email', getSingleWishlist);
router.delete('/:id', deleteWishlist);
router.patch('/:id', updateWishlist);
router.get('/', checkWishlist);
router.post('/', saveWishlist);


module.exports = router;