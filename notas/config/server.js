require('dotenv').config();
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './notas/app/views');

app.use(express.static('./notas/app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

console.log('Valor Atual ' + process.env.APP_CRUD);

consign()
    .include('notas/app/routes')
    .then('notas/config/dbConnection.js')
    .then('notas/app/models')
    .then('notas/app/controllers')
    .into(app);

module.exports = app;