const mongoose = require('mongoose')//requiero paquete instalado (npm i mongoose)


//saco el atributo schema(objeto) de mongoose porque necesito eso
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

//exporto el modelo
module.exports = mongoose.model('Producto', Producto)//doy el resultado a moongose - creo el modelo
