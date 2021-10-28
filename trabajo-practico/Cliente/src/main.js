import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

createApp(App).use(router).use(router).use(store).use(router).mount('#app')

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  