///
///
///
//ESTO SE TENDRIA QUE BORRAR MEPA PORQ YA LO HACE SERVER
///
///
///


const mongoose = require('mongoose')
//modelos
const producto = require('./models/productos')


const url = 'mongodb://localhost:27017/ort-tp2'


//me conecto al servidor
mongoose

    .connect(url)//conecto a la bdd

    .then(conn => { //una vez conectada
     
      producto.find().then(res => { //muestro todos los datos de categoria ------> esto se podria sacar??? xq hace esto en la conexion de bdd
        console.log(res)
        })
        
    })

    .catch(err => console.log(err))


/*
//midlewares
app.use((req, res, next) => {
    console.log('request recobodp')
    next()
})

app.use('/usuario', (req, res, next) => {
    console.log('request recobodp')
    res.setHeader('Content-Type', 'application/xhtml')
    next()
})
*/