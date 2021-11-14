const mongoose = require('mongoose');
const {Schema} = mongoose 


const rolesValidos = {
    values: ["ADMIN", "USER"],
    mensaje: '{VALUE} no es un rol válido'
}

//defino el schema
const Usuario = new Schema({ 

    //defino tipodedato
    nombre: {  
       type: String,
       required: [true, 'Por favor complete el nombre']
    },
    password:{
        type: String,
        required: [true,'Por favor complete la contraseña']
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Por favor complete el email']
    },
    date:{
        type: Date,
        default: Date.now
    }, 
    rol: {
        type: String,
        default: 'USER',
        required: [true],
        enum: rolesValidos
    }
}, {
    colecction: 'usuarios'
});




//exporto y creo el modelo
module.exports = mongoose.model('Usuario', Usuario)
