import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get() {
    console.log('axios');
    return apiClient.get('/productos')
  },
  getById(id) {
    return apiClient.get('/productos/' + id)
  },
  post(producto) {
    return apiClient.post('/productos/', producto)
  },
  delete(id) {
    return apiClient.delete('/productos/' + id)
  },
  put(producto) {
      console.log(producto)
      return ('/productos/' + producto.id , producto)
  },
}
