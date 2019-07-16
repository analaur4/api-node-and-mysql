const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');
const router = require('./src/app/routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// definindo rotas
app.use('/', router);

// iniciar o servidor
app.listen(port);
console.log('API funcionando!');
