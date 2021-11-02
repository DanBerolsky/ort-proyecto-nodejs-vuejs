import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProductos() {
    return apiClient.get('/productos')
  },
  getProductosPor(id) {
    return apiClient.get('/productos/' + id)
  },
  postProductos(producto) {
    return apiClient.post('/productos/', producto)
  },
  deleteProducto(id) {
    return apiClient.delete('/productos/' + id)
  },
  putProducto(producto) {
      console.log(producto)
      return ('/productos/' + producto.id , producto)
  },
}
