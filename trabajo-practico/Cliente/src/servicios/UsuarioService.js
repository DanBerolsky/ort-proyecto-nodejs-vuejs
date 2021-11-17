import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const url = '/usuarios'

export default {
  get() {
    return apiClient.get(url)
  },
  getById(id) {
    return apiClient.get(url + '/' +  id)
  },
  post(usuario) {
    return apiClient.post(url + '/signup', usuario) 
  },
  postLogin(usuario) {
    return apiClient.post(url + '/login', usuario) 
  },
  delete(id) {
    return apiClient.delete(url + '/' + id)
  },
  put(id,usuario) {
      console.log(usuario)
      return apiClient.put(url + '/' + id, usuario)
  },
}