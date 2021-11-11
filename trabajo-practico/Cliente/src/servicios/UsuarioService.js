import axios from 'axios'

//quizas esto tiene q ir en un archivo aparte xq q se tenga q crear 1 axio por cada service???
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
    console.log('axios');
    return apiClient.get(url)
  },
  getById(id) {
    return apiClient.get(url + '/' +  id)
  },
  post(usuario) {
    console.log('front');
    return apiClient.post(url + '/', usuario) 
  },
  delete(id) {
    return apiClient.delete(url + '/' + id)
  },
  put(usuario) {
      console.log(usuario)
      return (url + '/' + usuario.id , usuario)
  },
}