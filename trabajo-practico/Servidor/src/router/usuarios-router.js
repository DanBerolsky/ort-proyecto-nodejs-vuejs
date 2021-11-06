const router = require('express').Router()
const usuarios = require('../models/usuarios')

router.get('/', function (req, res) {
    usuarios.find().then(data => { 
        console.log('accion exitosa - listaUsu');
        res.send(data)
    })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})

router.get('/:id', function (req, res) {
    const id = req.params.id
    usuarios.findById(id).then(data => {
        console.log('accion exitosa - obtenerId');
        res.send(data)
    })
        .catch(err => {
            console.log(err);
            res.send('err')
        })
})

router.post('/', async function (req, res) {
    
    const usuario = req.body  
    const existe = usuarios.find((usu) => {
        return usu.nombre == usuario.nombre
    })

    if(!existe) {
        console.log('accion exitosa - crearusuario');
        await producto.create({ nombre: req.body.nombre, password: req.body.password });    
    } else {
        //status 409 que hay un conflicto en el codigo
        res.status(409).send('"Error, ya existe el usuario"')
    }
   
})

router.put('/:id', function (req, res) {
    res.send('put')
})

router.delete('/:id', async function (req, res) {
    
    usuarios.findByIdAndRemove(req.params.id, req.body, function (err, data) {
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