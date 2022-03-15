const express = require('express')
const app = express()

//requiring  basic middlewares
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require('morgan')
const dotenv = require('dotenv').config()


//database
const {connectionDB} = require('./config/db')

//routes
const router = require('./routes/index');


//using basic middlwares
app.use(bodyParser.json())

app.use(cookieParser())
app.use(cors());
app.use(morgan('dev'))




//database connectivity
connectionDB()

//routes middleware
app.use('/api', router);

app.use('/assets', express.static('frontend/out/assets'));
app.use('/_next', express.static('frontend/out/_next'));

app.use(['/:url', '/'], express.static('frontend/out'))


module.exports =app 
