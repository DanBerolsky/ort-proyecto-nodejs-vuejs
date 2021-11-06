const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

//bdd
app.use((req,res,next)=>{

    const url = 'mongodb://localhost:27017/ort-tp2'

    mongoose
    .connect(url)
    .then(conn => {
        next()
    })
    .catch(err => console.log(err))

})

//routes
const productos = require('./router/productos-router')
const usuarios = require('./router/usuarios-router')

app.use("/productos",productos)
app.use("/usuarios",usuarios)

//server
const puerto = 3000
app.listen(puerto,() => {console.log('conectado')})
