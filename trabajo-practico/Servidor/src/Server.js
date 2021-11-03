const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

const puerto = 3000

app.use(cors())

app.use((req,res,next)=>{

    const url = 'mongodb://localhost:27017/ort-tp2'

    mongoose
    .connect(url)
    .then(conn => {
        next()
    })
    .catch(err => console.log(err))

})

const productos = require('./router/productos-router')

app.use("/productos",productos)

app.listen(puerto,() => {console.log('conectado')})
