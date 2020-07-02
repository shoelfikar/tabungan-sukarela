const db = require('../configs/db');
const { response } = require('../helpers/helpers');



const createBunga = (data)=> {
  return new Promise((resolve, reject)=> {
    db.query("INSERT INTO bunga SET ? ", data, (err, result)=> {
        if(err){
          reject(new Error(err))
        }else{
          resolve(result)
        }
    })
  })
}


const getBungaByRek = (idRek)=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT nasabah.*, bunga.id_bunga, bunga.saldo_terendah, bunga.bunga,bunga.tgl_awal,bunga.tgl_akhir FROM nasabah INNER JOIN bunga ON nasabah.nmr_rekening = bunga.nmr_rekening WHERE bunga.nmr_rekening = ?", idRek, (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}


module.exports = {
  createBunga,
  getBungaByRek
}