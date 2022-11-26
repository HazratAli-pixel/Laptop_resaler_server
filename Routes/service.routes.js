const express = require('express');
const { getAllService, checkService,getAllLatestService, getSingleService, deleteService, updateService, saveService } = require('../controllers/service.controllers');
const router = express.Router();


router.get('/list/', getAllService);
router.get('/latest/list/', getAllLatestService);
router.get('/:id', getSingleService);
router.delete('/:id', deleteService);
router.patch('/:id', updateService);
router.post('/', saveService);
router.get('/', checkService);


module.exports = router;