import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      carritoCompras:[],
      usuario:'hola'
    }
  },
  
})

export {store}