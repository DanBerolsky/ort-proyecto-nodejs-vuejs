const mongoose = require('mongoose')

//saco el atributo schema(objeto) de mongoose 
const {Schema} = mongoose //es lo mismo que const Schema = mongoose.Schema

const Producto = new Schema({ //defino el schema

    nombre: {  //defino tipodedato
       type: String,
       required: true
    },
    precio:{
        type: Number,
        required: true
    }, 
}, {
    colecction: 'productos'
})

//exporto y creo el modelo
module.exports = mongoose.model('Producto', Producto)
