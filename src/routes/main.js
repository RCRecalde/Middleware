const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const {esAdmin} = require('../middlewares/esAdmin')

router.get('/', mainController.index); 
router.get('/admin',esAdmin, mainController.admin)

module.exports = router;