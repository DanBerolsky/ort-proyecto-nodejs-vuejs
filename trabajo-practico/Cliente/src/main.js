import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import Vue from 'vue'



createApp(App).use(router).use(router).use(store).use(router).mount('#app')

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  