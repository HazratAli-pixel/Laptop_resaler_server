const express = require('express');
const { createTokken } = require('../controllers/jwt.controllers');
const router = express.Router();



router.post('/', createTokken);



module.exports = router;