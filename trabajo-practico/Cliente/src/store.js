import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      productos : [{nombre="remera",precio:1600},{nombre="zapatilla",precio:1600}]
    }
  },
  mutations: {
    
  }
})

export {store}