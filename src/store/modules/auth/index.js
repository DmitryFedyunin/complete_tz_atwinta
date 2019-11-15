import api from '../../../api'

export default {
  namespaced: true,
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null,
    editFrom: null
  },
  mutations: {
    authRequest (state) {
      state.status = 'loading'
    },
    authSuccess (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
      localStorage.setItem('token', token)
      localStorage.setItem('user', user)
    },
    authError (state) {
      state.status = 'error'
      localStorage.removeItem('token')
    },
    logoutUser (state) {
      state.status = ''
      state.token = ''
      localStorage.removeItem('token')
    },
    setUser (state, user) {
      state.user = user
    },
    editUser (state, editFrom) {
      state.user = editFrom
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('authRequest')
        api.post('/auth/login', user)
          .then(resp => {
            const { token, user } = resp.data
            commit('authSuccess', token, user)
            resolve(resp.data)
          })
          .catch(err => {
            commit('authError')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logoutUser')
        resolve()
      })
    },
    setUser ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('/user')
          .then(resp => {
            commit('setUser', resp.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    editProfileUser ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        api.post('/user', payload)
          .then(resp => {
            commit('editUser', resp.data)
            resolve(resp.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
