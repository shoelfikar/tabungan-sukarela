const db = require('../configs/db')



const createWithdraw = (data)=> {
  return new Promise((resolve, reject)=> {
        db.query("INSERT INTO withdraw SET ?", data, (err, result)=> {
          if(err){
            reject(new Error(err))
          }else{
            resolve(result)
          }
        })
  })
}



const getWdByRek = (idRek)=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT nasabah.*, withdraw.jml_withdraw, withdraw.tgl_withdraw FROM nasabah INNER JOIN withdraw ON nasabah.nmr_rekening = withdraw.nmr_rekening WHERE withdraw.nmr_rekening =?", idRek, (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}




module.exports = {
 createWithdraw,
 getWdByRek
}