const router = require('express').Router()
const producto = require('../models/productos')

router.get('/', function (req, res) {//de app llamo get para ir a la ruta y hacer algo
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

router.get('/:id', function (req, res) {//de app llamo get para ir a la ruta y hacer algo
    //cuando tiene el pedido ejecuta esto
    const id = req.params.id
    producto.findById(id).then(data => { //muestro todos los datos de categoria 
        console.log('back');
        res.send(data)
    })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})


router.post('/', async function (req, res) {
    await producto.create({ nombre: req.body.nombre, precio: req.body.precio });
    res.send('post')
})

router.put('/:id', function (req, res) {
    res.send('put')
})

router.delete('/:id', async function (req, res) {
    console.log('gol');
    producto.findByIdAndRemove(req.params.id, req.body, function (err, data) {
        if (!err) {
            console.log("Deleted");
            res.send(data)
            
        }
    });

    
})



module.exports = router;