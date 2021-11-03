const router = require('express').Router()
const producto = require('../models/productos')


router.get('/', function(req,res) {//de app llamo get para ir a la ruta y hacer algo
    //cuando tiene el pedido ejecuta esto
    producto.find().then(data => { //muestro todos los datos de categoria 
        console.log('back');
        res.send(data)
        })
    
    

})

router.get('/:id', function(req,res) {//de app llamo get para ir a la ruta y hacer algo
    //cuando tiene el pedido ejecuta esto
    const id = req.params.id
    res.send(id)

})


router.get('/crearProducto', function(req,res) {
    console.log(hola);
    res.send('post')

})
router.post('/crearProducto', function(req,res) {
    console.log(hola);
    res.send('post')

})

router.put('/', function(req,res) {
    res.send('put')

})

router.delete('/', function(req,res) {
    res.send('delete')

})



module.exports = router;