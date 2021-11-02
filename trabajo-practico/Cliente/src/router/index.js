import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sistema from '../views/Sistema.vue'
import About from '../views/About.vue'
import ListaProducto from '../views/ListaProducto.vue'
import AgregarProducto from '../views/AgregarProducto.vue'
import QuitarProducto from '../views/QuitarProducto.vue'
import ModificarProducto from '../views/ModificarProducto.vue'

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
    path: '/listaProducto',
    name: 'ListaProducto',
    component: ListaProducto
  },
  {
    path: '/agregarProducto',
    name: 'agregarProducto',
    component: AgregarProducto
  },
  {
    path: '/quitarProducto',
    name: 'quitarProducto',
    component: QuitarProducto
  },
  {
    path: '/modificarProducto',
    name: 'modificarProducto',
    component: ModificarProducto
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
