const express = require('express');
const { getAllUser, getBuyereUser, getSalerUser, getAdminUser, getSingleUser, verifyUser, checkUser, updateUser, deleteUser, saveUser, makeAdmin} = require('../controllers/user.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllUser);
router.patch('/verify/:id', verifyUser);
router.get('/single/:email', getSingleUser);
router.get('/Buyer/', getBuyereUser);
router.get('/Saler/', getSalerUser);
router.get('/admin/', getAdminUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);
router.get('/', checkUser);
router.post('/', saveUser);
router.put('/admins/:id', makeAdmin);


module.exports = router;