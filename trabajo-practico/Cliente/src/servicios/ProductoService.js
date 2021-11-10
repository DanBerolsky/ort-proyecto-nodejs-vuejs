import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const url = '/productos'

export default {
  get() {
    console.log('axios');
    return apiClient.get(url)
  },
  getById(id) {
    return apiClient.get(url + '/' +  id)
  },
  post(producto) {
    return apiClient.post(url + '/', producto)
  },
  delete(id) {
    return apiClient.delete(url + '/' + id)
  },
  put(producto,id) {
      console.log(producto)
      console.log(id);
      return (url + '/' + id , producto)
  },
}
