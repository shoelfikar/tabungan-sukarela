const modelsBunga = require('../models/bunga')
const setorModels = require('../models/setor')
const helpers = require('../helpers/helpers')
const hari = require('../helpers/random')



const createBunga = (req, res)=> {
  const {
    nmr_rekening,
    tgl_awal,
    tgl_akhir,
    suku_bunga,
    tahun
  }= req.body
  const data = {
    nmr_rekening: nmr_rekening,
    tgl_awal: tgl_awal,
    tgl_akhir: tgl_akhir,
    suku_bunga: suku_bunga,
    tahun: tahun
  }
  setorModels.getSetorByRek(data.nmr_rekening)
  .then(result => {
    const setoran = result
    const dataSetoran = []
    let nilaiSetoran = []
    let ST = 0
    if (setoran !== 0){
      for (let i = 0; i < setoran.length; i++){
        dataSetoran.push(setoran[i].jml_setor)
      }
      nilaiSetoran = dataSetoran.sort((a,b)=> a-b)
      ST = nilaiSetoran[0]
      const sukuBungaBulan = hari.hitungBunga(data.tgl_awal,data.tgl_akhir, ST,data.suku_bunga / 100, tahun)
      const newData = {
        nmr_rekening: nmr_rekening,
        tgl_awal : tgl_awal,
        tgl_akhir: tgl_akhir,
        bunga: sukuBungaBulan,
        saldo_terendah : ST
      }
      modelsBunga.createBunga(newData)
      .then(result => {
        helpers.response(res, result, 200, `Bunga berhasil di tambahkan ke  nomor rekening ${newData.nmr_rekening}`, null)
      })
      .catch(err => {
        helpers.response(res, null, 500, 'Internal server error', err)
      })
    }else{
      helpers.response(res, null, 404, `anda tidak mendapat bungan!`, null)
    }
  })
  .catch(err => {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}



const getBungaByRek = (req, res)=> {
  const {
    nmr_rekening
  } = req.body
  const data = {
    nmr_rekening : nmr_rekening
  }

  modelsBunga.getBungaByRek(data.nmr_rekening)
  .then(result => {
    if(result.length == 0){
      helpers.response(res, null, 404, `Data nasabah dengan nomor rekening ${data.nmr_rekening} tidak ditemukan`, null)
    }else{
      helpers.response(res, result, 200, `Data rekapan bunga dengan nomor rekening ${data.nmr_rekening}`, null)
    }   
  })
  .catch(err => {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server error', err)
  })
}




module.exports = {
  createBunga,
  getBungaByRek
}