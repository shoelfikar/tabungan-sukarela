const express = require('express');
const Router = express.Router();
const bungaController = require('../controllers/bunga')




Router
    .post('/', bungaController.createBunga)
    .get('/bulan', bungaController.getBungaByRek)

   



module.exports = Router;