const express = require('express');
const Router = express.Router();
const wdController = require('../controllers/withdraw')



Router
    .post('/', wdController.createWd)
    .get('/', wdController.getWdByRek)
   



module.exports = Router;