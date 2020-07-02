const getRekening =  (digit)=>  {
    const b = new Date().getDate().toString();
    const c = new Date().getMonth() + 1;
    const d = new Date().getFullYear().toString();
    const f = String(c);
    let a = Math.floor(100000 + Math.random() * 900000);
    a = String(a);
    a = a.substring(0, digit);
    const e = d + f + b + a;
    return e
}


const hitungBunga = (awal, akhir, ST,SB, tahun)=> {
    const timeDiff  = (new Date(akhir)) - (new Date(awal))
    const days      = timeDiff / (1000 * 60 * 60 * 24)
    const totalBunga = Math.round(ST * SB * days / tahun)
    return totalBunga
}



module.exports = {
    getRekening,
    hitungBunga
}