const express = require('express')
const app = express()
const fs = require('fs');
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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/out/index.html')
})

app.use((req, res, next) => {
    var url = req.url.split('?')[0].split('/');
    var _path = url[0] + (url[1] === null || url[1] === '' ? '' : url[1])
    try {
        if(fs.existsSync(__dirname + '/frontend/out/' + _path + '.html')) {
            next();
        } else {
            res.status(404);
            res.sendFile(__dirname + '/frontend/out/404.html')
        }
    } catch (err) {
        console.error(err);
    }
})

app.get('/solutions/:name', (req, res) => {
    res.sendFile(__dirname + '/frontend/out/solutions/' + req.params.name + '.html')
})

app.get('/newsroom/:name', (req, res) => {
    res.sendFile(__dirname + '/frontend/out/newsroom/' + req.params.name + '.html')
})

app.get('/:name', (req, res) => {
    res.sendFile(__dirname + '/frontend/out/' + req.params.name + '.html')
})






app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.sendFile(__dirname + '/frontend/out/404.html')
});

module.exports =app 
