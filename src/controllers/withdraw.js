const modelsNasabah = require('../models/nasabah')
const modelsWd = require('../models/withdraw')
const helpers = require('../helpers/helpers')


const createWd = (req, res)=> {
  const {
    nmr_rekening,
    jml_withdraw
  }= req.body
  
  const data = {
    nmr_rekening : nmr_rekening,
    jml_withdraw : jml_withdraw,
    tgl_withdraw : new Date()
  }

  modelsNasabah.getNasabah(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      console.log(result)
      if(result[0].saldo < data.jml_withdraw){
        helpers.response(res, null, 403, `saldo anda tidak cukup untuk melakukan withdraw`, null)
      }else{
        modelsWd.createWithdraw(data)
        .then(result => {
          helpers.response(res, result, 200, `saldo berhasil di withdraw sebesar ${data.jml_withdraw} dari rekening ${data.nmr_rekening}`, null)
        })
        .catch(err => {
          helpers.response(res, null, 500, 'Internal server error', err)
        })
      }
    }
  })
  .catch(err => {
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}



const getWdByRek = (req, res)=> {
  const {nmr_rekening} = req.body
  const data = {
    nmr_rekening: nmr_rekening
  }
  modelsWd.getWdByRek(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      helpers.response(res, result, 200, `Mutasi Withdraw dana dari rekening ${data.nmr_rekening}`, null)
    }
  })
  .catch(err => {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}




module.exports = {
  createWd,
  getWdByRek
}