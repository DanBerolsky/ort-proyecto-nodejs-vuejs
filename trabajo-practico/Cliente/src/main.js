import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import {store} from './store'

try{
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
catch(err){
  console.log(err.message)
}

createApp(App).use(router).use(store).mount('#app')



