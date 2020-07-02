const express = require('express');
const Router = express.Router();
const setorController = require('../controllers/setor')



Router
    .post('/', setorController.createSetor)
    .get('/', setorController.getSetorByRek)
  



module.exports = Router;