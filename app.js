const express = require('express');
const app = express()
const morgan = require

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use('/', rotaProdutos);
app.use('/', rotaPedidos);

module.exports = app;