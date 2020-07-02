const db = require('../configs/db')



const createSetor = (data)=> {
  return new Promise((resolve, reject)=> {
        db.query("INSERT INTO setor SET ?", data, (err, result)=> {
          if(err){
            reject(new Error(err))
          }else{
            resolve(result)
          }
        })
  })
}



const getSetorByRek = (idRek)=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT nasabah.*, setor.jml_setor, setor.tgl_setor FROM nasabah INNER JOIN setor ON nasabah.nmr_rekening = setor.nmr_rekening WHERE setor.nmr_rekening =?", idRek, (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}




module.exports = {
  createSetor,
  getSetorByRek
}