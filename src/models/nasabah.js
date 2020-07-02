const db = require('../configs/db');

const createNasabah = (data)=> {
    return new Promise((resolve, reject)=> {
        db.query("INSERT INTO nasabah SET ?", data, (err, result)=> {
            if(err){
                reject(new Error(err))
            }else{
                resolve(result)
            }
        })
    })
}



const getAllNasabah = ()=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM nasabah", (err, result)=> {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}


const getNasabah = (idRekening)=> {
    return new Promise((resolve,reject)=> {
        db.query("SELECT * FROM nasabah WHERE nmr_rekening = ?", idRekening, (err, result)=> {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        } )
    })
}


const getMutasi = (idRek)=> {
    return new Promise((resolve,reject)=> {
        db.query("SELECT nasabah.*, setor.jml_setor,setor.tgl_setor, withdraw.jml_withdraw, withdraw.tgl_withdraw FROM nasabah INNER JOIN setor ON nasabah.nmr_rekening = setor.nmr_rekening INNER JOIN withdraw ON nasabah.nmr_rekening = withdraw.nmr_rekening WHERE nasabah.nmr_rekening = ?", idRek, (err, result)=> {
            if(err){
                reject(new Error(err))
            }else{
                resolve(result)
            }
        })
    })
}

module.exports = {
    createNasabah,
    getAllNasabah,
    getNasabah,
    getMutasi
}