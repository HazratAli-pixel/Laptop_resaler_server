const express = require('express');
const { getAllUser, getSingleUser, verifyUser, checkUser, updateUser, deleteUser, saveUser} = require('../controllers/user.controllers');
const verifyJWT = require('../controllers/tokenVerify');

const router = express.Router();

//Sub Route list
router.get('/list', getAllUser);

router.patch('/verify/:id', verifyUser);
router.get('/single/:id', getSingleUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);
router.get('/', checkUser);
router.post('/', saveUser);


module.exports = router;