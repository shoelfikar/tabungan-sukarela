const helpers = require('../helpers/helpers');
const rekening = require('../helpers/random');
const models = require('../models/nasabah');


const createNasabah = (req, res)=> {
  const nmr = rekening.getRekening(5)
  const {
     nama,
     email,
     saldo,
     alamat,
     ktp,
     hp 
  } = req.body
  const data = {
    nama : nama,
    email : email,
    nmr_rekening: nmr,
    saldo : saldo,
    alamat : alamat,
    ktp : ktp,
    hp : hp
  }
  models.createNasabah(data)
  .then(result => {
    helpers.response(res, result, 200, 'Data nasabah berhasil ditambah!')
  })
  .catch(err => {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}



const getAllNasabah = (req, res)=> {
  models.getAllNasabah()
  .then(result => {
    helpers.response(res, result, 200, 'Data seluruh Nasabah!', null)
  })
  .catch(err => {
    helpers.response(res, null, 500, 'internal server error', err)
  })
}


const getNasabah = (req, res)=> {
  const idRekening = req.params.idRekening
  models.getNasabah(idRekening)
  .then(result=> {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${idRekening} tidak ditemukan`, null)
    }else{
      helpers.response(res, result, 200, `Data nasabah dengan nomor rekening ${idRekening}`, null)
    }
  })
  .catch(err => {
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}


const getMutasi = (req, res)=> {
  const {
    nmr_rekening
  } = req.body
  const data = {
    nmr_rekening: nmr_rekening
  }

  models.getMutasi(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      helpers.response(res, result, 200, `Data mutasi rekening nasabah dengan nomor rekening ${data.nmr_rekening}`, null)
    }
  })
  .catch(err => {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}

module.exports = {
  createNasabah,
  getAllNasabah,
  getNasabah,
  getMutasi
}