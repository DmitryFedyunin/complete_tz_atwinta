import axios from 'axios'
import qs from 'query-string'

const api = axios.create({
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'bracket' })
  }
})

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    config.baseURL = process.env.NODE_ENV === 'development' ? '//test.atwinta.ru/api/v1' : '/api/v1'

    return config
  },
  reason => Promise.reject(reason)
)

export default api
