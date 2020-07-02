require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Router = require('./src/routers/index')



app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use('/api/sukarela', Router)


app.listen(port, ()=> {
    console.log(`app is running in port ${port}`)
})
