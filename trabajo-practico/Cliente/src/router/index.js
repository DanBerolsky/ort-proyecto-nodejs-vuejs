import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sistema from '../views/Sistema.vue'
import About from '../views/About.vue'
import ListaProducto from '../views/ListaProducto.vue'
import AgregarProducto from '../views/AgregarProducto.vue'
import ModificarProducto from '../views/ModificarProducto.vue'
import CrearCuenta from '../views/CrearCuenta.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/Sistema',
    name: 'Sistema',
    component: Sistema
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
    path: '/CrearCuenta',
    name: 'CrearCuenta',
    component: CrearCuenta
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
