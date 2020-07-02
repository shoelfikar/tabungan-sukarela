const modelsSetor = require('../models/setor')
const modelsNasabah = require('../models/nasabah')
const helpers = require('../helpers/helpers')


const createSetor = (req, res)=> {
  const {
    nmr_rekening,
    jml_setor
  }= req.body
  const data = {
    nmr_rekening: nmr_rekening,
    jml_setor: jml_setor,
    tgl_setor : new Date()
  }
  modelsNasabah.getNasabah(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      modelsSetor.createSetor(data)
      .then(result => {
        helpers.response(res, result, 200, `Dana berhasil ditambah ke nomor rekening ${data.nmr_rekening}`, null)
      })
    }
  })
  .catch(err => {
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}


const getSetorByRek = (req, res)=> {
  const {nmr_rekening} = req.body
  const data = {
    nmr_rekening: nmr_rekening
  }
  modelsSetor.getSetorByRek(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      helpers.response(res, result, 200, `Mutasi setoran dana dari rekening ${data.nmr_rekening}`, null)
    }
  })
  .catch(err => {
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}



module.exports = {
  createSetor,
  getSetorByRek
}