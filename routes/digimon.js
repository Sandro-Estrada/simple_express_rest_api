var express = require('express');
var router = express.Router();
const { DigimonController } = require('../controllers/digimon');

/* GET users listing. */
router.get('/getOne', DigimonController.getOneDigionById);
router.get('/get', DigimonController.getAllDigimons);

module.exports = router;
