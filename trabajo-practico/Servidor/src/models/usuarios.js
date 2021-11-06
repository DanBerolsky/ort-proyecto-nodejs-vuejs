const mongoose = require('mongoose')
const {Schema} = mongoose 

const Usuario = new Schema({ //defino el schema

    nombre: {  //defino tipodedato
       type: String,
       required: true
    },
    password:{
        type: Number,
        required: true
    }, 
}, {
    colecction: 'usuarios'
})

//exporto y creo el modelo
module.exports = mongoose.model('Usuario', Usuario)
