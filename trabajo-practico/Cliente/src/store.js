import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      productos : [{descripcion:"Remera",precio:1600},{descripcion:"Zapatilla",precio:1600}]
    }
  },
  mutations: {
    
  }
})

export {store}