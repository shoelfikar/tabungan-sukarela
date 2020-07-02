const express = require('express');
const Router = express.Router();
const nasabahController = require('../controllers/nasabah');


Router
    .post('/', nasabahController.createNasabah)
    .get('/mutasi', nasabahController.getMutasi)
    .get('/', nasabahController.getAllNasabah)
    .get('/:idRekening', nasabahController.getNasabah)



module.exports = Router;