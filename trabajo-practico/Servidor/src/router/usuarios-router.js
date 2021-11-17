const router = require('express').Router()
const usuarios = require('../models/usuarios')
const bcrypt = require("bcryptjs");



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


//registro
router.post('/signup', async function (req, res) {

    const usuario = req.body;
    const salt = 10;
    
    try {
    const usuEncontrado = await usuarios.find({ email: usuario.email }).limit(1);//trae el usuario
        
    //si no lo encuentra es un arrayvacio
        if (usuEncontrado.length == 0) {
            const passEncriptada = await bcrypt.hash(usuario.password, salt);
            await usuarios.create({ nombre: req.body.nombre, password: passEncriptada, email: req.body.email });
            console.log('accion exitosa - crearusuario');
            res.send('post')
        } else {
            console.log('Error, ya existe el usuario');

        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error Occured");
  } 
})

//logueo
router.post('/login', async function (req, res) {

    try {
        const usuEncontrado = await usuarios.findOne({ email: req.body.email });
        
        if (usuEncontrado) {
          const cmp = await bcrypt.compare(req.body.password, usuEncontrado.password);
          if (cmp) {
            res.send({"nombre": usuEncontrado.nombre, "rol": usuEncontrado.rol});
            console.log('accion exitosa - InicioSesion');

          } else {
            res.send("Wrong");
            console.log('Error, datos mal ingresados');
          }
        } else {
          res.send("Wrong");
          console.log('Error, datos mal ingresados');
        }
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error Occured");
      } 
})


router.put('/:id', async function (req, res) {
    const id = req.params.id
   
    try {
        await usuarios.findByIdAndUpdate({ _id: id }, { nombre: req.body.name, password: req.body.password, email: req.body.email });
        console.log('accion exitosa - modificado');
        res.send('put')
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error Occured");
    } 
})

router.delete('/:id', async function (req, res) {
    try {
        usuarios.findByIdAndRemove(req.params.id, req.body, function (err, data) {
            if (!err) {
                console.log('accion exitosa - borrado');
                res.send(data)
            } else {
                console.log(err);
                res.send('err')
            }
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server error Occured");
    } 

})






module.exports = router;