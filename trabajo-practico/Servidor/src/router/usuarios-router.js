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

//login
router.get('/login', function (req, res) {
    
    

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
    const usuEncontrado = await usuarios.find({ email: usuario.email }).limit(1);//tre el usuario

    if(usuEncontrado.length == 0) {//si no lo encuentra es un arrayvacio
        console.log('accion exitosa - crearusuario');
        await usuarios.create({ nombre: req.body.nombre, password: req.body.password, email: req.body.email });
        res.send('post')
    } else {
        console.log('Error, ya existe el usuario');

    }

})

router.put('/:id', async function (req, res) {
    const id = req.params.id
    await usuarios.findByIdAndUpdate({ _id: id },{ nombre: req.body.nombre, password: req.body.password, email: req.body.email });
    console.log('accion exitosa - modificado');
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