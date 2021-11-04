const router = require('express').Router()
const producto = require('../models/productos')

router.get('/', function(req,res) {//de app llamo get para ir a la ruta y hacer algo
    //cuando tiene el pedido ejecuta esto
    producto.find().then(data => { //muestro todos los datos de categoria 
        console.log('back');
        res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})

router.get('/:id', function(req,res) {//de app llamo get para ir a la ruta y hacer algo
    //cuando tiene el pedido ejecuta esto
    const id = req.params.id
    res.send(id)
})


router.post('/', function(req,res) {
    const prod = new producto ({nombre: req.body.nombre, precio: req.body.precio})
    res.send('post')
})

router.put('/:id', function(req,res) {
    res.send('put')
})

router.delete('/:id', function(req,res) {
    res.send('delete')
})



module.exports = router;