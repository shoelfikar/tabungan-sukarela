const express = require('express')
const Router = express.Router()
const nasabah = require('./nasabah');
const setor = require('./setor');
const withdraw = require('./withdraw');
const bunga = require('./bunga');


Router
    .use('/nasabah', nasabah)
    .use('/setor', setor)
    .use('/withdraw', withdraw)
    .use('/bunga', bunga)
    .get('/', (req,res) => {
        res.send({
            Messages: 'Welcome to SUKARELA API',
            Author: 'Sulfikardi',
            version: '1.0'
        })
    })


module.exports = Router