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



router.post('/login', async function (req, res) {

   
    try {
        const usuEncontrado = await usuarios.findOne({ email: req.body.email });
        
        if (usuEncontrado) {
          const cmp = await bcrypt.compare(req.body.password, usuEncontrado.password);
          if (cmp) {
            //   ..... further code to maintain authentication like jwt or sessions
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




//signup
router.post('/signup', async function (req, res) {

    const usuario = req.body;
    const password = usuario.password;
    const email = usuario.email;
    const salt = 10;

    const usuEncontrado = await usuarios.find({ email: email }).limit(1);//tre el usuario

    //si no lo encuentra es un arrayvacio
    if (usuEncontrado.length == 0) {
        const passEncriptada = await bcrypt.hash(password, salt);
        await usuarios.create({ nombre: req.body.nombre, password: passEncriptada, email: req.body.email });
        console.log('accion exitosa - crearusuario');
        res.send('post')
    } else {
        console.log('Error, ya existe el usuario');

    }

})





router.put('/:id', async function (req, res) {
    const id = req.params.id
    await usuarios.findByIdAndUpdate({ _id: id }, { nombre: req.body.name, password: req.body.password, email: req.body.email });
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