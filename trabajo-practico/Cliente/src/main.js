import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createApp } from 'vue'
import {store} from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


createApp(App).use(router).use(router).use(store).use(router).mount('#app')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
