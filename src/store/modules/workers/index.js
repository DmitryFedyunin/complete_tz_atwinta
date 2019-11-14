import api from '../../../api'

export default {
  namespaced: true,
  state: {
    workers: {
      list: [],
      pagination: {
        current_page: 0,
        last_page: 0
      }
    },
    workerUser: null
  },
  mutations: {
    getWorkers (state, workers) {
      state.workers.list = workers.data
      state.workers.pagination = {
        current_page: workers.current_page,
        last_page: workers.last_page
      }
    },
    getWorkerUser (state, workerUser) {
      state.workerUser = workerUser
    }
  },
  actions: {
    getWorkers ({ commit }, page) {
      return new Promise((resolve, reject) => {
        api.get('/workers', { params: { page } })
          .then(resp => {
            commit('getWorkers', resp.data)
            resolve(resp.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getWorkersUser ({ commit }, id) {
      return new Promise((resolve, reject) => {
        api.get(`/workers/${id}`)
          .then(resp => {
            commit('getWorkerUser', resp.data)
            resolve(resp.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {}
}
