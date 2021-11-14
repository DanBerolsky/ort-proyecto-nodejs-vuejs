import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListaProducto from '../views/ListaProducto.vue'
import AgregarProducto from '../views/AgregarProducto.vue'
import ModificarProducto from '../views/ModificarProducto.vue'
import CrearCuenta from '../views/CrearCuenta.vue'
import IniciarSesion from '../views/IniciarSesion.vue'
import ListaDeUsuarios  from '../views/ListaDeUsuarios.vue'
import ModificarUsuario  from '../views/ModificarUsuario.vue'
import Carrito  from '../views/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/productos',
    name: 'ListaProducto',
    component: ListaProducto
  },
  {
    path: '/productos/agregarProducto',
    name: 'agregarProducto',
    component: AgregarProducto
  },
  {
    path: '/modificarProducto/:id',
    name: 'modificarProducto',
    component: ModificarProducto
  },
  {
    path: '/modificarUsuario/:id',
    name: 'modificarUsuario',
    component: ModificarUsuario
  },
  {
    path: '/CrearCuenta',
    name: 'CrearCuenta',
    component: CrearCuenta
  },
  {
    path: '/IniciarSesion',
    name: 'IniciarSesion',
    component: IniciarSesion
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: ListaDeUsuarios
  },{
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
