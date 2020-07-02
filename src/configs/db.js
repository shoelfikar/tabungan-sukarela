const mysql = require('mysql')
const connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.MYUSER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE 
})

connection.connect(err => {
    if(err) {
        console.log(`Error to connect database : ${err}`)
    }
})

module.exports = connection