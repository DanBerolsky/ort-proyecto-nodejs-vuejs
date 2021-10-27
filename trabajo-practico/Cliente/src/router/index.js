import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sistema from '../views/Sistema.vue'
import About from '../views/About.vue'
import ListaProducto from '../views/ListaProducto.vue'




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
    path: '/ListaProducto',
    name: 'ListaProducto',
    component: ListaProducto
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
