const mongoose = require('mongoose')//requiero paquete instalado (npm i mongoose)

const producto = require('./models/productos')//me traigo el modelo de la carpeta exportada

/*
moongoose.connection.on('error', err => {
    console.log(err)
})*/

const url = 'mongodb://localhost:27017/ort-tp2'


//me conecto al servidor
mongoose

    .connect(url)//conecto a la bdd

    .then(conn => { //una vez conectada
     
      producto.find().then(res => { //muestro todos los datos de categoria 
        console.log(res)
        })
        
    })

    .catch(err => console.log(err))//si hay un error pasa esot

//nota: todas las operaciones son promesas



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



//la aplicacion escucha comunicacion a traves del puerto 444
app.listen(4444)*/

