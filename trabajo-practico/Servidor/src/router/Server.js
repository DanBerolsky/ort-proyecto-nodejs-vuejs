const express = require('express')

const app = express()

const puerto = 3000

const productos = require('./productos-router')

app.use(productos)




const server = app.listen(puerto,() => {console.log('conectado')})
