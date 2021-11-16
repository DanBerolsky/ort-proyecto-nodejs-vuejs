const router = require('express').Router()
const producto = require('../models/productos')

router.get('/', function (req, res) {//de app llamo get para ir a la ruta y hacer algo
   
    producto.find().then(data => { //muestro todos los datos de categoria 
        console.log('accion exitosa - listaProd');
        res.send(data)
    })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})

router.get('/:id', function (req, res) {
    
    const id = req.params.id
   
    producto.findById(id).then(data => {
        console.log('accion exitosa - obtenerId');
        res.send(data)
    })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})

router.post('/', async function (req, res) {
    await producto.create({ nombre: req.body.nombre, precio: req.body.precio, talle: req.body.talle });
    res.send('post')
})

router.put('/:id', async function (req, res) {
    const id = req.params.id
    await producto.findByIdAndUpdate({ _id: id },{ nombre: req.body.nombre, precio: req.body.precio, talle: req.body.talle });
    console.log('accion exitosa - modificado');
    res.send('put')
})

router.delete('/:id', async function (req, res) {
    
    producto.findByIdAndRemove(req.params.id, req.body, function (err, data) {
        if (!err) {
            console.log('accion exitosa - borrado');
            res.send(data)
        } else {
            console.log(err);
            res.send('err')
        }
    }) 

})

module.exports = router;