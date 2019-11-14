import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Workers from './modules/workers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: Auth,
    workers: Workers
  }
})
