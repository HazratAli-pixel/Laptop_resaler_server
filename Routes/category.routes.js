const express = require('express');
const { 
    getAllCategory, 
    checkCategory, 
    deleteCategory, 
    updateCategory, 
    saveCategory
 } = require('../controllers/category.controllers');
const router = express.Router();


router.get('/list/', getAllCategory);
router.delete('/:id', deleteCategory);
router.patch('/:id', updateCategory);
router.post('/', saveCategory);
router.get('/', checkCategory);


module.exports = router;